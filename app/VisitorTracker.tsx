'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { X, Shield, MapPin, Globe, Eye, Users, Compass, Laptop, RefreshCw, Download, Trash2, ExternalLink } from 'lucide-react';

interface VisitRecord {
  id: string;
  timestamp: string;
  path: string;
  country: string;
  city: string;
  countryCode: string;
  region: string;
  referrer: string;
  device: string;
  browser: string;
}

interface AnalyticsData {
  totalViews: number;
  uniqueVisitors: number;
  countries: Record<string, number>;
  cities: Record<string, number>;
  referrers: Record<string, number>;
  recentVisits: VisitRecord[];
}

const STORAGE_KEY = '_vaish_visitor_analytics';
const VISITOR_ID_KEY = '_vaish_vid';
const SESSION_KEY = '_vaish_session_active';

function parseReferrer(ref: string): string {
  if (!ref || ref === '') return 'Direct / None';
  try {
    const url = new URL(ref);
    const host = url.hostname.toLowerCase();
    if (host.includes('google')) return 'Google Search';
    if (host.includes('x.com') || host.includes('twitter.com') || host.includes('t.co')) return 'X / Twitter';
    if (host.includes('linkedin.com') || host.includes('lnkd.in')) return 'LinkedIn';
    if (host.includes('github.com')) return 'GitHub';
    if (host.includes('bing.com')) return 'Bing Search';
    if (host.includes('duckduckgo.com')) return 'DuckDuckGo';
    if (host.includes('instagram.com')) return 'Instagram';
    return host.replace(/^www\./, '');
  } catch {
    return 'Referral';
  }
}

function getDeviceInfo(): { device: string; browser: string } {
  if (typeof window === 'undefined') return { device: 'Unknown', browser: 'Unknown' };
  const ua = navigator.userAgent;
  let device = 'Desktop';
  if (/mobile/i.test(ua)) device = 'Mobile';
  else if (/tablet|ipad/i.test(ua)) device = 'Tablet';

  let browser = 'Browser';
  if (/chrome|crios/i.test(ua) && !/edge|opr\//i.test(ua)) browser = 'Chrome';
  else if (/safari/i.test(ua) && !/chrome/i.test(ua)) browser = 'Safari';
  else if (/firefox|fxios/i.test(ua)) browser = 'Firefox';
  else if (/edg/i.test(ua)) browser = 'Edge';

  return { device, browser };
}

export default function VisitorTracker() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<AnalyticsData>({
    totalViews: 0,
    uniqueVisitors: 0,
    countries: {},
    cities: {},
    referrers: {},
    recentVisits: [],
  });
  const [activeTab, setActiveTab] = useState<'overview' | 'locations' | 'referrers' | 'recent' | 'cloud'>('overview');

  const loadData = useCallback(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setData(JSON.parse(stored));
      }
    } catch {
      // Ignore local storage errors
    }
  }, []);

  useEffect(() => {
    loadData();

    // Inconspicuous visit tracking: Record on page load
    const trackVisit = async () => {
      try {
        let vid = localStorage.getItem(VISITOR_ID_KEY);
        const isNewVisitor = !vid;
        if (!vid) {
          vid = 'v_' + Math.random().toString(36).substring(2, 10) + Date.now().toString(36);
          localStorage.setItem(VISITOR_ID_KEY, vid);
        }

        const isNewSession = !sessionStorage.getItem(SESSION_KEY);
        if (isNewSession) {
          sessionStorage.setItem(SESSION_KEY, '1');
        }

        const storedData: AnalyticsData = (() => {
          try {
            const raw = localStorage.getItem(STORAGE_KEY);
            return raw
              ? JSON.parse(raw)
              : {
                  totalViews: 0,
                  uniqueVisitors: 0,
                  countries: {},
                  cities: {},
                  referrers: {},
                  recentVisits: [],
                };
          } catch {
            return {
              totalViews: 0,
              uniqueVisitors: 0,
              countries: {},
              cities: {},
              referrers: {},
              recentVisits: [],
            };
          }
        })();

        // Resolve location silently (HTTPS free API with timezone fallback)
        let country = 'Unknown';
        let city = 'Unknown';
        let region = '';
        let countryCode = 'UN';

        try {
          const res = await fetch('https://ipwho.is/?fields=success,country,city,region,country_code', {
            signal: AbortSignal.timeout(3500),
          });
          if (res.ok) {
            const geo = await res.json();
            if (geo.success) {
              country = geo.country || 'Unknown';
              city = geo.city || 'Unknown';
              region = geo.region || '';
              countryCode = geo.country_code || 'UN';
            }
          }
        } catch {
          // Fallback to client timezone to infer region/locale
          const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || 'Unknown';
          const parts = tz.split('/');
          region = parts[0] || 'Unknown';
          city = (parts[1] || tz).replace(/_/g, ' ');
          country = parts[0] ? `${parts[0]} (${tz})` : 'Undisclosed';
        }

        const refSource = parseReferrer(document.referrer);
        const { device, browser } = getDeviceInfo();

        // Increment stats
        storedData.totalViews = (storedData.totalViews || 0) + 1;
        if (isNewVisitor) {
          storedData.uniqueVisitors = (storedData.uniqueVisitors || 0) + 1;
        }

        storedData.countries = storedData.countries || {};
        storedData.countries[country] = (storedData.countries[country] || 0) + 1;

        if (city && city !== 'Unknown') {
          storedData.cities = storedData.cities || {};
          const cityLabel = region ? `${city}, ${country}` : `${city}, ${country}`;
          storedData.cities[cityLabel] = (storedData.cities[cityLabel] || 0) + 1;
        }

        storedData.referrers = storedData.referrers || {};
        storedData.referrers[refSource] = (storedData.referrers[refSource] || 0) + 1;

        const currentRecord: VisitRecord = {
          id: Math.random().toString(36).substring(2, 8),
          timestamp: new Date().toISOString(),
          path: window.location.pathname || '/',
          country,
          city,
          countryCode,
          region,
          referrer: refSource,
          device,
          browser,
        };

        storedData.recentVisits = [currentRecord, ...(storedData.recentVisits || [])].slice(0, 50);

        localStorage.setItem(STORAGE_KEY, JSON.stringify(storedData));
        setData(storedData);

        // Optional external beacon dispatch if configured
        const endpoint = process.env.NEXT_PUBLIC_TRACKER_ENDPOINT;
        if (endpoint && navigator.sendBeacon) {
          navigator.sendBeacon(endpoint, JSON.stringify(currentRecord));
        }
      } catch {
        // Tracker runs completely unobtrusively; fail silently
      }
    };

    // Execute tracker in background idle time
    if (typeof window !== 'undefined') {
      if ('requestIdleCallback' in window) {
        (window as Window & { requestIdleCallback: (cb: () => void) => void }).requestIdleCallback(() => {
          trackVisit();
        });
      } else {
        setTimeout(trackVisit, 1200);
      }
    }

    // Stealth modal activation handlers:
    // 1. Keyboard shortcut: Ctrl + Shift + V or Cmd + Shift + V
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'v') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
        loadData();
      }
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    // 2. Custom event dispatched by footer click or secret trigger
    const handleCustomTrigger = () => {
      setIsOpen((prev) => !prev);
      loadData();
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('toggle-stats-viewer', handleCustomTrigger);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('toggle-stats-viewer', handleCustomTrigger);
    };
  }, [isOpen, loadData]);

  const handleExport = () => {
    const jsonStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(data, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', jsonStr);
    downloadAnchor.setAttribute('download', `vaishnavi_portfolio_visitors_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleClear = () => {
    if (confirm('Are you sure you want to reset local visitor tracking stats?')) {
      localStorage.removeItem(STORAGE_KEY);
      setData({
        totalViews: 0,
        uniqueVisitors: 0,
        countries: {},
        cities: {},
        referrers: {},
        recentVisits: [],
      });
    }
  };

  // If closed, return nothing (100% inconspicuous, zero DOM nodes visible to visitors)
  if (!isOpen) return null;

  const sortedCountries = Object.entries(data.countries || {}).sort((a, b) => b[1] - a[1]);
  const sortedReferrers = Object.entries(data.referrers || {}).sort((a, b) => b[1] - a[1]);
  const sortedCities = Object.entries(data.cities || {}).sort((a, b) => b[1] - a[1]);

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-[#0a0a0a] border border-white/20 text-white shadow-2xl font-sans overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/15 px-6 py-4 bg-black/60">
          <div className="flex items-center gap-3">
            <Shield className="h-4 w-4 text-white/70" />
            <div>
              <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-white flex items-center gap-2">
                Visitor Intelligence
                <span className="text-[9px] px-2 py-0.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 normal-case tracking-normal">
                  Inconspicuous Stealth Mode
                </span>
              </h2>
              <p className="text-[10px] text-white/40 tracking-wider font-mono">
                Shortcut: Ctrl+Shift+V • Zero cookies • Private
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={loadData}
              title="Refresh Stats"
              className="p-1.5 text-white/50 hover:text-white hover:bg-white/10 rounded transition"
            >
              <RefreshCw className="h-4 w-4" />
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 text-white/50 hover:text-white hover:bg-white/10 rounded transition"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Quick KPI Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-6 border-b border-white/10 bg-white/[0.02]">
          <div className="border border-white/10 p-3 bg-black/40">
            <div className="flex items-center justify-between text-white/40 mb-1">
              <span className="text-[10px] uppercase tracking-widest">Total Views</span>
              <Eye className="h-3.5 w-3.5" />
            </div>
            <div className="text-2xl font-bold font-mono tracking-tight">{data.totalViews || 0}</div>
          </div>
          <div className="border border-white/10 p-3 bg-black/40">
            <div className="flex items-center justify-between text-white/40 mb-1">
              <span className="text-[10px] uppercase tracking-widest">Unique Visitors</span>
              <Users className="h-3.5 w-3.5" />
            </div>
            <div className="text-2xl font-bold font-mono tracking-tight">{data.uniqueVisitors || 0}</div>
          </div>
          <div className="border border-white/10 p-3 bg-black/40">
            <div className="flex items-center justify-between text-white/40 mb-1">
              <span className="text-[10px] uppercase tracking-widest">Countries</span>
              <Globe className="h-3.5 w-3.5" />
            </div>
            <div className="text-2xl font-bold font-mono tracking-tight">{sortedCountries.length}</div>
          </div>
          <div className="border border-white/10 p-3 bg-black/40">
            <div className="flex items-center justify-between text-white/40 mb-1">
              <span className="text-[10px] uppercase tracking-widest">Top Source</span>
              <Compass className="h-3.5 w-3.5" />
            </div>
            <div className="text-sm font-semibold truncate mt-1 text-white/90">
              {sortedReferrers[0]?.[0] || 'Direct'}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-1 px-6 border-b border-white/10 bg-black text-[11px] uppercase tracking-[0.2em]">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3 px-3 border-b-2 font-semibold transition ${
              activeTab === 'overview' ? 'border-white text-white' : 'border-transparent text-white/40 hover:text-white'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('locations')}
            className={`py-3 px-3 border-b-2 font-semibold transition ${
              activeTab === 'locations' ? 'border-white text-white' : 'border-transparent text-white/40 hover:text-white'
            }`}
          >
            Locations ({sortedCountries.length})
          </button>
          <button
            onClick={() => setActiveTab('referrers')}
            className={`py-3 px-3 border-b-2 font-semibold transition ${
              activeTab === 'referrers' ? 'border-white text-white' : 'border-transparent text-white/40 hover:text-white'
            }`}
          >
            Sources & Referrers
          </button>
          <button
            onClick={() => setActiveTab('recent')}
            className={`py-3 px-3 border-b-2 font-semibold transition ${
              activeTab === 'recent' ? 'border-white text-white' : 'border-transparent text-white/40 hover:text-white'
            }`}
          >
            Recent Activity ({data.recentVisits?.length || 0})
          </button>
          <button
            onClick={() => setActiveTab('cloud')}
            className={`py-3 px-3 border-b-2 font-semibold transition ${
              activeTab === 'cloud' ? 'border-white text-white' : 'border-transparent text-white/40 hover:text-white'
            }`}
          >
            GoatCounter / Cloud
          </button>
        </div>

        {/* Tab Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 text-xs text-white/80">
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Top Locations */}
              <div className="border border-white/10 p-4 bg-white/[0.01]">
                <h3 className="text-[10px] uppercase tracking-[0.3em] font-semibold text-white/60 mb-3 flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5" /> Visitor Locations
                </h3>
                {sortedCountries.length === 0 ? (
                  <p className="text-white/40 text-[11px] py-4 font-mono">No visits recorded yet. Tracking active.</p>
                ) : (
                  <div className="space-y-2">
                    {sortedCountries.slice(0, 5).map(([country, count]) => {
                      const pct = Math.round((count / (data.totalViews || 1)) * 100);
                      return (
                        <div key={country} className="space-y-1">
                          <div className="flex justify-between text-[11px]">
                            <span className="font-medium text-white">{country}</span>
                            <span className="font-mono text-white/60">{count} ({pct}%)</span>
                          </div>
                          <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-white h-full" style={{ width: `${pct}%` }} />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Top Sources */}
              <div className="border border-white/10 p-4 bg-white/[0.01]">
                <h3 className="text-[10px] uppercase tracking-[0.3em] font-semibold text-white/60 mb-3 flex items-center gap-2">
                  <Compass className="h-3.5 w-3.5" /> Traffic Sources
                </h3>
                {sortedReferrers.length === 0 ? (
                  <p className="text-white/40 text-[11px] py-4 font-mono">No referral data yet.</p>
                ) : (
                  <div className="space-y-2">
                    {sortedReferrers.slice(0, 5).map(([ref, count]) => {
                      const pct = Math.round((count / (data.totalViews || 1)) * 100);
                      return (
                        <div key={ref} className="space-y-1">
                          <div className="flex justify-between text-[11px]">
                            <span className="font-medium text-white">{ref}</span>
                            <span className="font-mono text-white/60">{count} ({pct}%)</span>
                          </div>
                          <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-white/80 h-full" style={{ width: `${pct}%` }} />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'locations' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-[11px] uppercase tracking-[0.25em] font-bold text-white mb-3">
                  Countries & Territories
                </h3>
                {sortedCountries.length === 0 ? (
                  <p className="text-white/40 font-mono">No location records yet.</p>
                ) : (
                  <div className="divide-y divide-white/10 border border-white/10">
                    {sortedCountries.map(([country, count]) => (
                      <div key={country} className="flex items-center justify-between p-3 hover:bg-white/[0.02]">
                        <span className="font-medium text-white flex items-center gap-2">
                          <Globe className="h-3.5 w-3.5 text-white/50" /> {country}
                        </span>
                        <span className="font-mono text-white/70">{count} views</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {sortedCities.length > 0 && (
                <div>
                  <h3 className="text-[11px] uppercase tracking-[0.25em] font-bold text-white mb-3">
                    Cities / Metro Areas
                  </h3>
                  <div className="divide-y divide-white/10 border border-white/10">
                    {sortedCities.map(([city, count]) => (
                      <div key={city} className="flex items-center justify-between p-3 hover:bg-white/[0.02]">
                        <span className="font-medium text-white flex items-center gap-2">
                          <MapPin className="h-3.5 w-3.5 text-white/50" /> {city}
                        </span>
                        <span className="font-mono text-white/70">{count} views</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'referrers' && (
            <div className="space-y-4">
              <h3 className="text-[11px] uppercase tracking-[0.25em] font-bold text-white">
                How Visitors Found Your Site
              </h3>
              {sortedReferrers.length === 0 ? (
                <p className="text-white/40 font-mono">No referrer records yet.</p>
              ) : (
                <div className="divide-y divide-white/10 border border-white/10">
                  {sortedReferrers.map(([source, count]) => (
                    <div key={source} className="flex items-center justify-between p-3 hover:bg-white/[0.02]">
                      <span className="font-medium text-white flex items-center gap-2">
                        <Compass className="h-3.5 w-3.5 text-white/50" /> {source}
                      </span>
                      <span className="font-mono text-white/70">{count} visits</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'recent' && (
            <div className="space-y-4">
              <h3 className="text-[11px] uppercase tracking-[0.25em] font-bold text-white">
                Last 50 Visitor Sessions
              </h3>
              {(!data.recentVisits || data.recentVisits.length === 0) ? (
                <p className="text-white/40 font-mono">No recent visits recorded.</p>
              ) : (
                <div className="divide-y divide-white/10 border border-white/10 overflow-x-auto">
                  <table className="w-full text-left text-[11px]">
                    <thead className="bg-white/[0.04] text-white/50 uppercase tracking-widest text-[9px] font-mono">
                      <tr>
                        <th className="p-2.5">Time</th>
                        <th className="p-2.5">Location</th>
                        <th className="p-2.5">Source</th>
                        <th className="p-2.5">Page</th>
                        <th className="p-2.5">Device</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {data.recentVisits.map((item) => (
                        <tr key={item.id} className="hover:bg-white/[0.02] font-mono">
                          <td className="p-2.5 text-white/60 whitespace-nowrap">
                            {new Date(item.timestamp).toLocaleDateString([], { month: 'short', day: 'numeric' })}{' '}
                            {new Date(item.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </td>
                          <td className="p-2.5 text-white whitespace-nowrap">
                            {item.city && item.city !== 'Unknown' ? `${item.city}, ` : ''}{item.country}
                          </td>
                          <td className="p-2.5 text-white/80 whitespace-nowrap">
                            {item.referrer}
                          </td>
                          <td className="p-2.5 text-white/60">{item.path}</td>
                          <td className="p-2.5 text-white/50 whitespace-nowrap flex items-center gap-1">
                            <Laptop className="h-3 w-3" /> {item.device} ({item.browser})
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {activeTab === 'cloud' && (
            <div className="space-y-4 border border-white/10 p-5 bg-white/[0.01]">
              <div className="flex items-start gap-3">
                <Globe className="h-5 w-5 text-white/80 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                    GoatCounter Analytics (Free & Inconspicuous)
                  </h4>
                  <p className="text-xs text-white/60 mt-1 leading-relaxed">
                    This portfolio includes GoatCounter support. GoatCounter provides a hosted web dashboard showing visitor counts, countries, and referrers without any cookies, popups, or user-facing banners.
                  </p>
                </div>
              </div>

              <div className="border border-white/10 bg-black/50 p-4 space-y-2 text-[11px] font-mono text-white/70">
                <p className="text-white font-bold">How to access your live web dashboard:</p>
                <ol className="list-decimal list-inside space-y-1">
                  <li>Visit <span className="text-white underline">goatcounter.com/signup</span></li>
                  <li>Sign up with your domain or code (e.g. <span className="text-emerald-400">vaishnavipoti</span>)</li>
                  <li>Set GitHub Pages secret or environment variable: <span className="text-emerald-400">NEXT_PUBLIC_GOATCOUNTER_CODE=vaishnavipoti</span></li>
                  <li>Your online dashboard will be available at <span className="text-white underline">vaishnavipoti.goatcounter.com</span></li>
                </ol>
              </div>

              <a
                href="https://goatcounter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 border border-white/30 px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-white hover:bg-white hover:text-black transition"
              >
                GoatCounter Website <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          )}
        </div>

        {/* Footer Controls */}
        <div className="flex items-center justify-between border-t border-white/15 px-6 py-3 bg-black/80 text-[10px] uppercase tracking-wider text-white/50">
          <div className="flex items-center gap-3">
            <button
              onClick={handleExport}
              className="inline-flex items-center gap-1.5 hover:text-white transition"
            >
              <Download className="h-3 w-3" /> Export JSON
            </button>
            <span>•</span>
            <button
              onClick={handleClear}
              className="inline-flex items-center gap-1.5 hover:text-rose-400 transition"
            >
              <Trash2 className="h-3 w-3" /> Reset Stats
            </button>
          </div>
          <div className="font-mono text-[9px] text-white/40">
            Press ESC or Ctrl+Shift+V to hide
          </div>
        </div>

      </div>
    </div>
  );
}

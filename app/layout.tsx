import type { Metadata } from "next";
import localFont from "next/font/local";
import { Anton, Bebas_Neue } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import CustomCursor from "./CustomCursor";
import VisitorTracker from "./VisitorTracker";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
});

const siteUrl = "https://skycypherxo.github.io/portfolio";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Vaishnavi Poti | AI Engineer, Researcher & Fullstack Developer",
    template: "%s | Vaishnavi Poti",
  },
  description:
    "Official portfolio of Vaishnavi Poti — AI & Data Science Specialist, Founder of AceRyx, incoming MS in AI at Texas A&M University, and ML Research Author. Explore projects in multi-agent systems, deep learning, and fullstack engineering.",
  applicationName: "Vaishnavi Poti Portfolio",
  authors: [{ name: "Vaishnavi Poti", url: siteUrl }],
  creator: "Vaishnavi Poti",
  publisher: "Vaishnavi Poti",
  keywords: [
    "Vaishnavi Poti",
    "Vaishnavi",
    "Poti",
    "Vaishnavi V. Poti",
    "Poti Vaishnavi",
    "Vaishnavi Poti portfolio",
    "Vaishnavi Poti AI",
    "Vaishnavi Poti Texas A&M",
    "Vaishnavi Poti AceRyx",
    "Vaishnavi Poti researcher",
    "reallocalLLM",
    "skycypherxo",
    "AI Engineer",
    "Fullstack Developer",
    "Machine Learning Researcher",
    "Multi-Agent Systems",
    "Deep Learning",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Vaishnavi Poti | AI Engineer, Researcher & Fullstack Developer",
    description:
      "Official portfolio of Vaishnavi Poti — AI & Data Science Specialist, Founder of AceRyx, and incoming MS in AI at Texas A&M University.",
    url: siteUrl,
    siteName: "Vaishnavi Poti Portfolio",
    locale: "en_US",
    type: "profile",
    images: [
      {
        url: `${siteUrl}/vaish.png`,
        width: 1200,
        height: 630,
        alt: "Vaishnavi Poti",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaishnavi Poti | AI Engineer, Researcher & Fullstack Developer",
    description:
      "Official portfolio of Vaishnavi Poti — AI & Data Science Specialist, Founder of AceRyx, and incoming MS in AI at Texas A&M University.",
    site: "@reallocalLLM",
    creator: "@reallocalLLM",
    images: [`${siteUrl}/vaish.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Vaishnavi Poti",
      alternateName: ["Vaishnavi", "Vaishnavi V. Poti", "Poti Vaishnavi"],
      url: siteUrl,
      image: `${siteUrl}/vaish.png`,
      jobTitle: "AI Engineer & Fullstack Developer",
      worksFor: {
        "@type": "Organization",
        name: "AceRyx",
      },
      alumniOf: [
        {
          "@type": "CollegeOrUniversity",
          name: "Texas A&M University",
        },
        {
          "@type": "CollegeOrUniversity",
          name: "University of Mumbai - TSEC",
        },
      ],
      sameAs: [
        "https://x.com/reallocalLLM",
        "https://github.com/skycypherxo",
        "https://www.linkedin.com/in/vaishnavi-v-p/",
        "https://skycypherxo.github.io/Resume/v4.pdf",
      ],
      knowsAbout: [
        "Artificial Intelligence",
        "Machine Learning",
        "Deep Learning",
        "Reinforcement Learning",
        "Multi-Agent Systems",
        "Computer Vision",
        "Fullstack Web Development",
        "Next.js",
        "Python",
      ],
      description:
        "AI & Data Science researcher, Founder of AceRyx, and incoming MS in AI student at Texas A&M University.",
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Vaishnavi Poti Portfolio",
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "Vaishnavi Poti | AI Engineer, Researcher & Fullstack Developer",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@id": `${siteUrl}/#person`,
      },
      mainEntity: {
        "@id": `${siteUrl}/#person`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const goatCounterCode = process.env.NEXT_PUBLIC_GOATCOUNTER_CODE;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {goatCounterCode && (
          <Script
            strategy="afterInteractive"
            data-goatcounter={`https://${goatCounterCode}.goatcounter.com/count`}
            async
            src="//gc.zgo.at/count.js"
          />
        )}
      </head>
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          ${anton.variable}
          ${bebasNeue.variable}
          bg-black
          text-white
          antialiased
        `}
      >
        <CustomCursor />
        <VisitorTracker />
        {children}
      </body>
    </html>
  );
}

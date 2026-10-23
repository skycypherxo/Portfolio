'use client';
import { ElementType, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Briefcase, BookOpenText, Award, HeartHandshake, Github, Linkedin, Mail, Twitter, Menu, X } from 'lucide-react';
import {
  achievementItems,
  homeProjects,
  researchItems,
  timelineItems,
} from './data';
import { assetPath } from './asset-path';

const statusColors: Record<string, string> = {
  'Published': 'bg-green-400',
  'Accepted': 'bg-green-400',
  'Accepted for Publication': 'bg-green-400',
  'Under Review': 'bg-blue-400',
};

function SectionTitle({ index, title, note, icon: Icon }: { index: string; title: string; note: string; icon: ElementType }) {
  return (
    <div className="grid gap-4 border-b border-white/20 pb-8 lg:grid-cols-12">
      <div className="flex items-center gap-3 lg:col-span-2">
        <Icon className="h-5 w-5 text-white/80" />
        <p className="text-sm uppercase tracking-[0.35em] font-bold text-white/90">{index}</p>
      </div>
      <h2 className="max-w-4xl text-[clamp(2.4rem,4vw,5rem)] font-semibold uppercase leading-[0.88] tracking-[-0.07em] lg:col-span-7">
        {title}
      </h2>
      <p className="text-sm leading-6 text-white/55 lg:col-span-3 lg:pt-2">{note}</p>
    </div>
  );
}

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <main className="bg-black text-white">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/20 bg-black/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-4 py-3.5 md:px-8 lg:px-10">
          {/* Logo / Name */}
          <Link href="/" className="text-[11px] font-bold uppercase tracking-[0.45em] text-white transition hover:text-white/80">
            Vaishnavi Poti
          </Link>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-5 md:gap-8 justify-center">
            <Link
              href="/#projects"
              className="text-[10px] uppercase tracking-[0.3em] text-white/50 transition hover:text-white hover:underline underline-offset-4 font-semibold"
            >
              Projects
            </Link>
            <Link
              href="/#experience"
              className="text-[10px] uppercase tracking-[0.3em] text-white/50 transition hover:text-white hover:underline underline-offset-4 font-semibold"
            >
              Experience
            </Link>
            <Link
              href="/#research"
              className="text-[10px] uppercase tracking-[0.3em] text-white/50 transition hover:text-white hover:underline underline-offset-4 font-semibold"
            >
              Research
            </Link>
            <Link
              href="/#achievements"
              className="text-[10px] uppercase tracking-[0.3em] text-white/50 transition hover:text-white hover:underline underline-offset-4 font-semibold"
            >
              Achievements
            </Link>
            <Link
              href="/about"
              className="text-[10px] uppercase tracking-[0.3em] text-white/50 transition hover:text-white hover:underline underline-offset-4 font-semibold"
            >
              About
            </Link>
            <a
              href="https://skycypherxo.github.io/Resume/v4.pdf"
              target="_blank"
              rel="noreferrer noopener"
              className="text-[10px] uppercase tracking-[0.3em] text-white/50 transition hover:text-white hover:underline underline-offset-4 font-semibold"
            >
              Resume
            </a>
          </nav>

          {/* Contact & Socials (Desktop) */}
          <div className="hidden md:flex items-center gap-4 text-white/50">
            <a
              href="https://github.com/skycypherxo"
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-4.5 w-4.5" />
            </a>
            <a
              href="https://x.com/reallocalLLM"
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-4.5 w-4.5" />
            </a>
            <a
              href="https://www.linkedin.com/in/vaishnavi-v-p/"
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4.5 w-4.5" />
            </a>
            <a
              href="mailto:potivaishnavi21@gmail.com"
              className="hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="h-4.5 w-4.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex md:hidden items-center justify-center p-1.5 text-white/70 hover:text-white transition-colors border border-white/20 hover:border-white/40"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed inset-0 top-[49px] z-45 bg-black/98 backdrop-blur-lg flex flex-col justify-between px-6 py-8 md:hidden border-b border-white/20"
          >
            <nav className="flex flex-col gap-5 pt-4">
              <Link
                href="/#projects"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm uppercase tracking-[0.3em] text-white/60 hover:text-white font-semibold py-2.5 border-b border-white/10"
              >
                Projects
              </Link>
              <Link
                href="/#experience"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm uppercase tracking-[0.3em] text-white/60 hover:text-white font-semibold py-2.5 border-b border-white/10"
              >
                Experience
              </Link>
              <Link
                href="/#research"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm uppercase tracking-[0.3em] text-white/60 hover:text-white font-semibold py-2.5 border-b border-white/10"
              >
                Research
              </Link>
              <Link
                href="/#achievements"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm uppercase tracking-[0.3em] text-white/60 hover:text-white font-semibold py-2.5 border-b border-white/10"
              >
                Achievements
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm uppercase tracking-[0.3em] text-white/60 hover:text-white font-semibold py-2.5 border-b border-white/10"
              >
                About
              </Link>
              <a
                href="https://skycypherxo.github.io/Resume/v4.pdf"
                target="_blank"
                rel="noreferrer noopener"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm uppercase tracking-[0.3em] text-white/60 hover:text-white font-semibold py-2.5 border-b border-white/10"
              >
                Resume
              </a>
            </nav>

            <div className="flex flex-col items-center gap-4 pb-8">
              <span className="text-[9px] uppercase tracking-[0.25em] text-white/30">Connect // Socials</span>
              <div className="flex items-center gap-6 text-white/50">
                <a
                  href="https://github.com/skycypherxo"
                  target="_blank"
                  rel="noreferrer noopener"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://x.com/reallocalLLM"
                  target="_blank"
                  rel="noreferrer noopener"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/vaishnavi-v-p/"
                  target="_blank"
                  rel="noreferrer noopener"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="mailto:potivaishnavi21@gmail.com"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-white transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="relative min-h-screen overflow-hidden border-b border-white/20 bg-black pt-14">
        <h1 className="sr-only">Vaishnavi Poti — AI Engineer, Researcher &amp; Fullstack Developer</h1>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.18)_1px,transparent_1px)] bg-[size:25%_50%] opacity-80" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_18%,rgba(0,0,0,0.12)_52%,rgba(0,0,0,0.78)_100%)]" />
        </div>

        <div className="relative mx-auto min-h-[calc(100vh-3.5rem)] max-w-[1600px] border-l border-r border-white/20">
          <div className="relative overflow-hidden" style={{ height: 'calc(100vh - 3.5rem)' }}>

            {/* vertical grid lines */}
            <div className="pointer-events-none absolute inset-0 flex">
              <div className="h-full w-1/4 border-r border-white/20" />
              <div className="h-full w-1/4 border-r border-white/20" />
              <div className="h-full w-1/4 border-r border-white/20" />
              <div className="h-full w-1/4" />
            </div>

            {/* horizontal midline */}
            <div className="pointer-events-none absolute inset-x-0 top-1/2 border-t border-white/20" />

            {/* VAISHNAVI — shifted right slightly to prevent cutoff */}
            <div
              className="absolute inset-x-0 top-0 flex items-center overflow-hidden"
              style={{ height: '50%' }}
            >
              <div
                className="select-none whitespace-nowrap text-white uppercase"
                style={{
                  fontFamily: '"Bebas Neue", sans-serif',
                  fontSize: '17vw',
                  lineHeight: 0.75,
                  letterSpacing: '-0.03em',
                  paddingLeft: '6vw',
                }}
              >
                VAISHNAVI
              </div>
            </div>

            {/* AI ENGINEER label & facts — top right area near midline */}
            <div
              className="absolute right-6 top-1/2 -translate-y-6 uppercase text-white/50 text-right z-30 max-w-[200px] sm:max-w-[320px] md:max-w-none text-[9px] sm:text-xs md:text-[0.8rem] leading-relaxed"
              style={{ fontFamily: '"Bebas Neue", sans-serif', letterSpacing: '0.12em' }}
            >
              AI ENGINEER • RESEARCHER • FULLSTACK DEVELOPER • LEAD FOUNDER @ ACERYX • RESEARCH AUTHOR
            </div>

            {/* POTI — shifted left slightly to prevent cutoff */}
            <div
              className="absolute bottom-0 overflow-hidden"
              style={{ right: '6vw' }}
            >
              <div
                className="select-none whitespace-nowrap text-white uppercase"
                style={{
                  fontFamily: '"Bebas Neue", sans-serif',
                  fontSize: '19vw',
                  lineHeight: 0.75,
                  letterSpacing: '-0.03em',
                }}
              >
                POTI
              </div>
            </div>

            {/* AI systems list — bottom left */}
            <div className="absolute bottom-[18%] left-[6%] space-y-1 z-30">
              <div
                className="uppercase text-white text-xl sm:text-2xl md:text-3xl"
                style={{ fontFamily: '"Bebas Neue", sans-serif', letterSpacing: '0.06em' }}
              >
                AI Systems
              </div>
              <div
                className="uppercase text-white/55 text-xl sm:text-2xl md:text-3xl"
                style={{ fontFamily: '"Bebas Neue", sans-serif', letterSpacing: '0.06em' }}
              >
                Computer Vision
              </div>
              <div
                className="uppercase text-white/55 text-xl sm:text-2xl md:text-3xl"
                style={{ fontFamily: '"Bebas Neue", sans-serif', letterSpacing: '0.06em' }}
              >
                Research
              </div>
              <div
                className="uppercase text-white/55 text-xl sm:text-2xl md:text-3xl"
                style={{ fontFamily: '"Bebas Neue", sans-serif', letterSpacing: '0.06em' }}
              >
                Agents
              </div>
            </div>

            {/* eye */}
            <div
              className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] md:w-[32vw] md:h-[32vw] max-w-[650px] max-h-[650px]"
            >
              <Image
                src={assetPath('/eye (1).png')}
                alt="Eye"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 768px) 70vw, 32vw"
              />
            </div>

          </div>
        </div>
      </section>


      <section id="projects" className="border-b border-white/20 bg-white/[0.01]">
        <div className="mx-auto max-w-[1600px] px-4 py-16 md:px-8 lg:px-10">
          <SectionTitle
            index="01 / Projects"
            title="Featured engineering projects."
            note="A selection of machine learning implementations, system architectures, and deep learning pipelines."
            icon={Briefcase}
          />

          <div className="mt-8 space-y-4 border-l border-white/20 pl-0 lg:pl-8">
            {homeProjects.map((project, index) => (
              <article
                key={project.title}
                className="group relative border-b border-white/20 p-6 transition duration-300 hover:bg-white hover:text-black"
              >
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`Open ${project.title} on GitHub`}
                  className="absolute right-6 top-6 inline-flex h-10 w-10 md:h-14 md:w-14 items-center justify-center border border-current text-current transition hover:bg-black hover:text-white group-hover:border-black"
                >
                  <ArrowUpRight className="h-5 w-5 md:h-7 md:w-7" />
                </a>
                <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
                  <div className="lg:col-span-2 lg:text-center">
                    <div
                      className="text-[clamp(5.5rem,8vw,9.5rem)] font-bold leading-none text-current select-none"
                      style={{ fontFamily: '"Bebas Neue", sans-serif', letterSpacing: '-0.02em' }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                  <div className="lg:col-span-7">
                    <h3
                      className="max-w-[18ch] text-[clamp(1.8rem,3vw,3.2rem)] font-semibold uppercase leading-[0.9] text-current"
                      style={{ fontFamily: '"Bebas Neue", sans-serif', letterSpacing: '0.04em' }}
                    >
                      {project.title}
                    </h3>
                    <p className="mt-3 max-w-3xl text-sm leading-6 text-white/70 group-hover:text-black/70">
                      {project.summary}
                    </p>
                  </div>
                  <div className="lg:col-span-3 lg:pl-6 lg:border-l lg:border-current/15">
                    <p className="text-[10px] uppercase tracking-[0.45em] text-current/50">Signal</p>
                    <p className="mt-4 text-sm leading-6 text-white/70 group-hover:text-black/70">{project.impact}</p>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="border border-current/20 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-current/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="border-b border-white/20 bg-black">
        <div className="mx-auto max-w-[1600px] px-4 py-20 md:px-8 lg:px-10">
          <SectionTitle
            index="02 / Experience"
            title="Professional experience."
            note="A chronology of software roles, technology leadership, and academic background."
            icon={Award}
          />

          <div className="mt-16 max-w-5xl mx-auto border-t border-white/20">
            {timelineItems.map((entry, index) => (
              <motion.div
                key={`${entry.year}-${entry.title}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                className="grid grid-cols-12 border border-transparent border-b-white/20 p-6 md:p-8 relative group hover:border-white hover:bg-white/[0.03] transition-all duration-300 rounded-sm cursor-pointer"
              >
                {/* Col 1: Index, Year, Dash */}
                <div className="col-span-4 md:col-span-2 pr-4 md:pr-6 relative border-r border-dashed border-white/20 flex flex-col justify-between">
                  <div>
                    <div
                      className="text-[clamp(2.2rem,4vw,4.2rem)] font-bold leading-none text-white uppercase font-bebas-neue"
                      style={{ fontFamily: '"Bebas Neue", sans-serif', letterSpacing: '0.04em' }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div className="text-sm md:text-base font-semibold uppercase tracking-wider text-white/70 mt-2 md:mt-3 font-mono">
                      {entry.year}
                    </div>
                    <div className="text-white/30 text-xs mt-2 md:mt-3">—</div>
                  </div>
                  {/* Square pixel marker on the vertical dotted border */}
                  <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-white border border-black z-10" />
                </div>

                {/* Col 2: Title, Dash, Description */}
                <div className="col-span-8 md:col-span-6 pl-4 md:pl-8 flex flex-col justify-center">
                  <h4
                    className="text-[clamp(1.3rem,2.8vw,2.5rem)] font-bold uppercase leading-tight tracking-wider text-white font-bebas-neue"
                    style={{ fontFamily: '"Bebas Neue", sans-serif', letterSpacing: '0.04em' }}
                  >
                    {entry.title}
                  </h4>
                  <div className="text-white/40 text-xs my-2.5">—</div>
                  <p className="text-xs md:text-sm leading-relaxed text-white/60 max-w-xl">
                    {entry.description}
                  </p>
                  {/* Mobile only: Show company under description */}
                  <div className="mt-4 md:hidden">
                    <span className="text-[9px] uppercase tracking-[0.25em] text-white/40 block mb-1">Company //</span>
                    <span className="text-xs uppercase tracking-[0.2em] font-bold text-white leading-tight">
                      {entry.company}
                    </span>
                  </div>
                </div>

                {/* Col 3: Plus Divider (Desktop only) */}
                <div className="hidden md:flex col-span-1 items-center justify-center">
                  <span className="text-white/20 text-3xl font-light font-mono">+</span>
                </div>

                {/* Col 4: Company, Dash (Desktop only) */}
                <div className="hidden md:flex col-span-3 pl-4 flex flex-col justify-center">
                  <div>
                    <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] font-bold text-white/95 leading-tight block">
                      {entry.company}
                    </span>
                    <div className="text-white/30 text-xs mt-2">—</div>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="research" className="border-b border-white/20 bg-black">
        <div className="mx-auto max-w-[1600px] px-4 py-16 md:px-8 lg:px-10">
          <SectionTitle
            index="03 / Research"
            title="Publications & preprints."
            note="Academic papers focusing on deep reinforcement learning and predictive contagion models."
            icon={BookOpenText}
          />

          <div className="mt-8 grid gap-6 grid-cols-1 xl:grid-cols-2">
            {researchItems.map((paper, index) => (
              <div
                key={paper.title}
                className="grid grid-cols-1 md:grid-cols-2 border border-white/20 transition-all duration-300 hover:border-white/40 hover:bg-white/[0.01] group"
              >
                {/* Left Column of Card */}
                <div className="p-8 border-b md:border-b-0 md:border-r border-white/20 flex flex-col justify-between transition-colors duration-300 group-hover:border-white/30">
                  <div>
                    {/* Header row */}
                    <div className="flex justify-between items-center text-[10px] uppercase tracking-[0.3em] text-white/40 mb-6">
                      <span className="flex items-center gap-2">
                        <span className="text-white/60">+</span> {"// RESEARCH"}
                      </span>
                      <span>_{String(index + 1).padStart(2, '0')}</span>
                    </div>

                    {/* Giant Number */}
                    <div
                      className="text-[clamp(4rem,6vw,5.5rem)] font-bold leading-none text-white uppercase select-none mb-6"
                      style={{ fontFamily: '"Bebas Neue", sans-serif', letterSpacing: '-0.02em' }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    {/* Title */}
                    <h3
                      className="text-[clamp(1.4rem,2.2vw,2.5rem)] font-semibold uppercase leading-[0.92] tracking-normal text-white/90 group-hover:text-white transition-colors duration-300 mb-6"
                      style={{ fontFamily: '"Bebas Neue", sans-serif', letterSpacing: '0.04em' }}
                    >
                      {paper.title}
                    </h3>
                  </div>

                  {/* Short Note or status with pulse animation */}
                  <div className="flex items-center gap-2 mt-4">
                    <span className={`h-1.5 w-1.5 rounded-full ${statusColors[paper.status] || 'bg-blue-400'} animate-pulse`} />
                    <p className="text-xs leading-5 text-white/60 uppercase tracking-[0.1em]">
                      Status: {paper.status}
                    </p>
                  </div>
                </div>

                {/* Right Column of Card (Metadata Ledger) */}
                <div className="p-8 flex flex-col justify-between bg-white/[0.005] group-hover:bg-white/[0.015] transition-colors duration-300">
                  {/* Top Right Header */}
                  <div className="flex justify-between items-center text-[10px] uppercase tracking-[0.3em] text-white/40 mb-6">
                    <span>{"// PUBLICATION LEDGER"}</span>
                    <span>[{paper.year}]</span>
                  </div>

                  {/* Technical Ledger Items */}
                  <div className="space-y-6 my-auto">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 block mb-1">AUTHORS</span>
                      <span className="text-xs font-semibold uppercase tracking-[0.05em] text-white leading-relaxed block">
                        {paper.authors}
                      </span>
                    </div>
                    <div className="border-t border-white/10 pt-4">
                      <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 block mb-1">VENUE</span>
                      <span className="text-xs font-medium uppercase tracking-[0.05em] text-white/80 leading-relaxed block">
                        {paper.venue}
                      </span>
                    </div>
                    <div className="border-t border-white/10 pt-4">
                      <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 block mb-1">NOTE</span>
                      <span className="text-xs text-white/60 leading-relaxed block">
                        {paper.note.includes('DOI:') ? (
                          <>
                            Preprint DOI:{' '}
                            <a
                              href={`https://doi.org/${paper.note.split('DOI:')[1].trim()}`}
                              target="_blank"
                              rel="noreferrer noopener"
                              className="text-white hover:underline underline-offset-4 font-semibold"
                            >
                              {paper.note.split('DOI:')[1].trim()}
                            </a>
                          </>
                        ) : (
                          paper.note
                        )}
                      </span>
                    </div>
                  </div>

                  {/* Card Footer Status Indicator */}
                  <div className="flex justify-between items-center text-[9px] uppercase tracking-[0.3em] text-white/30 mt-6 pt-4 border-t border-white/10">
                    <span>{"REF // TSEC-AI-DEPT"}</span>
                    <span>{paper.year} {"// TYPE-R"}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="achievements" className="border-b border-white/20 bg-white/[0.01]">
        <div className="mx-auto max-w-[1600px] px-4 py-16 md:px-8 lg:px-10">
          <SectionTitle
            index="04 / Achievements"
            title="Accolades & initiatives."
            note="Hackathon victories, volunteering leadership, and national athletic accomplishments."
            icon={HeartHandshake}
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {achievementItems.map((item) => (
              <article key={item.title} className="group border border-white/20 p-6 transition duration-300 hover:bg-white hover:text-black">
                <div className="flex items-start justify-between gap-4">
                  <p className="text-[10px] uppercase tracking-[0.45em] text-current/50">{item.category}</p>
                  <p className="text-[10px] uppercase tracking-[0.35em] text-current/45">{item.date}</p>
                </div>
                <h3 className="mt-6 text-xl uppercase leading-tight tracking-[-0.03em]">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 text-white/70 group-hover:text-black/70">{item.description}</p>
                <div className="mt-6">
                  {item.certificate ? (
                    <a
                      href={item.certificate}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-2 border border-current px-4 py-2 text-[10px] uppercase tracking-[0.35em] transition hover:bg-black hover:text-white group-hover:border-black group-hover:hover:bg-black group-hover:hover:text-white"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                      Certificate
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/15 bg-black">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-4 px-4 py-6 text-[10px] uppercase tracking-[0.4em] text-white/45 md:flex-row md:items-center md:justify-between md:px-8 lg:px-10">
          <p
            onClick={(e) => {
              if (e.detail === 3) {
                window.dispatchEvent(new CustomEvent('toggle-stats-viewer'));
              }
            }}
            title="© 2026 Vaishnavi Poti (Triple-click or Ctrl+Shift+V for stats)"
            className="cursor-default select-none transition hover:text-white/70"
          >
            © 2026 Vaishnavi Poti
          </p>
          <a href="mailto:potivaishnavi21@gmail.com" className="transition hover:text-white">
            potivaishnavi21@gmail.com
          </a>
        </div>
      </footer>
    </main>
  );
}

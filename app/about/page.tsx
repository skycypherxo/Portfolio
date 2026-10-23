'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  ArrowLeft,
  Github,
  Linkedin,
  Mail,
  Gamepad2,
  Puzzle,
  Globe2,
  Music,
  Compass,
  Plane,
  BookOpen,
  Cpu,
  Twitter,
  Coffee,
  HeartHandshake,
  Clapperboard,
  Menu,
  
  X
} from 'lucide-react';
import { assetPath } from '../asset-path';

export default function AboutPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <main className="bg-black text-white min-h-screen">
      {/* Sticky Navbar */}
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
              className="text-[10px] uppercase tracking-[0.3em] text-white hover:underline underline-offset-4 font-semibold"
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
      {/* Main Content */}
      <div className="mx-auto max-w-[1600px] border-l border-r border-white/20 min-h-screen pt-28 pb-16 px-4 md:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">

          {/* Left Column: Title and Bio */}
          <div className="lg:col-span-8 space-y-8">
            <div>
              <div className="flex items-center gap-2 text-white/50 text-[10px] uppercase tracking-[0.3em] font-bold mb-2">
                <span className="text-white/60">+</span> {"// PROFILE OVERVIEW"}
              </div>
              <h1
                className="text-[clamp(3rem,6vw,7rem)] font-bold uppercase leading-none tracking-normal text-white mb-6"
                style={{ fontFamily: '"Bebas Neue", sans-serif', letterSpacing: '0.02em' }}
              >
                About Me
              </h1>
            </div>

            <div className="space-y-6 text-base md:text-lg leading-7 text-white/80">
              <p>
                Hey! I&apos;m <strong className="text-white">Vaishnavi Poti</strong>, a passionate technologist who loves tinkering with all kinds of innovative solutions. I&apos;m currently pursuing my MS in Artificial Intelligence at the Texas A&M University.
              </p>
              <p>
                I&apos;m deeply passionate about AI, especially Machine Learning, Deep Learning, Natural Language Processing, and Computer Vision, and how they can be applied to solve real-world problems. I&apos;m detail-oriented, innovative, creative, and possess strong problem-solving abilities.
              </p>
              <p>
                I care deeply about building with empathy and bringing positive change to the world,ideally, making it a little happier and more human every day (: I&apos;m a published researcher, hackathon winner, and someone who believes in the power of technology to transform lives.
              </p>
              <p>
                Beyond tech, I have a wildly varied set of interests and would definitely call myself a lifelong learner. I believe in continuous growth and exploring diverse perspectives!
              </p>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href="https://github.com/skycypherxo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/20 px-5 py-3 text-xs uppercase tracking-[0.3em] transition hover:bg-white hover:text-black hover:border-white"
              >
                GitHub <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/vaishnavi-v-p/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/20 px-5 py-3 text-xs uppercase tracking-[0.3em] transition hover:bg-white hover:text-black hover:border-white"
              >
                LinkedIn <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="mailto:potivaishnavi21@gmail.com"
                className="inline-flex items-center gap-2 border border-white/20 px-5 py-3 text-xs uppercase tracking-[0.3em] transition hover:bg-white hover:text-black hover:border-white"
              >
                Email <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Profile Image */}
          <div className="lg:col-span-4 space-y-4 w-full max-w-md mx-auto lg:max-w-none">
            <div className="border border-white/20 p-4 bg-white/[0.005] hover:border-white/30 transition duration-300">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-black">
                <Image
                  src={assetPath('/vaish.png')}
                  alt="Vaishnavi Poti"
                  fill
                  priority
                  className="object-cover grayscale contrast-110 scale-150 translate-x-16 hover:grayscale-[0] transition-all duration-500"
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
              </div>
              <div className="flex justify-between items-center text-[10px] uppercase tracking-[0.25em] text-white/40 font-mono mt-4">
                <span>{"PORTRAIT // VAISHNAVI POTI"}</span>
                <span>{"[2026]"}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Separator */}
        <div className="border-t border-white/20 my-16" />

        {/* Section: Creative Intersections (Hobbies) */}
        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-2 text-white/50 text-[10px] uppercase tracking-[0.3em] font-bold mb-2">
              <span className="text-white/60">+</span> {"// EXPLORATIONS & HOBBIES"}
            </div>
            <h2
              className="text-[clamp(2.5rem,4.5vw,4.5rem)] font-bold uppercase leading-none tracking-normal text-white mb-4 animate-fade-in"
              style={{ fontFamily: '"Bebas Neue", sans-serif', letterSpacing: '0.04em' }}
            >
              Creative Intersections
            </h2>
            <p className="text-sm leading-6 text-white/55 max-w-3xl">
one life and there&apos;s just so much to get to! movies i haven&apos;t watched, books stacking up, ideas i keep starting and not finishing, half written songs, midway built passion projects. i&apos;m not trying to pick a lane, i just want to do all of it.            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
{
  title: "Coffee Brewing",
  desc: "I love making different types of coffee, experimenting with beans, grind sizes, brewing methods, and extraction techniques. There's something oddly satisfying about chasing the perfect cup.",
  icon: Coffee
},
{
  title: "Gaming",
  desc: "Avid gamer when it's time to not touch grass; GTA V still remains my absolute favorite after all these years! And yes, I absolutely optimize the fun out of games by learning every mechanic. Also somehow ended up with a high score on a Tetris arcade machine.",
  icon: Gamepad2
},
{
  title: "Geopolitics",
  desc: "I can disappear into a geopolitics rabbit hole for hours. Trade wars, diplomacy, infrastructure, sanctions, border disputes, shifting alliances, and the list goes on. It's fascinating how decisions made in one corner of the world can ripple across entire countries and industries.",
  icon: Globe2
},
{
  title: "Music",
  desc: "Started with classical piano, stayed because I fell in love with making music. I enjoy singing, improvising, and composing little melodies whenever inspiration randomly hits.",
  icon: Music
},
{
  title: "Planes & Trains",
  desc: "Fascinated by high-speed trains, aviation mechanics, and transit infrastructure. Anything that moves captures my attention.",
  icon: Plane
},
{
  title: "Reading",
  desc: "Constantly devouring sci-fi, philosophy, technical documentation, and history. Exploring new perspectives is a constant habit.",
  icon: BookOpen
},
{
  title: "Solving Puzzles",
  desc: "Fascinated by different types of Rubik's Cubes, complex algorithmic riddles, crypto puzzles, or anything that makes my brain itch.",
  icon: Puzzle
},
{
  title: "Tinkering w/ Tech",
  desc: "Building custom automation bots for communities (Discord/Reddit with 23M+ cumulative users), training ML models, and exploring hardware in my spare time.",
  icon: Cpu
},
{
  title: "Trekking",
  desc: "Hiking through dense mist, scaling mountain peaks, and disconnecting in nature. Physical challenges fuel mental clarity.",
  icon: Compass
},
{
  title: "Volunteering",
  desc: "Teaching kids cool STEM stuff, helping out with education and food drives, and constantly hunting down old books from friends and family to donate.",
  icon: HeartHandshake
},
{
  title: "YouTube & Editing",
  desc: "Piecing together footage, chasing the right cuts, obsessing over pacing until it finally clicks. I just enjoy the whole process of turning raw clips into something worth watching.",
  icon: Clapperboard
},
              

            ].map((item) => (
              <div key={item.title} className="border border-white/15 p-6 bg-white/[0.003] hover:bg-white hover:text-black hover:border-white transition duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-white/40 group-hover:text-black/40 font-mono">{"// INTEREST"}</span>
                  <item.icon className="h-5 w-5 text-white/50 group-hover:text-black transition duration-300" />
                </div>
                <h3 className="text-lg uppercase leading-tight font-semibold tracking-normal text-white group-hover:text-black mb-2">{item.title}</h3>
                <p className="text-xs leading-5 text-white/60 group-hover:text-black/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-white/20 my-16" />

        {/* Section: Creative Gallery (Poetry & Photography) */}
        <div className="grid gap-12 lg:grid-cols-12">

          {/* Poetry Column (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="flex items-center gap-2 text-white/50 text-[10px] uppercase tracking-[0.3em] font-bold mb-2">
                <span className="text-white/60">+</span> {"// POETRY ARCHIVE"}
              </div>
              <h2
                className="text-[clamp(2.5rem,4.5vw,4.5rem)] font-bold uppercase leading-none tracking-normal text-white mb-4"
                style={{ fontFamily: '"Bebas Neue", sans-serif', letterSpacing: '0.04em' }}
              >
                Poetic Artifacts
              </h2>
              <p className="text-sm leading-6 text-white/55">
                Two visual poems from the archive.
              </p>
            </div>

            <div className="grid gap-6">
              {[
                { id: '001', src: '/poetry/boxes.png', title: 'the boxes.' },
                { id: '002', src: '/poetry/Trapped.png', title: 'trapped between stations.' },
              ].map((poem) => (
                <div key={poem.id} className="border border-white/15 p-4 bg-white/[0.003] hover:bg-white hover:text-black hover:border-white transition duration-300 group">
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-white mb-4 border border-white/10 group-hover:border-black/10">
                    <Image
                      src={assetPath(poem.src)}
                      alt={poem.title}
                      fill
                      className="object-contain transition duration-700 group-hover:scale-[1.01]"
                      sizes="(max-width: 1024px) 100vw, 500px"
                    />
                  </div>
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-white/40 group-hover:text-black/50 font-mono transition-colors duration-300">
                    <span>{poem.id}</span>
                    <span>{poem.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Photography Column (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-8 ">
            <div>
              <div className="flex items-center gap-2 text-white/50 text-[10px] uppercase tracking-[0.3em] font-bold mb-2">
                <span className="text-white/60">+</span> {"// PHOTOGRAPHY GALLERY"}
              </div>
              <h2
                className="text-[clamp(2.5rem,4.5vw,4.5rem)] font-bold uppercase leading-none tracking-normal text-white mb-4"
                style={{ fontFamily: '"Bebas Neue", sans-serif', letterSpacing: '0.04em' }}
              >
                Visual Diaries
              </h2>
              <p className="text-sm leading-6 text-white/55">
                Capturing geometries, high-contrast shadows, and transit in motion.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {[
                { id: '001', src: '/photography/001.jpg', span: 'sm:col-span-2', aspect: 'aspect-[16/9]', sizes: '(max-width: 1024px) 100vw, 800px' },
                { id: '002', src: '/photography/002.jpg', span: '', aspect: 'aspect-square', sizes: '(max-width: 768px) 100vw, 400px' },
                { id: '003', src: '/photography/003.jpg', span: '', aspect: 'aspect-square', sizes: '(max-width: 768px) 100vw, 400px' },
                { id: '004', src: '/photography/004.jpg', span: '', aspect: 'aspect-square', sizes: '(max-width: 768px) 100vw, 400px' },
                { id: '005', src: '/photography/005.jpg', span: '', aspect: 'aspect-square', sizes: '(max-width: 768px) 100vw, 400px' },
                { id: '006', src: '/photography/006.jpg', span: 'sm:col-span-2', aspect: 'aspect-[16/9]', sizes: '(max-width: 1024px) 100vw, 800px' },
              ].map((photo) => (
                <div key={photo.id} className={`${photo.span} border border-white/15 p-4 bg-white/[0.003] hover:bg-white hover:text-black hover:border-white transition duration-300 group`}>
                  <div className={`relative ${photo.aspect} w-full overflow-hidden bg-black mb-4`}>
                    <Image
                      src={assetPath(photo.src)}
                      alt={`Photography ${photo.id}`}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105 saturate-0 group-hover:saturate-100"
                      sizes={photo.sizes}
                    />
                  </div>
                  <div className="flex justify-between items-center text-[10px] uppercase tracking-[0.25em] text-white/40 group-hover:text-black/50 font-mono transition-colors duration-300">
                    <span>{photo.id}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Back Link */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/50 hover:text-white transition"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
        </div>
      </div>

      <footer className="border-t border-white/15 bg-black mt-12">
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

'use client';
import React, { useState } from 'react';
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
  PenTool,
  Twitter,
  Coffee,
  HeartHandshake,
  Menu,
  X
} from 'lucide-react';

export default function AboutPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activePoem, setActivePoem] = React.useState<{
    title: string;
    ref: string;
    content: string;
    author: string;
  } | null>(null);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActivePoem(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

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
              href="https://x.com/vaish_codes"
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
                  href="https://x.com/vaish_codes"
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
                  src="/vaish.png"
                  alt="Vaishnavi Poti"
                  fill
                  priority
                  className="object-cover grayscale contrast-110"
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
              An active mind does not stop at training classifiers or compiling code. I am a lifelong learner fascinated by patterns, dynamics, and systems—whether modeled in software, composed in melodies, or explored in transit and mountains.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Solving Puzzles",
                desc: "Fascinated by mathematical logic, cryptography, rubik's cubes and complex algorithmic riddles. Solving puzzles is where my engineering mindset thrives.",
                icon: Puzzle
              },
              {
                title: "Gaming",
                desc: "Avid gamer; GTA V is my absolute favorite! I have a high score on tetris on one of the arcades. I love studying mechanics, competitive strategies, and pushing for perfect high scores.",
                icon: Gamepad2
              },
              {
                title: "Geopolitics",
                desc: "I can disappear into a geopolitics rabbit hole for hours. Trade wars, diplomacy, infrastructure projects, shifting alliances, economic strategy, it's fascinating how decisions made in one corner of the world can ripple across entire countries and industries.",
                icon: Globe2
              },
              {
                title: "Piano & Singing",
                desc: "Playing the piano, singing, and composing original melodies. Music is my sanctuary for acoustic creation.",
                icon: Music
              },
              {
                title: "Tinkering w/ Tech",
                desc: "Building custom automation bots for communities (Discord/Reddit with 23M+ cumulative users) and training ML models or exploring hardware in my spare time.",
                icon: Cpu
              },
              {
                title: "Coffee Brewing",
                desc: "I love making different types of coffee, experimenting with beans, grind sizes, brewing methods, and extraction techniques. There's something oddly satisfying about chasing the perfect cup.",
                icon: Coffee
              }
              ,
              {
                title: "Reading",
                desc: "Constantly devouring sci-fi, philosophy, technical documentation, and history. Exploring new perspectives is a constant habit.",
                icon: BookOpen
              },
              {
                title: "Trekking",
                desc: "Hiking through dense mist, scaling mountain peaks, and disconnecting in nature. Physical challenges fuel mental clarity.",
                icon: Compass
              },
              {
                title: "Planes & Trains",
                desc: "Fascinated by high-speed trains, aviation mechanics, and transit infrastructure. Anything that moves captures my attention.",
                icon: Plane
              },
              {
                title: "Volunteering",
                desc: "Teaching kids cool STEM stuff, helping out with education/food drives, and constantly hunting down old books from friends and family to donate.",
                icon: HeartHandshake
              }

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
                Selected poem snippets exploring movement, digital grids, and nature.
              </p>
            </div>

            <div className="space-y-6">
              {/* Poem 1 */}
              <div className="border border-white/15 p-8 bg-white/[0.005] relative overflow-hidden group hover:bg-white hover:text-black hover:border-white transition duration-300 flex flex-col justify-between min-h-[300px]">
                <PenTool className="absolute right-4 top-4 h-4 w-4 text-white/20 group-hover:text-black/20" />
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-white/40 group-hover:text-black/40 mb-6 font-mono">
                    {"[POEM 01] // LATTICE AND LIGHT"}
                  </div>
                  <pre className="font-mono text-xs leading-relaxed text-white/80 group-hover:text-black/80 whitespace-pre-wrap">
                    {`A grid of numbers, cold and clean,
A silent ghost inside the screen.
Yet human hands have touched the keys,
To wake the code, like evening breeze...`}
                  </pre>
                </div>
                <div className="mt-8 pt-4 border-t border-white/10 group-hover:border-black/10 flex justify-between items-center">
                  <button
                    onClick={() => setActivePoem({
                      title: "Lattice and Light",
                      ref: "[POEM 01] // LATTICE AND LIGHT",
                      content: `A grid of numbers, cold and clean,\nA silent ghost inside the screen.\nYet human hands have touched the keys,\nTo wake the code, like evening breeze.\n\nBetween the nodes, a whisper stays,\nOf shifting lines and dreaming days,\nFor logic holds a quiet art,\nThat starts in math and ends in heart.\n\nWe trace the pathways in the dark,\nAnd search for some electric spark,\nTo tell us that the mind we made,\nIs more than logic, light, and shade.\n\nFor in the weights and bias lines,\nA human aspiration shines,\nA dream of reaching out to see,\nA mirror of humanity.`,
                      author: "VAISHNAVI POTI • 2025"
                    })}
                    className="text-[10px] uppercase tracking-[0.25em] font-semibold text-white/60 hover:text-white border border-white/20 hover:border-white/40 px-3 py-1.5 transition duration-300 group-hover:text-black/60 group-hover:border-black/20 group-hover:hover:bg-black group-hover:hover:text-white group-hover:hover:border-black"
                  >
                    Read Full Poem
                  </button>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-white/30 group-hover:text-black/30">
                    2025
                  </span>
                </div>
              </div>

              {/* Poem 2 */}
              <div className="border border-white/15 p-8 bg-white/[0.005] relative overflow-hidden group hover:bg-white hover:text-black hover:border-white transition duration-300 flex flex-col justify-between min-h-[300px]">
                <PenTool className="absolute right-4 top-4 h-4 w-4 text-white/20 group-hover:text-black/20" />
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-white/40 group-hover:text-black/40 mb-6 font-mono">
                    {"[POEM 02] // LOCOMOTION"}
                  </div>
                  <pre className="font-mono text-xs leading-relaxed text-white/80 group-hover:text-black/80 whitespace-pre-wrap">
                    {`Steel on steel and iron track,
A heavy engine turning back.
Across the fields, a streak of white,
A metal bird in search of light...`}
                  </pre>
                </div>
                <div className="mt-8 pt-4 border-t border-white/10 group-hover:border-black/10 flex justify-between items-center">
                  <button
                    onClick={() => setActivePoem({
                      title: "Locomotion",
                      ref: "[POEM 02] // LOCOMOTION",
                      content: `Steel on steel and iron track,\nA heavy engine turning back.\nAcross the fields, a streak of white,\nA metal bird in search of light.\n\nTo move, to fly, to chase the wind,\nLeaving the static world behind.\nIn planes and trains, a steady beat,\nWhere journey and horizon meet.\n\nThe signals blink from red to green,\nA flashing pulse upon the screen.\nThe rails extend, the engines roar,\nTo destinations searched before.\n\nWe speed across the empty plains,\nThrough summer heat and winter rains,\nFor in the engine's iron chest,\nIs movement that can never rest.`,
                      author: "VAISHNAVI POTI • 2026"
                    })}
                    className="text-[10px] uppercase tracking-[0.25em] font-semibold text-white/60 hover:text-white border border-white/20 hover:border-white/40 px-3 py-1.5 transition duration-300 group-hover:text-black/60 group-hover:border-black/20 group-hover:hover:bg-black group-hover:hover:text-white group-hover:hover:border-black"
                  >
                    Read Full Poem
                  </button>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-white/30 group-hover:text-black/30">
                    2026
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Photography Column (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-8">
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
              {/* Photo 1: Large full width image */}
              <div className="sm:col-span-2 border border-white/15 p-4 bg-white/[0.003] hover:bg-white hover:text-black hover:border-white transition duration-300 group">
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-black mb-4">
                  <Image
                    src="/photography/train_motion.png"
                    alt="Locomotion in motion"
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105 grayscale contrast-125 group-hover:grayscale-0"
                    sizes="(max-width: 1024px) 100vw, 800px"
                  />
                </div>
                <div className="flex justify-between items-center text-[10px] uppercase tracking-[0.25em] text-white/40 group-hover:text-black/50 font-mono transition-colors duration-300">
                  <span>{"PHOTO 01 // LOCOMOTION IN MOTION"}</span>
                  <span>{"[LONG EXPOSURE]"}</span>
                </div>
              </div>

              {/* Photo 2: Column image */}
              <div className="border border-white/15 p-4 bg-white/[0.003] hover:bg-white hover:text-black hover:border-white transition duration-300 group">
                <div className="relative aspect-square w-full overflow-hidden bg-black mb-4">
                  <Image
                    src="/photography/mountain_trek.png"
                    alt="Misty mountain trek"
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105 grayscale contrast-125 group-hover:grayscale-0"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
                <div className="flex justify-between items-center text-[10px] uppercase tracking-[0.25em] text-white/40 group-hover:text-black/50 font-mono transition-colors duration-300">
                  <span>{"PHOTO 02 // MISTY TREK"}</span>
                  <span>{"[ALTITUDE 3000M]"}</span>
                </div>
              </div>

              {/* Photo 3: Column image */}
              <div className="border border-white/15 p-4 bg-white/[0.003] hover:bg-white hover:text-black hover:border-white transition duration-300 group">
                <div className="relative aspect-square w-full overflow-hidden bg-black mb-4">
                  <Image
                    src="/photography/urban_geometry.png"
                    alt="Brutalist concrete architecture geometry"
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105 grayscale contrast-125 group-hover:grayscale-0"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
                <div className="flex justify-between items-center text-[10px] uppercase tracking-[0.25em] text-white/40 group-hover:text-black/50 font-mono transition-colors duration-300">
                  <span>{"PHOTO 03 // URBAN GRID"}</span>
                  <span>{"[GEOMETRY STUDY]"}</span>
                </div>
              </div>
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

      {/* Poetry Modal */}
      {activePoem && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in">
          <div className="border border-white/20 p-8 md:p-12 bg-black max-w-2xl w-full relative max-h-[85vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setActivePoem(null)}
              className="absolute right-4 top-4 text-white/50 hover:text-white transition uppercase text-[10px] tracking-[0.2em] font-semibold border border-white/25 hover:border-white/50 px-3 py-1 bg-black"
            >
              Close [ESC]
            </button>
            <div className="text-[10px] uppercase tracking-[0.3em] text-white/45 mb-6 font-mono">
              {activePoem.ref}
            </div>
            <h3
              className="text-[clamp(1.8rem,3.2vw,3rem)] font-bold uppercase leading-none tracking-normal text-white mb-8"
              style={{ fontFamily: '"Bebas Neue", sans-serif', letterSpacing: '0.04em' }}
            >
              {activePoem.title}
            </h3>
            <pre className="font-mono text-sm leading-relaxed text-white/90 whitespace-pre-wrap pl-4 border-l border-white/20">
              {activePoem.content}
            </pre>
            <div className="text-[10px] uppercase tracking-[0.2em] text-white/45 mt-8 pt-4 border-t border-white/10 text-right">
              {activePoem.author}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

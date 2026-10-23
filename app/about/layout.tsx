import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Vaishnavi Poti | AI Researcher & Fullstack Developer',
  description:
    'Learn more about Vaishnavi Poti: AI & Data Science researcher, Founder of AceRyx, incoming MS in AI student at Texas A&M University, national karate champion, and photographer.',
  alternates: {
    canonical: 'https://skycypherxo.github.io/portfolio/about',
  },
  openGraph: {
    title: 'About Vaishnavi Poti | AI Researcher & Fullstack Developer',
    description:
      'Background, experience, research, and interests of Vaishnavi Poti.',
    url: 'https://skycypherxo.github.io/portfolio/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

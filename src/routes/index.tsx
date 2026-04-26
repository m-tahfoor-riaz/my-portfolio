import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import heroImage from "../assets/cinematic-editor-hero.jpg";
import portraitImage from "../assets/mohammad-portrait.png";
import brandAnthemImage from "../assets/work-brand-anthem.jpg";
import hypertrophyImage from "../assets/work-hypertrophy.jpg";
import shortFormImage from "../assets/work-short-form.jpg";
import youtubeImage from "../assets/work-youtube.jpg";


export const Route = createFileRoute("/")({
  component: Index,
});

const logos = ["Remarc IO", "Web Tech Sol", "Atwics Group", "Estate Hives", "7 Star Group"];

const projects = [
  {
    Client: "Estate Hives",
    url: "https://www.youtube.com/embed/RvgNSh5cF8A?si=gOEDlYXSXPb5mw_U",
    className: "md:mt-20",
  },
  {
    Client: "7 Star Group",
    url: "https://www.youtube.com/embed/8SJqZbNmY5Y?si=rOelOsw9xsXfO_5T",
    className: "md:mt-0",
  },
  {
    Client: "Transform and Strength",
    url: "https://www.youtube.com/embed/nATu5T_8pGM?si=Cxbj5tdHCc97O4q1",
    className: "md:mt-12",
  },
  {
    Client: "Client 4",
    url: "https://www.youtube.com/embed/N7RXaItP7aI?si=uJwJi9IPA94c2Goe",
    className: "md:mt-32",
  },
];

const expertise = [
  "Video Editing (Narrative & Commercial)",
  "Motion Graphics & VFX",
  "Color Grading & Audio Design",
  "YouTube Strategy & Retention Optimization",
];

function AboutGoalCard() {
  const [contentView, setContentView] = useState<'about' | 'goal'>('about');
  const [isOpen, setIsOpen] = useState(true);
  const isAbout = contentView === 'about';

  return (
    <div className="rounded-[2rem] border border-border bg-card p-8 shadow-cinematic">
      <div className="mb-6 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="text-left font-black uppercase tracking-[0.18em] text-foreground transition hover:text-electric"
        >
          {isOpen ? 'Hide' : 'Open'} {isAbout ? 'About' : 'Goal'}
        </button>
        <button
          type="button"
          onClick={() => setContentView(isAbout ? 'goal' : 'about')}
          className="inline-flex h-12 items-center justify-center rounded-full border border-primary bg-background px-5 text-sm font-black uppercase tracking-[0.16em] text-primary transition hover:border-electric hover:bg-electric/10 focus:outline-none focus:ring-2 focus:ring-ring"
        >
          {isAbout ? 'Show Goal' : 'Show About'}
        </button>
      </div>

      <div className="rounded-3xl border border-border/70 bg-background/80 p-8">
        <h2 className="cinematic-title text-4xl leading-none md:text-6xl">
          {isAbout ? 'About Mohammad Tahfoor Riaz' : 'Goal'}
        </h2>

        {isOpen && (
          <div className="mt-8 space-y-6 text-base leading-8 text-muted-foreground md:text-lg">
            {isAbout ? (
              <>
                <p>
                  I make videos that help brands to tell their feelings in the form of stories.
                </p>
                <p>A few things about me.</p>
                <ul className="space-y-3 pl-6 text-sm leading-7 md:text-base">
                  <li>• left home in covid to build my own company. with 2$ in pocket</li>
                  <li>• graduated from college and went straight to capital of Pakistan to work for marketing agency. Remarc io.</li>
                  <li>• Worked with 20 real state agents help them to sell worth millions.</li>
                  <li>• Taught myself story telling, color grading and motion graphics</li>
                  <li>• went from zero to 100k in just 2 months at the age of 18.</li>
                  <li>• I like telling stories, beautifull mountains, making movies.</li>
                  <li>• I have a faith in action and won 7 races of 100 meter in a row.</li>
                  <li>• my music taste: orchestra, classic music.</li>
                </ul>
              </>
            ) : (
              <>
                <p>Goal:</p>
                <p>• I want to make things that feel personal and people remember for long period of time.</p>
                <p>Not just motivation that disappears in a day,</p>
                <p>but perspective.</p>
                <p>A shift.</p>
                <p>Something that changes how someone sees themselves or the world.</p>
                <p>
                  I care about building things that last — ideas, films, experiences, communities, perspectives.
                </p>
                <p>Work that leaves a mark.</p>
                <p>“If it doesn’t move you, it won’t move them.” — Rick Rubin</p>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-16">
        <img
          src={heroImage}
          alt="Dark cinematic editing studio with multiple video timelines"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full scale-105 object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/45 to-background" />
        <div className="absolute inset-0 film-grain opacity-30" />
        <div className="relative z-10 mx-auto max-w-7xl text-center reveal-up">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.38em] text-electric md:text-sm">
            Professional Video Editor & Story Teller
          </p>
          <h1 className="cinematic-title text-[clamp(3.2rem,12vw,10.5rem)] leading-[0.82] text-foreground drop-shadow-2xl">
            Mohammad Tahfoor Riaz
          </h1>
          <a
            href="#work"
            className="mt-10 inline-flex min-h-12 items-center justify-center border border-primary px-8 text-sm font-bold uppercase tracking-[0.18em] text-primary transition duration-300 hover:border-electric hover:bg-electric hover:text-electric-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
          >
            View My Work
          </a>
        </div>
      </section>

      <section className="overflow-hidden border-y border-border bg-surface py-12">
        <p className="text-center text-xs font-black uppercase tracking-[0.28em] text-muted-foreground">
          Trusted by creators & brands worldwide
        </p>
        <div className="mt-8 flex w-max marquee-track gap-5">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={`${logo}-${index}`}
              className="flex h-20 w-52 skew-x-[-8deg] items-center justify-center border border-border bg-ghost shadow-cinematic transition duration-300 hover:border-electric"
            >
              <span className="skew-x-[8deg] text-lg font-black uppercase tracking-[0.12em] text-foreground/80">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section id="work" className="mx-auto max-w-7xl px-5 py-24 md:py-36">
        <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="cinematic-title max-w-3xl text-5xl leading-none md:text-8xl">Featured Work</h2>
          <p className="max-w-sm text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Retention-led edits, cinematic pacing, and high-impact motion design.
          </p>
        </div>
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          {projects.map((project, index) => (
            <article key={project.Client} className={`${project.className} group reveal-up`} style={{ animationDelay: `${index * 90}ms` }}>
              <div className="relative overflow-hidden border border-border bg-card shadow-cinematic">
                <iframe
                  src={project.url}
                  title={`Video for ${project.Client}`}
                  frameBorder="0"
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="aspect-[16/9] max-h-[280px] w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-90"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <h3 className="mt-5 text-2xl font-black uppercase text-foreground md:text-3xl">{project.Client}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface px-5 py-24 md:py-36">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.82fr_1fr]">
          <div className="relative mx-auto w-full max-w-md slow-float">
            <div className="absolute -inset-4 border border-electric/40" />
            <img
              src={portraitImage}
              alt="Portrait of Mohammad Tahfoor Riaz"
              width={800}
              height={800}
              loading="lazy"
              className="relative aspect-[4/5] w-full object-cover grayscale contrast-125"
            />
          </div>
          <div>
            <AboutGoalCard />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 md:py-32">
        <h2 className="cinematic-title text-center text-5xl leading-none md:text-7xl">My Expertise</h2>
        <div className="mt-16 grid gap-4 md:grid-cols-4">
          {expertise.map((item, index) => (
            <div key={item} className="group relative border border-border bg-card p-6 transition duration-300 hover:-translate-y-2 hover:border-electric">
              {index < expertise.length - 1 && <div className="absolute left-full top-1/2 hidden h-px w-4 bg-border md:block" />}
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full border border-electric text-sm font-black text-electric">
                0{index + 1}
              </div>
              <h3 className="min-h-20 text-xl font-black uppercase leading-tight text-foreground">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-border px-5 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm font-bold uppercase tracking-[0.14em] text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>Contact me at: +92 345 8588294, +92 348 7472609</p>
          <nav className="flex flex-wrap gap-5">
            {[
              ["Email", "mailto:tahfoorriaz25@gmail.com"],
              ["Upwork Profile", "https://www.upwork.com/freelancers/~01719ee328e588d534"],
              ["LinkedIn", "https://www.linkedin.com/in/mohammed-tahfoor-riaz-49790a33a/"],
              ["Instagram", "https://www.instagram.com/mtahfoorriaz/"],
            ].map(([label, href]) => (
              <a key={label} href={href} className="transition hover:text-electric focus:outline-none focus:ring-2 focus:ring-ring">
                {label}
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </main>
  );
}
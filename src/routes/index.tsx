import { createFileRoute } from "@tanstack/react-router";

import heroImage from "../assets/cinematic-editor-hero.jpg";
import portraitImage from "../assets/mohammad-portrait.png";
import brandAnthemImage from "../assets/work-brand-anthem.jpg";
import hypertrophyImage from "../assets/work-hypertrophy.jpg";
import shortFormImage from "../assets/work-short-form.jpg";
import youtubeImage from "../assets/work-youtube.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const logos = ["ApexFit", "CreatorLab", "Northstar", "Pulse Media", "Framehaus"];

const projects = [
  {
    title: "The Science of Hypertrophy",
    category: "Fitness & Educational Documentary",
    image: hypertrophyImage,
    className: "md:mt-20",
  },
  {
    title: "High-Retention YouTube Strategy",
    category: "Fast-Paced Edits & Motion Graphics",
    image: youtubeImage,
    className: "md:mt-0",
  },
  {
    title: "Cinematic Brand Anthem",
    category: "Commercial Editing & Color Grading",
    image: brandAnthemImage,
    className: "md:mt-12",
  },
  {
    title: "Viral Short-Form Content",
    category: "Reels, TikToks & Shorts",
    image: shortFormImage,
    className: "md:mt-32",
  },
];

const expertise = [
  "Video Editing (Narrative & Commercial)",
  "Motion Graphics & VFX",
  "Color Grading & Audio Design",
  "YouTube Strategy & Retention Optimization",
];

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
            Professional Video Editor & Motion Designer
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
            <article key={project.title} className={`${project.className} group reveal-up`} style={{ animationDelay: `${index * 90}ms` }}>
              <div className="relative overflow-hidden border border-border bg-card shadow-cinematic">
                <img
                  src={project.image}
                  alt={`${project.title} video thumbnail`}
                  width={1280}
                  height={800}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-70" />
                <div className="absolute right-5 top-5 h-10 w-10 rounded-full border border-primary/60 bg-background/40 backdrop-blur-sm transition duration-300 group-hover:border-electric group-hover:bg-electric/20" />
              </div>
              <h3 className="mt-5 text-2xl font-black uppercase text-foreground md:text-3xl">{project.title}</h3>
              <p className="mt-2 text-sm font-bold uppercase tracking-[0.16em] text-electric">{project.category}</p>
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
            <h2 className="cinematic-title text-5xl leading-none md:text-7xl">About Mohammad Tahfoor Riaz</h2>
            <div className="mt-8 space-y-6 text-base leading-8 text-muted-foreground md:text-lg">
              <p>
                I am a professional video editor with over 3 years of dedicated experience crafting high-impact digital content. Specializing in advanced post-production, motion graphics, and dynamic visual storytelling, I transform raw footage into highly engaging, retention-driven narratives.
              </p>
              <p>
                My expertise lies at the intersection of technical precision and creative pacing. Utilizing industry-standard tools like Adobe Premiere Pro, After Effects, and CapCut, I build visual experiences designed to capture attention and maximize audience engagement, particularly within the competitive USA and UK digital landscapes. Whether it's high-tension fitness documentaries or fast-paced YouTube content, I shape the narrative to leave a lasting impact.
              </p>
            </div>
            <a
              href="mailto:hello@example.com"
              className="mt-9 inline-flex min-h-12 items-center justify-center bg-primary px-8 text-sm font-black uppercase tracking-[0.18em] text-primary-foreground transition duration-300 hover:bg-electric hover:text-electric-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
            >
              Let's Collaborate
            </a>
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
          <p>© 2026 Mohammad Tahfoor Riaz. All Rights Reserved.</p>
          <nav className="flex flex-wrap gap-5">
            {[
              ["Email", "mailto:hello@example.com"],
              ["Upwork Profile", "#"],
              ["LinkedIn", "#"],
              ["YouTube", "#"],
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
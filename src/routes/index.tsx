import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import heroWave from "@/assets/hero-wave.jpg";
import brainFreq from "@/assets/brain-frequency.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SmartSound — Your brain has a frequency. We tune it." },
      {
        name: "description",
        content:
          "Personalized neural audio that adapts to your brain. Focus deeper, sleep better, and unwind faster with science-backed soundscapes from SmartSound.",
      },
      { property: "og:title", content: "SmartSound — Your brain has a frequency. We tune it." },
      {
        property: "og:description",
        content:
          "Personalized neural audio that adapts to your brain. Focus, sleep, and calm — tuned to you.",
      },
    ],
  }),
  component: HomePage,
});

const profiles = [
  { emoji: "📚", title: "Studying & exams", desc: "Deep focus for coursework and test prep." },
  { emoji: "💼", title: "Work & deep focus", desc: "Code, writing, analytical tasks." },
  { emoji: "🎨", title: "Creative work", desc: "Design, music, brainstorming." },
  { emoji: "😴", title: "Better sleep", desc: "Fall asleep faster, stay asleep." },
  { emoji: "🧘", title: "Relax & unwind", desc: "Reduce stress, calm the mind." },
  { emoji: "⚡", title: "ADHD mode", desc: "High-stimulation profile tuned for ADHD brains." },
];

const steps = [
  {
    n: "01",
    title: "Senses",
    desc: "Tell us your goal, energy, and brain type. SmartSound builds your starting profile in under a minute.",
  },
  {
    n: "02",
    title: "Analyzes",
    desc: "Our engine maps your task to the right neural frequency band — alpha, beta, gamma or delta.",
  },
  {
    n: "03",
    title: "Adapts",
    desc: "Every session, the soundscape tunes itself to how your brain is actually responding.",
  },
];

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero pt-32 pb-24 sm:pt-40 sm:pb-32">
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] bg-cover bg-center opacity-50 mix-blend-screen"
          style={{ backgroundImage: `url(${heroWave})` }}
          aria-hidden
        />

        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/40 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur animate-fade-up">
            <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-primary" />
            Now in early access
          </span>

          <h1
            className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight sm:text-7xl md:text-8xl animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Your brain has a <br className="hidden sm:block" />
            <span className="text-gradient italic">frequency.</span> We tune it.
          </h1>

          <p
            className="mx-auto mt-7 max-w-2xl text-lg text-muted-foreground sm:text-xl animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            SmartSound is personalized neural audio that adapts to your brain in real time —
            so you focus harder, sleep deeper, and unwind faster.
          </p>

          <div
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button asChild variant="hero" size="xl">
              <a href="https://smartsound.live" target="_blank" rel="noreferrer">
                Try SmartSound free →
              </a>
            </Button>
            <Button asChild variant="glass" size="xl">
              <a href="#how-it-works">See how it works</a>
            </Button>
          </div>

          <p
            className="mt-6 text-xs text-muted-foreground animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            No signup required · Works in your browser · Free forever tier
          </p>
        </div>
      </section>

      {/* SOCIAL PROOF / STATS */}
      <section className="border-y border-border/40 bg-background/40 py-12">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 text-center sm:grid-cols-4 sm:px-6">
          {[
            { k: "2–3 hrs", v: "Average daily session" },
            { k: "5 brain", v: "Wave bands tuned" },
            { k: "<60 sec", v: "To your custom profile" },
            { k: "100%", v: "Browser-based, no install" },
          ].map((s) => (
            <div key={s.v}>
              <p className="font-serif text-3xl text-gradient sm:text-4xl">{s.k}</p>
              <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
              How it works
            </p>
            <h2 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">
              Reads the body. <span className="text-gradient italic">Focuses the mind.</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              SmartSound listens to your goal and your state, then plays the exact frequency
              your brain needs right now.
            </p>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div className="relative overflow-hidden rounded-3xl border border-border/40 bg-gradient-card p-2 shadow-elegant">
              <img
                src={brainFreq}
                alt="Glowing violet brain with neural frequency waves"
                width={1024}
                height={1024}
                loading="lazy"
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>

            <div className="space-y-4">
              {steps.map((s) => (
                <div
                  key={s.n}
                  className="group rounded-2xl border border-border/40 bg-gradient-card p-6 transition-all hover:border-primary/50 hover:shadow-glow"
                >
                  <div className="flex items-start gap-5">
                    <span className="font-serif text-3xl text-gradient">{s.n}</span>
                    <div>
                      <h3 className="text-xl font-semibold">{s.title}</h3>
                      <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROFILES */}
      <section id="profiles" className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
              Profiles
            </p>
            <h2 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">
              One brain. <span className="text-gradient italic">Many modes.</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Six core profiles — each backed by neuroscience — plus an ADHD mode tuned for
              high-stimulation brains.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {profiles.map((p) => (
              <div
                key={p.title}
                className="group relative overflow-hidden rounded-2xl border border-border/40 bg-gradient-card p-7 transition-all hover:-translate-y-1 hover:border-primary/60 hover:shadow-glow"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-2xl">
                  {p.emoji}
                </div>
                <h3 className="mt-5 text-lg font-semibold">{p.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{p.desc}</p>
                <div className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-primary/30 opacity-0 blur-3xl transition-opacity group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-card p-10 text-center shadow-elegant sm:p-16">
            <div
              className="pointer-events-none absolute inset-0 opacity-40 mix-blend-screen"
              style={{ backgroundImage: `url(${heroWave})`, backgroundSize: "cover" }}
              aria-hidden
            />
            <div className="relative">
              <h2 className="font-serif text-4xl tracking-tight sm:text-5xl">
                Ready to <span className="text-gradient italic">tune in?</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
                Free forever. No download. Your perfect frequency is one click away.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild variant="hero" size="xl">
                  <a href="https://smartsound.live" target="_blank" rel="noreferrer">
                    Launch SmartSound 🚀
                  </a>
                </Button>
                <Button asChild variant="glass" size="xl">
                  <a href="https://www.tiktok.com/@smartsoundco" target="_blank" rel="noreferrer">
                    Follow @smartsoundco
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

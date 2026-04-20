import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import brainFreq from "@/assets/brain-frequency.jpg";

export const Route = createFileRoute("/investors")({
  head: () => ({
    meta: [
      { title: "Investors — SmartSound | Personalized Neural Audio" },
      {
        name: "description",
        content:
          "SmartSound is building the world's first adaptive neural audio platform. A $365M underserved market with -79% category competition. See the deck.",
      },
      { property: "og:title", content: "Investors — SmartSound" },
      {
        property: "og:description",
        content:
          "$365M market. Adaptive neural audio. The investor brief for SmartSound.",
      },
    ],
  }),
  component: InvestorsPage,
});

const stats = [
  { k: "$365M", v: "Serviceable obtainable market" },
  { k: "-79%", v: "Category competition gap vs. legacy apps" },
  { k: "2–3 hrs", v: "Avg. daily user engagement" },
  { k: "5", v: "Brain wave bands tuned in real time" },
];

const competitors = [
  { name: "SmartSound", adaptive: true, neuro: true, free: true, web: true, adhd: true },
  { name: "Calm", adaptive: false, neuro: false, free: false, web: true, adhd: false },
  { name: "Headspace", adaptive: false, neuro: false, free: false, web: true, adhd: false },
  { name: "Brain.fm", adaptive: false, neuro: true, free: false, web: true, adhd: false },
  { name: "Endel", adaptive: true, neuro: false, free: false, web: false, adhd: false },
];

const cols: { key: keyof (typeof competitors)[number]; label: string }[] = [
  { key: "adaptive", label: "Real-time adaptive" },
  { key: "neuro", label: "Neuroscience-backed" },
  { key: "free", label: "Free forever tier" },
  { key: "web", label: "Browser-native" },
  { key: "adhd", label: "ADHD-tuned mode" },
];

const traction = [
  { label: "Active beta users", value: "1,200+" },
  { label: "Sessions / week", value: "8,400" },
  { label: "Avg. session length", value: "47 min" },
  { label: "D7 retention", value: "38%" },
];

const useOfFunds = [
  { label: "Product & engineering", pct: 45 },
  { label: "Clinical research & IP", pct: 25 },
  { label: "Go-to-market & growth", pct: 20 },
  { label: "Operations & runway", pct: 10 },
];

function InvestorsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-30" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-primary">
                Investor brief · 2026
              </span>
              <h1 className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
                Tuning a <span className="text-gradient italic">$365M</span> market the rest of audio missed.
              </h1>
              <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                SmartSound is the first adaptive neural-audio platform — built for the 100M+
                people drowning in distraction, insomnia, and burnout that meditation apps
                never solved.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild variant="hero" size="lg">
                  <a href="mailto:smartsoundsupport@gmail.com?subject=SmartSound%20Investor%20Inquiry">
                    Request the data room
                  </a>
                </Button>
                <Button asChild variant="glass" size="lg">
                  <a href="https://canva.link/zvcrxj7dt1dbngh" target="_blank" rel="noreferrer">
                    View pitch deck
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 -z-10 animate-pulse-glow rounded-full bg-primary/30 blur-3xl" />
              <img
                src={brainFreq}
                alt="SmartSound neural frequency visualization"
                width={1024}
                height={1024}
                loading="lazy"
                className="rounded-3xl border border-border/40 shadow-elegant"
              />
            </div>
          </div>
        </div>
      </section>

      {/* KEY STATS */}
      <section className="border-y border-border/40 bg-background/50 py-12">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 text-center sm:grid-cols-4 sm:px-6">
          {stats.map((s) => (
            <div key={s.v}>
              <p className="font-serif text-4xl text-gradient sm:text-5xl">{s.k}</p>
              <p className="mt-1.5 text-xs text-muted-foreground sm:text-sm">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROBLEM / SOLUTION */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-border/40 bg-gradient-card p-10">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              The problem
            </p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
              Meditation apps don't move the needle.
            </h2>
            <ul className="mt-6 space-y-4 text-muted-foreground">
              <li className="flex gap-3"><span className="text-primary">→</span>61% of Gen Z report inability to focus &gt;15 min.</li>
              <li className="flex gap-3"><span className="text-primary">→</span>Calm & Headspace built billion-dollar businesses on guided audio — but retention collapses after 30 days.</li>
              <li className="flex gap-3"><span className="text-primary">→</span>Static playlists ignore your brain state. White noise is one-size-fits-none.</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-primary/40 bg-gradient-card p-10 shadow-glow">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
              Our solution
            </p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
              Sound that <span className="text-gradient italic">adapts</span> to your brain.
            </h2>
            <ul className="mt-6 space-y-4 text-muted-foreground">
              <li className="flex gap-3"><span className="text-primary">✓</span>Adaptive frequency engine: alpha, beta, gamma, theta, delta — tuned in real time.</li>
              <li className="flex gap-3"><span className="text-primary">✓</span>Neuroscience-backed profiles for focus, sleep, ADHD, creativity & calm.</li>
              <li className="flex gap-3"><span className="text-primary">✓</span>Browser-native. Zero friction. Free forever tier drives top-of-funnel.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
              The product
            </p>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
              <span className="text-gradient italic">Senses.</span> Analyzes. Adapts.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { n: "01", t: "Senses Activity", d: "Onboarding captures goal, energy state, and brain type in <60 seconds." },
              { n: "02", t: "Analyzes", d: "Maps the user's task to the optimal neural band using our proprietary engine." },
              { n: "03", t: "Adapts", d: "Continuously tunes the soundscape session-over-session for measurable lift." },
            ].map((s) => (
              <div key={s.n} className="rounded-2xl border border-border/40 bg-gradient-card p-7">
                <p className="font-serif text-4xl text-gradient">{s.n}</p>
                <h3 className="mt-3 text-xl font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRACTION */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
              Traction
            </p>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
              Early signal. <span className="text-gradient italic">Strong pull.</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              SmartSound launched in stealth and is already seeing best-in-class engagement
              relative to wellness benchmarks (D7 industry avg ~14%).
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {traction.map((t) => (
              <div key={t.label} className="rounded-2xl border border-border/40 bg-gradient-card p-7 text-center">
                <p className="font-serif text-4xl text-gradient sm:text-5xl">{t.value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{t.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPETITION */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
              Competition
            </p>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
              No one else does <span className="text-gradient italic">all four.</span>
            </h2>
          </div>

          <div className="mt-12 overflow-x-auto rounded-3xl border border-border/40 bg-gradient-card">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-border/40 text-muted-foreground">
                  <th className="p-5 font-medium">Feature</th>
                  {competitors.map((c) => (
                    <th
                      key={c.name}
                      className={`p-5 text-center font-medium ${
                        c.name === "SmartSound" ? "text-gradient font-serif text-base" : ""
                      }`}
                    >
                      {c.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {cols.map((col) => (
                  <tr key={col.key} className="border-b border-border/40 last:border-0">
                    <td className="p-5 font-medium">{col.label}</td>
                    {competitors.map((c) => (
                      <td key={c.name} className="p-5 text-center">
                        {c[col.key] ? (
                          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/20 text-primary">
                            ✓
                          </span>
                        ) : (
                          <span className="text-muted-foreground/60">—</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* BUSINESS MODEL */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
              Business model
            </p>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
              Freemium → <span className="text-gradient italic">Premium.</span>
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Frictionless free tier drives viral acquisition (TikTok-led). Premium unlocks
              advanced profiles, longer sessions, and biometric integrations.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-border/40 bg-gradient-card p-7">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Free</p>
              <p className="mt-2 font-serif text-4xl text-foreground">$0</p>
              <p className="mt-3 text-sm text-muted-foreground">
                Core profiles. 60-min sessions. Browser-native access.
              </p>
            </div>
            <div className="rounded-2xl border border-primary/50 bg-gradient-card p-7 shadow-glow">
              <p className="text-xs uppercase tracking-wider text-primary">Premium</p>
              <p className="mt-2 font-serif text-4xl text-gradient">$9.99/mo</p>
              <p className="mt-3 text-sm text-muted-foreground">
                Unlimited sessions. ADHD mode. Adaptive AI tuning. Streak rewards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GO TO MARKET */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
              Go to market
            </p>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
              Built for <span className="text-gradient italic">organic velocity.</span>
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                t: "Creator-led acquisition",
                d: "@smartsoundco on TikTok turns demos into installs at near-zero CAC. Each clip is a live product proof.",
              },
              {
                t: "Student & ADHD wedge",
                d: "Two communities with rabid word-of-mouth and clear pain. We win them first, expand outward.",
              },
              {
                t: "Workplace & B2B",
                d: "Wellness budgets are growing 2x faster than IT spend. SmartSound for Teams is the next surface.",
              },
            ].map((s) => (
              <div key={s.t} className="rounded-2xl border border-border/40 bg-gradient-card p-7">
                <h3 className="text-xl font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE ASK */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl border border-primary/40 bg-gradient-card p-10 shadow-glow sm:p-14">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
                  The ask
                </p>
                <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
                  Raising a <span className="text-gradient italic">pre-seed</span> round.
                </h2>
                <p className="mt-4 text-muted-foreground">
                  18 months of runway to close clinical validation, ship native apps, and
                  scale the creator engine. Strategic angels in audio, neuroscience, and
                  consumer health prioritized.
                </p>
                <Button asChild variant="hero" size="lg" className="mt-8">
                  <a href="mailto:smartsoundsupport@gmail.com?subject=SmartSound%20Investor%20Inquiry">
                    Get in touch →
                  </a>
                </Button>
              </div>

              <div className="space-y-3">
                <p className="text-sm font-medium text-muted-foreground">Use of funds</p>
                {useOfFunds.map((u) => (
                  <div key={u.label}>
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground">{u.label}</span>
                      <span className="text-muted-foreground">{u.pct}%</span>
                    </div>
                    <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-secondary">
                      <div
                        className="h-full bg-gradient-primary"
                        style={{ width: `${u.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import appTask from "@/assets/app-task.png";
import appAudio from "@/assets/app-audio.png";
import appVitals from "@/assets/app-vitals.png";
import appSleep from "@/assets/app-sleep.png";

export const Route = createFileRoute("/investors")({
  head: () => ({
    meta: [
      { title: "Investors — SmartSound | Neural Audio Platform" },
      {
        name: "description",
        content:
          "SmartSound is the first adaptive neural-audio platform. 500+ hourly site requests, 7,000+ social-driven users, and a $365M underserved market. Investor brief.",
      },
      { property: "og:title", content: "Investors — SmartSound" },
      {
        property: "og:description",
        content:
          "Adaptive neural audio. 500+ hourly requests. 7,000+ social-driven users. The investor brief for SmartSound.",
      },
      { property: "og:image", content: "https://smartsound.live/og.png" },
      { property: "twitter:image", content: "https://smartsound.live/og.png" },
    ],
  }),
  component: InvestorsPage,
});

const heroStats = [
  { k: "500+", v: "Hourly site requests", c: "blue" },
  { k: "7,000+", v: "Reached via social marketing", c: "purple" },
  { k: "$365M", v: "Serviceable market", c: "teal" },
  { k: "$4.99", v: "Focus+ price · /mo", c: "amber" },
];

const competitors = [
  { name: "SmartSound", adaptive: true, neuro: true, free: true, web: true, adhd: true, tlx: true },
  { name: "Calm", adaptive: false, neuro: false, free: false, web: true, adhd: false, tlx: false },
  { name: "Headspace", adaptive: false, neuro: false, free: false, web: true, adhd: false, tlx: false },
  { name: "Brain.fm", adaptive: false, neuro: true, free: false, web: true, adhd: false, tlx: false },
  { name: "Endel", adaptive: true, neuro: false, free: false, web: false, adhd: false, tlx: false },
];

const cols: { key: keyof (typeof competitors)[number]; label: string }[] = [
  { key: "adaptive", label: "Real-time adaptive engine" },
  { key: "neuro", label: "Neuroscience-backed audio" },
  { key: "tlx", label: "NASA-TLX workload scoring" },
  { key: "adhd", label: "ADHD high-stim mode" },
  { key: "free", label: "Free forever tier" },
  { key: "web", label: "Browser-native (no install)" },
];

const traction = [
  { label: "Hourly site requests", value: "500+", note: "Sustained baseline traffic" },
  { label: "Social-driven users", value: "7,000+", note: "Organic TikTok @smartsoundco" },
  { label: "Avg. daily session", value: "2–3 hrs", note: "10×+ wellness category benchmark" },
  { label: "Onboarding completion", value: "<60 sec", note: "Frictionless web-native flow" },
];

const useOfFunds = [
  { label: "Product & engineering", pct: 45, color: "var(--brand-blue)" },
  { label: "Clinical research & IP", pct: 25, color: "var(--brand-purple)" },
  { label: "Go-to-market & creator ops", pct: 20, color: "var(--brand-teal)" },
  { label: "Operations & runway", pct: 10, color: "var(--brand-amber)" },
];

const productScreens = [
  {
    img: appTask,
    label: "Task · NASA-TLX",
    title: "Diagnose cognitive load in seconds",
    desc: "We translate the NASA-Task Load Index into a frictionless slider. Every tune-up starts with what your brain is actually carrying.",
  },
  {
    img: appAudio,
    label: "Audio · Neural Pacer",
    title: "Four modes. Five frequency bands.",
    desc: "Focus, Relax, ADHD and Nap profiles auto-tune Δ θ α β γ bands in real time. Browser-native — no app store gatekeepers.",
  },
  {
    img: appVitals,
    label: "Vitals · Pre-session",
    title: "Pomodoro, but personal.",
    desc: "Heart rate, HRV, stress, hydration, and sleep feed our session engine — picking 25/5, 52/17, or 90/20 ultradian cycles.",
  },
  {
    img: appSleep,
    label: "Sleep & Recovery · Premium",
    title: "Recovery that compounds.",
    desc: "A premium-tier wedge into the $40B sleep market — the same engine, tuned for delta and theta.",
  },
];

function InvestorsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero pt-32 pb-24 sm:pt-40 sm:pb-32">
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-30" />
        <div className="pointer-events-none absolute top-1/4 left-1/4 h-72 w-72 animate-orb rounded-full bg-brand-blue/30 blur-3xl" />
        <div className="pointer-events-none absolute top-1/3 right-1/4 h-80 w-80 animate-orb rounded-full bg-brand-purple/30 blur-3xl" style={{ animationDelay: "3s" }} />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <span className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-brand-blue/40 bg-brand-blue/10 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-brand-blue backdrop-blur">
            <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-brand-blue" />
            Investor brief · Pre-seed 2026
          </span>

          <h1
            className="mt-6 max-w-4xl font-serif text-5xl leading-[1.02] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Tuning a <span className="text-gradient-brand italic">$365M</span> market
            <br className="hidden md:block" />
            the rest of audio missed.
          </h1>

          <p
            className="mt-7 max-w-2xl text-lg text-muted-foreground sm:text-xl animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            SmartSound is the first <span className="text-foreground">adaptive neural-audio platform</span> —
            built for the 100M+ people drowning in distraction, insomnia, and burnout that
            meditation apps never solved.
          </p>

          <div
            className="mt-10 flex flex-wrap gap-3 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button asChild variant="hero" size="xl">
              <a href="mailto:smartsoundsupport@gmail.com?subject=SmartSound%20Investor%20Inquiry">
                Request the data room →
              </a>
            </Button>
            <Button asChild variant="glass" size="xl">
              <a href="https://canva.link/zvcrxj7dt1dbngh" target="_blank" rel="noreferrer">
                View pitch deck
              </a>
            </Button>
          </div>

          {/* Hero stats */}
          <div
            className="mt-16 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            {heroStats.map((s) => (
              <div
                key={s.v}
                className="glass rounded-2xl p-5 transition-all hover:border-brand-blue/40 hover:shadow-glow"
              >
                <p
                  className="font-serif text-4xl tracking-tight sm:text-5xl"
                  style={{
                    color:
                      s.c === "blue"
                        ? "var(--brand-blue)"
                        : s.c === "purple"
                          ? "var(--brand-purple)"
                          : s.c === "teal"
                            ? "var(--brand-teal)"
                            : "var(--brand-amber)",
                  }}
                >
                  {s.k}
                </p>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                  {s.v}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM / SOLUTION */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-blue">
              The opportunity
            </p>
            <h2 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">
              Meditation apps don't <span className="text-gradient-brand italic">move the needle.</span>
            </h2>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-border/50 bg-gradient-card p-10">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                The problem
              </p>
              <h3 className="mt-3 font-serif text-2xl sm:text-3xl">
                Static audio for non-static brains.
              </h3>
              <ul className="mt-6 space-y-4 text-muted-foreground">
                <li className="flex gap-3"><span className="text-brand-blue">→</span>61% of Gen Z report inability to focus &gt;15 min.</li>
                <li className="flex gap-3"><span className="text-brand-blue">→</span>Calm & Headspace built billion-dollar businesses on guided audio — but D30 retention collapses below 8%.</li>
                <li className="flex gap-3"><span className="text-brand-blue">→</span>White noise is one-size-fits-none. Static playlists ignore your task, your energy, and your brain.</li>
                <li className="flex gap-3"><span className="text-brand-blue">→</span>$1.2B ADHD tooling market with almost zero audio-native solutions.</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-brand-blue/40 bg-gradient-card p-10 shadow-glow">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue">
                Our solution
              </p>
              <h3 className="mt-3 font-serif text-2xl sm:text-3xl">
                Sound that <span className="text-gradient-brand italic">adapts</span> to your brain.
              </h3>
              <ul className="mt-6 space-y-4 text-muted-foreground">
                <li className="flex gap-3"><span className="text-brand-purple">✓</span>Adaptive frequency engine: alpha, beta, gamma, theta, delta — tuned in real time.</li>
                <li className="flex gap-3"><span className="text-brand-purple">✓</span>NASA-TLX cognitive load scoring drives every session selection.</li>
                <li className="flex gap-3"><span className="text-brand-purple">✓</span>4 profiles + ADHD high-stim mode. Spotify integration. Vitals + sleep tracking.</li>
                <li className="flex gap-3"><span className="text-brand-purple">✓</span>Browser-native. Free tier drives top-of-funnel. Live today at smartsound.live.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT SCREENS — alternating image rows */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-blue">
              The product
            </p>
            <h2 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">
              Live. <span className="text-gradient-brand italic">In your browser.</span> Today.
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Not a deck. Not a demo. SmartSound is shipping — and it's already proving the
              wedge across Focus, Sleep, Vitals and ADHD.
            </p>
          </div>

          <div className="mt-16 space-y-24">
            {productScreens.map((s, i) => (
              <div
                key={s.label}
                className={`grid gap-10 lg:grid-cols-2 lg:items-center ${
                  i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="relative">
                  <div className="absolute -inset-6 -z-10 animate-pulse-glow rounded-3xl bg-gradient-aurora opacity-30 blur-3xl" />
                  <div className="overflow-hidden rounded-3xl border border-border/50 bg-card shadow-elegant">
                    <img
                      src={s.img}
                      alt={`SmartSound ${s.label} screen`}
                      width={1024}
                      height={768}
                      loading="lazy"
                      className="w-full"
                    />
                  </div>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue">
                    {s.label}
                  </p>
                  <h3 className="mt-3 font-serif text-3xl tracking-tight sm:text-4xl">
                    {s.title}
                  </h3>
                  <p className="mt-4 text-lg text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-blue">
              The engine
            </p>
            <h2 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">
              <span className="text-gradient-brand italic">Senses.</span> Analyzes. Adapts.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { n: "01", t: "Senses", d: "NASA-TLX scoring + vitals input quantify cognitive load in <60 seconds." },
              { n: "02", t: "Analyzes", d: "Our engine maps the user's task to the optimal neural band and rest cycle." },
              { n: "03", t: "Adapts", d: "Continuously tunes frequency bands, profiles, and Pomodoro rhythm session-over-session." },
            ].map((s) => (
              <div
                key={s.n}
                className="group rounded-2xl border border-border/50 bg-gradient-card p-7 transition-all hover:border-brand-blue/40 hover:shadow-glow"
              >
                <p className="font-serif text-5xl text-gradient-brand">{s.n}</p>
                <h3 className="mt-4 text-xl font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRACTION */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-blue">
              Traction
            </p>
            <h2 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">
              Real users. <span className="text-gradient-brand italic">Real signal.</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Pre-launch, organic, zero paid ads. Sustained <span className="text-foreground">500+ requests/hour</span>{" "}
              and over <span className="text-foreground">7,000 users acquired through social marketing alone</span> via{" "}
              <a
                href="https://www.tiktok.com/@smartsoundco"
                target="_blank"
                rel="noreferrer"
                className="text-brand-blue underline-offset-4 hover:underline"
              >
                @smartsoundco
              </a>
              .
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {traction.map((t) => (
              <div
                key={t.label}
                className="rounded-2xl border border-border/50 bg-gradient-card p-7 text-center transition-all hover:border-brand-purple/40 hover:shadow-glow"
              >
                <p className="font-serif text-4xl text-gradient-brand sm:text-5xl">
                  {t.value}
                </p>
                <p className="mt-3 text-sm font-medium text-foreground">{t.label}</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                  {t.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPETITION */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-blue">
              Competition
            </p>
            <h2 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">
              No one else does <span className="text-gradient-brand italic">all six.</span>
            </h2>
          </div>

          <div className="mt-12 overflow-x-auto rounded-3xl border border-border/50 bg-gradient-card">
            <table className="w-full min-w-[700px] text-left text-sm">
              <thead>
                <tr className="border-b border-border/50 text-muted-foreground">
                  <th className="p-5 font-mono text-[11px] uppercase tracking-wider">Feature</th>
                  {competitors.map((c) => (
                    <th
                      key={c.name}
                      className={`p-5 text-center ${
                        c.name === "SmartSound"
                          ? "font-serif text-base text-gradient-brand"
                          : "font-mono text-[11px] uppercase tracking-wider"
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
                          <span
                            className={`inline-flex h-7 w-7 items-center justify-center rounded-full ${
                              c.name === "SmartSound"
                                ? "bg-gradient-primary text-white"
                                : "bg-brand-blue/15 text-brand-blue"
                            }`}
                          >
                            ✓
                          </span>
                        ) : (
                          <span className="text-muted-foreground/50">—</span>
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
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-blue">
              Business model
            </p>
            <h2 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">
              Free → <span className="text-gradient-brand italic">Focus+</span> → Teams.
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Frictionless free tier. $4.99/mo Focus+ for power users. B2B Teams unlocked next.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            <div className="rounded-3xl border border-border/50 bg-gradient-card p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Free</p>
              <p className="mt-3 font-serif text-5xl">$0</p>
              <p className="mt-3 text-sm text-muted-foreground">
                Alpha + Brown profile. Browser-native. NASA-TLX scoring.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                <li>• Core focus profile</li>
                <li>• Vitals dashboard</li>
                <li>• 1 Pomodoro mode</li>
              </ul>
            </div>

            <div className="relative rounded-3xl border border-brand-blue/50 bg-gradient-card p-8 shadow-glow-lg">
              <span className="absolute -top-3 left-8 inline-flex items-center gap-1 rounded-full bg-gradient-primary px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-white">
                ★ Most popular
              </span>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue">Focus+</p>
              <p className="mt-3 font-serif text-5xl text-gradient-brand">$4.99<span className="text-xl text-muted-foreground">/mo</span></p>
              <p className="mt-3 text-sm text-muted-foreground">
                All 5 profiles. ADHD mode. Sleep & Recovery. Adaptive AI tuning.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                <li>• Focus, Relax, ADHD, Nap</li>
                <li>• Sleep & Recovery suite</li>
                <li>• Spotify + Apple Music sync</li>
                <li>• 25/5 · 52/17 · 90/20 cycles</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-border/50 bg-gradient-card p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Teams · Soon</p>
              <p className="mt-3 font-serif text-5xl">Custom</p>
              <p className="mt-3 text-sm text-muted-foreground">
                Workplace wellness budget capture. Admin analytics. SSO.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                <li>• Team productivity dashboards</li>
                <li>• HR/wellness integrations</li>
                <li>• Volume-priced seats</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* GO TO MARKET */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-blue">
              Go to market
            </p>
            <h2 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">
              Built for <span className="text-gradient-brand italic">organic velocity.</span>
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                t: "Creator-led acquisition",
                d: "@smartsoundco on TikTok turns demos into installs at near-zero CAC. 7,000+ users acquired with no paid spend.",
              },
              {
                t: "Student & ADHD wedge",
                d: "Two communities with rabid word-of-mouth and clear pain. We win them first, expand outward.",
              },
              {
                t: "Workplace & B2B",
                d: "Wellness budgets are growing 2× faster than IT spend. SmartSound for Teams is the next surface.",
              },
            ].map((s) => (
              <div
                key={s.t}
                className="rounded-2xl border border-border/50 bg-gradient-card p-7 transition-all hover:border-brand-blue/40 hover:shadow-glow"
              >
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
          <div className="relative overflow-hidden rounded-3xl border border-brand-blue/40 bg-gradient-card p-10 shadow-glow-lg sm:p-14">
            <div className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 animate-orb rounded-full bg-brand-purple/40 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 animate-orb rounded-full bg-brand-blue/40 blur-3xl" style={{ animationDelay: "4s" }} />

            <div className="relative grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-blue">
                  The ask
                </p>
                <h2 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">
                  Raising a <span className="text-gradient-brand italic">pre-seed</span> round.
                </h2>
                <p className="mt-4 text-muted-foreground">
                  18 months of runway to close clinical validation, ship native iOS + Android,
                  and scale the creator engine. Strategic angels in audio, neuroscience, and
                  consumer health prioritized.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild variant="hero" size="lg">
                    <a href="mailto:smartsoundsupport@gmail.com?subject=SmartSound%20Investor%20Inquiry">
                      Get in touch →
                    </a>
                  </Button>
                  <Button asChild variant="glass" size="lg">
                    <Link to="/">See the product</Link>
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  Use of funds
                </p>
                {useOfFunds.map((u) => (
                  <div key={u.label}>
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground">{u.label}</span>
                      <span className="font-mono text-muted-foreground">{u.pct}%</span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-secondary">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${u.pct}%`,
                          background: u.color,
                        }}
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

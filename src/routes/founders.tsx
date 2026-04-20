import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/founders")({
  head: () => ({
    meta: [
      { title: "Meet the Founders — SmartSound" },
      {
        name: "description",
        content:
          "Meet the team behind SmartSound: Aarav Naveen, Rishi Datanwala, Dane Bromfield, and Alan Jessil — building personalized neural audio for focus, sleep, and calm.",
      },
      { property: "og:title", content: "Meet the Founders — SmartSound" },
      {
        property: "og:description",
        content:
          "The four founders building SmartSound — personalized neural audio that adapts to your brain.",
      },
    ],
  }),
  component: FoundersPage,
});

type Founder = {
  name: string;
  role: string;
  initials: string;
  bio: string;
  contributions: string[];
  accent: "blue" | "purple" | "teal" | "amber";
};

const founders: Founder[] = [
  {
    name: "Aarav Naveen",
    role: "Founder & CEO",
    initials: "AN",
    bio: "Came up with SmartSound in November 2025 and built it end-to-end — from the neuroscience research and adaptive audio engine to the app, the website, and the product roadmap.",
    contributions: [
      "Founded SmartSound (Nov 2025)",
      "App & website engineering",
      "Research & product development",
      "Social media marketing",
    ],
    accent: "blue",
  },
  {
    name: "Rishi Datanwala",
    role: "Co-founder & Engineering",
    initials: "RD",
    bio: "Joined Aarav early to help build SmartSound. Contributes to the app and website codebase and supports the technical architecture behind the adaptive audio system.",
    contributions: [
      "App engineering",
      "Website engineering",
      "Technical collaboration",
    ],
    accent: "purple",
  },
  {
    name: "Dane Bromfield",
    role: "Co-founder & Growth",
    initials: "DB",
    bio: "Runs the human side of SmartSound — leading user research surveys, coordinating the beta tester program, and driving in-person marketing efforts on the ground.",
    contributions: [
      "User research & surveys",
      "Beta tester coordination",
      "In-person marketing",
    ],
    accent: "teal",
  },
  {
    name: "Allan Jessil",
    role: "Co-founder & Contributor",
    initials: "AJ",
    bio: "Joined the team through the founding program and contributes product tweaks and polish to the SmartSound experience.",
    contributions: ["Product tweaks & refinements"],
    accent: "amber",
  },
];

const accentRing: Record<Founder["accent"], string> = {
  blue: "ring-[color:var(--brand-blue)]/40 shadow-[0_0_60px_-15px_var(--brand-blue)]",
  purple:
    "ring-[color:var(--brand-purple)]/40 shadow-[0_0_60px_-15px_var(--brand-purple)]",
  teal: "ring-[color:var(--brand-teal)]/40 shadow-[0_0_60px_-15px_var(--brand-teal)]",
  amber:
    "ring-[color:var(--brand-amber)]/40 shadow-[0_0_60px_-15px_var(--brand-amber)]",
};

const accentBg: Record<Founder["accent"], string> = {
  blue: "from-[color:var(--brand-blue)]/30 to-[color:var(--brand-purple)]/20",
  purple: "from-[color:var(--brand-purple)]/30 to-[color:var(--brand-blue)]/20",
  teal: "from-[color:var(--brand-teal)]/30 to-[color:var(--brand-blue)]/20",
  amber: "from-[color:var(--brand-amber)]/30 to-[color:var(--brand-purple)]/20",
};

function FoundersPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/40 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur animate-fade-up">
            <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-primary" />
            The team
          </span>

          <h1
            className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl md:text-7xl animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Meet the <span className="text-gradient-brand">founders</span>
          </h1>

          <p
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Four builders on a mission to make personalized neural audio the
            default way humans focus, sleep, and unwind.
          </p>
        </div>
      </section>

      {/* FOUNDERS GRID */}
      <section className="relative py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2">
            {founders.map((f, i) => (
              <article
                key={f.name}
                className="group relative overflow-hidden rounded-3xl border border-border/40 bg-gradient-card p-8 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 animate-fade-up"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div
                  className={`pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-br ${accentBg[f.accent]} opacity-60 blur-3xl transition-opacity duration-500 group-hover:opacity-100`}
                />

                <div className="relative flex items-start gap-5">
                  <div
                    className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-primary text-2xl font-semibold text-primary-foreground ring-2 ${accentRing[f.accent]}`}
                  >
                    {f.initials}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h2 className="font-serif text-2xl tracking-tight sm:text-3xl">
                      {f.name}
                    </h2>
                    <p className="mt-1 font-mono text-xs uppercase tracking-wider text-primary">
                      {f.role}
                    </p>
                  </div>
                </div>

                <p className="relative mt-6 text-base leading-relaxed text-muted-foreground">
                  {f.bio}
                </p>

                <ul className="relative mt-5 flex flex-wrap gap-2">
                  {f.contributions.map((c) => (
                    <li
                      key={c}
                      className="rounded-full border border-border/60 bg-secondary/40 px-3 py-1 text-xs text-muted-foreground backdrop-blur"
                    >
                      {c}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="relative py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/40 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Our story
            </span>
            <h2 className="mt-6 font-serif text-4xl tracking-tight sm:text-5xl">
              How <span className="text-gradient-brand">SmartSound</span> started
            </h2>
          </div>

          <ol className="relative mt-12 space-y-8 border-l border-border/50 pl-8">
            <li className="relative animate-fade-up">
              <span className="absolute -left-[37px] flex h-4 w-4 items-center justify-center rounded-full bg-gradient-primary ring-4 ring-background" />
              <p className="font-mono text-xs uppercase tracking-wider text-primary">
                November 2025
              </p>
              <h3 className="mt-1 font-serif text-2xl tracking-tight">
                The idea
              </h3>
              <p className="mt-2 text-muted-foreground">
                Aarav came up with SmartSound — a personalized neural audio
                engine that adapts to the listener's brain — and started
                building the first prototype, the research foundation, and the
                product roadmap.
              </p>
            </li>

            <li
              className="relative animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="absolute -left-[37px] flex h-4 w-4 items-center justify-center rounded-full bg-gradient-primary ring-4 ring-background" />
              <p className="font-mono text-xs uppercase tracking-wider text-primary">
                Shortly after
              </p>
              <h3 className="mt-1 font-serif text-2xl tracking-tight">
                Rishi joins
              </h3>
              <p className="mt-2 text-muted-foreground">
                Aarav brought on Rishi to help accelerate engineering across
                the app and website.
              </p>
            </li>

            <li
              className="relative animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              <span className="absolute -left-[37px] flex h-4 w-4 items-center justify-center rounded-full bg-gradient-primary ring-4 ring-background" />
              <p className="font-mono text-xs uppercase tracking-wider text-primary">
                The program
              </p>
              <h3 className="mt-1 font-serif text-2xl tracking-tight">
                Dane and Allan come on board
              </h3>
              <p className="mt-2 text-muted-foreground">
                Through a founder program, Dane joined to lead user research,
                beta testing, and in-person marketing, and Allan came on to
                contribute product tweaks. The four-person team has been
                building SmartSound together since.
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-border/40 bg-gradient-card p-10 text-center backdrop-blur sm:p-16">
            <div className="pointer-events-none absolute inset-0 bg-gradient-aurora opacity-10" />
            <div className="relative">
              <h3 className="font-serif text-3xl tracking-tight sm:text-5xl">
                Want to <span className="text-gradient-brand">build with us?</span>
              </h3>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                We're hiring, partnering with researchers, and talking to
                investors. Reach out anytime.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button asChild variant="hero" size="lg">
                  <a href="mailto:smartsoundsupport@gmail.com">Get in touch</a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a
                    href="https://www.tiktok.com/@smartsoundco"
                    target="_blank"
                    rel="noreferrer"
                  >
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

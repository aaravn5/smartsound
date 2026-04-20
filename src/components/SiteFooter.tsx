import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 bg-background/60">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Your brain has a frequency. We tune it. Personalized neural audio for focus,
              sleep, and calm — backed by neuroscience.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">Product</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="https://smartsound.live" target="_blank" rel="noreferrer" className="hover:text-foreground">
                  Launch app
                </a>
              </li>
              <li>
                <a href="/#how-it-works" className="hover:text-foreground">
                  How it works
                </a>
              </li>
              <li>
                <a href="/#profiles" className="hover:text-foreground">
                  Profiles
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">Company</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/investors" className="hover:text-foreground">
                  Investors
                </Link>
              </li>
              <li>
                <a
                  href="mailto:smartsoundsupport@gmail.com"
                  className="hover:text-foreground"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@smartsoundco"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-foreground"
                >
                  TikTok @smartsoundco
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border/40 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} SmartSound. All rights reserved.</p>
          <p>
            Questions? <a href="mailto:smartsoundsupport@gmail.com" className="text-foreground hover:underline">smartsoundsupport@gmail.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

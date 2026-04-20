import { Link } from "@tanstack/react-router";

/**
 * Official SmartSound logo — taken from smartsound.live.
 * The mark is a flowing "S" wave inside a rounded gradient square,
 * paired with the wordmark and the "Neural Pacer" tagline.
 */
export function Logo({
  className = "",
  showTagline = true,
}: {
  className?: string;
  showTagline?: boolean;
}) {
  return (
    <Link to="/" className={`group inline-flex items-center gap-3 ${className}`}>
      <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary shadow-glow transition-transform group-hover:scale-105">
        <svg
          viewBox="0 0 18 18"
          className="h-6 w-6 text-white"
          fill="none"
        >
          <path
            d="M9 2Q13 5.5 9 9Q5 12.5 9 16"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
          <circle cx="9" cy="9" r="1.8" fill="currentColor" opacity="0.75" />
          <path
            d="M4.5 6Q2.5 9 4.5 12"
            stroke="currentColor"
            strokeWidth="1.1"
            strokeLinecap="round"
            opacity="0.5"
          />
          <path
            d="M13.5 6Q15.5 9 13.5 12"
            stroke="currentColor"
            strokeWidth="1.1"
            strokeLinecap="round"
            opacity="0.5"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
          SmartSound
        </span>
        {showTagline && (
          <span className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-brand-blue">
            Neural Pacer
          </span>
        )}
      </span>
    </Link>
  );
}

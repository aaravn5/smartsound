import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`group inline-flex items-center gap-2.5 ${className}`}>
      <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5 text-primary-foreground"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
        >
          <path d="M3 12h2l2-6 3 12 3-9 2 5h6" />
        </svg>
      </span>
      <span className="font-serif text-2xl tracking-tight text-foreground">
        Smart<span className="text-gradient">Sound</span>
      </span>
    </Link>
  );
}

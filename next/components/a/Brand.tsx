import Link from "next/link";

/** The ball mark from the previous site's icon (ring + two seams), drawn in the accent colour. */
export function Mark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <circle cx="16" cy="16" r="11" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M7.6 10.2c3.9 1.7 5.6 5.4 4.4 11.6M24.4 21.8c-3.9-1.7-5.6-5.4-4.4-11.6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function Brand({ onClick }: { onClick?: () => void }) {
  return (
    <Link href="/" className="brand" onClick={onClick} aria-label="Next Tenisz Akadémia – kezdőlap">
      <Mark className="brand__mark" />
      <span className="brand__name">
        <b>Next Tenisz</b>
        <small>Akadémia · Normafa</small>
      </span>
    </Link>
  );
}

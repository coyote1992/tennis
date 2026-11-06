// A few line icons, drawn to match the site's hairlines (1.6 px stroke, round caps).
type P = { className?: string };
const base = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export const IconPhone = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M5 4h3.2l1.6 4-2 1.3a10.5 10.5 0 0 0 6.9 6.9l1.3-2 4 1.6V19a1.6 1.6 0 0 1-1.7 1.6A15.6 15.6 0 0 1 3.4 5.7 1.6 1.6 0 0 1 5 4Z" />
  </svg>
);

export const IconArrow = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const IconPin = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z" />
    <circle cx="12" cy="10" r="2.3" />
  </svg>
);

export const IconMail = ({ className }: P) => (
  <svg {...base} className={className}>
    <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);

export const IconClock = ({ className }: P) => (
  <svg {...base} className={className}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </svg>
);

export const IconCalendar = ({ className }: P) => (
  <svg {...base} className={className}>
    <rect x="3.5" y="5" width="17" height="15" rx="2" />
    <path d="M3.5 10h17M8 3v4M16 3v4" />
  </svg>
);

export const IconInstagram = ({ className }: P) => (
  <svg {...base} className={className}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <path d="M17.2 6.8h.01" />
  </svg>
);

export const IconTiktok = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M14 4v10.5a3.5 3.5 0 1 1-3.5-3.5M14 4c.4 2.6 2.2 4.4 5 4.6" />
  </svg>
);

export const IconFacebook = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M14.5 8H17V4.5h-2.5A3.5 3.5 0 0 0 11 8v2.5H8.5V14H11v6.5h3.5V14H17l.5-3.5h-3V8.6c0-.3.2-.6.5-.6Z" />
  </svg>
);

export const IconCheck = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M5 12.5 9.2 16.7 19 7" />
  </svg>
);

export const IconApple = ({ className }: P) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M16.4 12.6c0-2.4 2-3.6 2.1-3.7-1.1-1.7-2.9-1.9-3.5-1.9-1.5-.2-2.9.9-3.7.9-.8 0-1.9-.9-3.2-.8-1.6 0-3.1 1-4 2.4-1.7 3-.4 7.4 1.2 9.8.8 1.2 1.8 2.5 3 2.4 1.2 0 1.7-.8 3.1-.8s1.9.8 3.2.8c1.3 0 2.1-1.2 2.9-2.4.9-1.4 1.3-2.7 1.3-2.8 0 0-2.4-1-2.4-3.9ZM14 5.4c.7-.8 1.1-1.9 1-3-1 0-2.1.7-2.8 1.5-.6.7-1.2 1.8-1 2.9 1.1.1 2.1-.6 2.8-1.4Z" />
  </svg>
);

export const IconPlay = ({ className }: P) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M6 3.6c0-.8.9-1.3 1.6-.9l12.2 7.6c.7.4.7 1.4 0 1.8L7.6 21.3c-.7.4-1.6-.1-1.6-.9V3.6Z" />
  </svg>
);

export const IconDownload = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M12 4v11M7 10.5l5 5 5-5M5 19.5h14" />
  </svg>
);

export const IconTrophy = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M8 4h8v5a4 4 0 0 1-8 0V4ZM8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4M12 13v4M8.5 20h7M10 17h4v3h-4z" />
  </svg>
);

export const IconUsers = ({ className }: P) => (
  <svg {...base} className={className}>
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3.5 19c.6-3.2 2.8-5 5.5-5s4.9 1.8 5.5 5M15.5 5.2a3 3 0 0 1 0 5.6M17.5 14.4c1.6.7 2.6 2.3 3 4.6" />
  </svg>
);

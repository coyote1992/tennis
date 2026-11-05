// The 2026/27 children's course: 4-week blocks from 31 Aug 2026 to 18 Jun 2027, with a two-week
// winter break (omszkparktenisz.hu/tanfolyam). Prices are per 4-week block and do not change in winter.

export type Turn = { start: string; end: string; label: string; brk?: boolean };

export const TURNS: Turn[] = [
  { start: "2026-08-31", end: "2026-09-27", label: "aug. 31. – szept. 27." },
  { start: "2026-09-28", end: "2026-10-25", label: "szept. 28. – okt. 25." },
  { start: "2026-10-26", end: "2026-11-22", label: "okt. 26. – nov. 22." },
  { start: "2026-11-23", end: "2026-12-20", label: "nov. 23. – dec. 20." },
  { start: "2026-12-21", end: "2027-01-03", label: "dec. 21. – jan. 3.", brk: true },
  { start: "2027-01-04", end: "2027-01-31", label: "jan. 4. – jan. 31." },
  { start: "2027-02-01", end: "2027-02-28", label: "febr. 1. – febr. 28." },
  { start: "2027-03-01", end: "2027-03-28", label: "márc. 1. – márc. 28." },
  { start: "2027-03-29", end: "2027-04-25", label: "márc. 29. – ápr. 25." },
  { start: "2027-04-26", end: "2027-05-23", label: "ápr. 26. – máj. 23." },
  { start: "2027-05-24", end: "2027-06-18", label: "máj. 24. – jún. 18." },
];

export const COURSE_PRICES = [
  { name: "Play & Stay", note: "Puha labda: piros, narancs, zöld", per: ["24 000 Ft", "42 000 Ft", "60 000 Ft"] },
  { name: "Kemény labda", note: "Nagy pálya, sárga felnőtt labda", per: ["32 000 Ft", "55 000 Ft", "75 000 Ft"] },
];

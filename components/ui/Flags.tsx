import { useId } from "react";
import type { Lang } from "@/lib/translations";

type FlagProps = { className?: string };

function TurkeyFlag({ className }: FlagProps) {
  // 3:2 oran; ay-yıldız resmi orantılara yakın
  const cx = 17.2;
  const cy = 10;
  const r = 2.5;
  const star = Array.from({ length: 10 }, (_, i) => {
    const angle = Math.PI + (i * Math.PI) / 5; // bir köşe direğe bakar
    const rad = i % 2 === 0 ? r : r * 0.382;
    return `${(cx + rad * Math.cos(angle)).toFixed(3)},${(cy + rad * Math.sin(angle)).toFixed(3)}`;
  }).join(" ");

  return (
    <svg viewBox="0 0 30 20" className={className} aria-hidden="true">
      <rect width="30" height="20" fill="#E30A17" />
      <circle cx="10" cy="10" r="5" fill="#fff" />
      <circle cx="11.25" cy="10" r="4" fill="#E30A17" />
      <polygon points={star} fill="#fff" />
    </svg>
  );
}

function UKFlag({ className }: FlagProps) {
  const id = useId().replace(/:/g, "");
  return (
    <svg
      viewBox="0 0 60 30"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
    >
      <clipPath id={`uk-s-${id}`}>
        <path d="M0,0 v30 h60 v-30 z" />
      </clipPath>
      <clipPath id={`uk-t-${id}`}>
        <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
      </clipPath>
      <g clipPath={`url(#uk-s-${id})`}>
        <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
        <path
          d="M0,0 L60,30 M60,0 L0,30"
          clipPath={`url(#uk-t-${id})`}
          stroke="#C8102E"
          strokeWidth="4"
        />
        <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  );
}

function RussiaFlag({ className }: FlagProps) {
  return (
    <svg viewBox="0 0 9 6" className={className} aria-hidden="true">
      <rect width="9" height="2" y="0" fill="#fff" />
      <rect width="9" height="2" y="2" fill="#0039A6" />
      <rect width="9" height="2" y="4" fill="#D52B1E" />
    </svg>
  );
}

function GermanyFlag({ className }: FlagProps) {
  return (
    <svg viewBox="0 0 5 3" preserveAspectRatio="none" className={className} aria-hidden="true">
      <rect width="5" height="1" y="0" fill="#000" />
      <rect width="5" height="1" y="1" fill="#DD0000" />
      <rect width="5" height="1" y="2" fill="#FFCE00" />
    </svg>
  );
}

export function Flag({ lang, className }: { lang: Lang; className?: string }) {
  if (lang === "tr") return <TurkeyFlag className={className} />;
  if (lang === "en") return <UKFlag className={className} />;
  if (lang === "ru") return <RussiaFlag className={className} />;
  return <GermanyFlag className={className} />;
}

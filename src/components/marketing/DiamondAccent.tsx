/** Mint diamond that precedes section eyebrow labels in the Thraivio system. */
export function DiamondAccent() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true" className="mr-2 -mt-0.5 inline-block shrink-0">
      <rect x="5" y="0.5" width="6.36" height="6.36" rx="0.8" transform="rotate(45 5 0.5)" fill="#1DD7A5" />
    </svg>
  );
}

export function Eyebrow({ children, onDark = false, center = false }: { children: React.ReactNode; onDark?: boolean; center?: boolean }) {
  return (
    <p
      className={`mb-3 flex items-center text-[11px] font-bold uppercase tracking-widest ${center ? "justify-center" : ""} ${
        onDark ? "text-[#A8F0DF]" : "text-primary"
      }`}
    >
      <DiamondAccent />
      {children}
    </p>
  );
}

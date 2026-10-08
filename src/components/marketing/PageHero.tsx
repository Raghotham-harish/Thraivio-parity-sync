import type { ReactNode } from "react";
import { Eyebrow } from "./DiamondAccent";

/** Compact navy page header shared by the simpler marketing/legal pages. */
export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: ReactNode; children?: ReactNode }) {
  return (
    <section className="bg-gradient-hero">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16">
        <Eyebrow onDark>{eyebrow}</Eyebrow>
        <h1 className="max-w-3xl font-heading text-[34px] font-medium leading-tight text-white sm:text-[44px]">{title}</h1>
        {children && <div className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[#C8D9F0] font-body">{children}</div>}
      </div>
    </section>
  );
}

import type { ReactNode } from "react";
import { PageHero } from "@/components/marketing/PageHero";

export interface LegalSection {
  id: string;
  title: string;
  body: ReactNode;
}

/** Shared layout for Privacy and Terms: hero, sticky contents list, sections. */
export function LegalPage({ eyebrow, title, updated, intro, sections }: {
  eyebrow: string;
  title: string;
  updated: string;
  intro: ReactNode;
  sections: LegalSection[];
}) {
  return (
    <div>
      <PageHero eyebrow={eyebrow} title={title}>
        Last updated {updated}
      </PageHero>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[220px_1fr] lg:py-16">
        <nav aria-label="Contents" className="hidden lg:block">
          <div className="sticky top-24">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Contents</p>
            <ol className="space-y-2 text-[13px]">
              {sections.map((s, i) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="text-muted-foreground hover:text-primary">
                    {i + 1}. {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </nav>

        <article className="max-w-3xl rounded-2xl border border-border bg-card p-6 sm:p-10">
          <div className="text-[15px] leading-relaxed text-muted-foreground font-body">{intro}</div>
          {sections.map((s, i) => (
            <section key={s.id} id={s.id} className="scroll-mt-24 border-t border-border pt-8 mt-8 first-of-type:mt-8">
              <h2 className="mb-3 font-heading text-xl font-medium text-foreground">
                {i + 1}. {s.title}
              </h2>
              <div className="space-y-3 text-[15px] leading-relaxed text-muted-foreground font-body [&_li]:ml-5 [&_li]:list-disc [&_ul]:space-y-1.5 [&_strong]:text-foreground">
                {s.body}
              </div>
            </section>
          ))}
        </article>
      </div>
    </div>
  );
}

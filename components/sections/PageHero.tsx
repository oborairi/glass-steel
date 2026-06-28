import { FadeIn } from "@/components/ui/animations";

interface PageHeroProps {
  tag: string;
  title: string;
  subtitle?: string;
}

export function PageHero({ tag, title, subtitle }: PageHeroProps) {
  return (
    <section className="pt-20 pb-16 bg-bg-base border-b border-line">
      <div className="max-w-8xl mx-auto px-6 lg:px-10">
        <FadeIn>
          <span className="section-tag">{tag}</span>
        </FadeIn>
        <FadeIn delay={0.08}>
          <h1
            className="display-heading mt-4 max-w-3xl"
            style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)" }}
          >
            {title}
          </h1>
        </FadeIn>
        {subtitle && (
          <FadeIn delay={0.14}>
            <p className="body-text text-lg mt-6 max-w-xl leading-relaxed">
              {subtitle}
            </p>
          </FadeIn>
        )}
      </div>
    </section>
  );
}

"use client";

import { FadeIn } from "@/components/ui/animations";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import { useLanguage } from "@/components/ui/LanguageProvider";

export function VideoSection() {
  const { t } = useLanguage();

  return (
    <section className="py-section bg-bg-base border-t border-line">
      <div className="max-w-8xl mx-auto px-6 lg:px-10">
        <FadeIn>
          <div className="max-w-4xl mx-auto">
            <VideoPlayer src="/intro.mp4" label={t.about.watchVideo} />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

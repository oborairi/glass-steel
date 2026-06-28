"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface VideoPlayerProps {
  src: string;
  label?: string;
}

export function VideoPlayer({ src, label }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    setPlaying(true);
    video.play().catch(() => {
      // If playback fails, reset to poster
      setPlaying(false);
    });
  };

  const handleEnded = () => {
    setPlaying(false);
    if (videoRef.current) videoRef.current.currentTime = 0;
  };

  return (
    <div
      className="relative w-full overflow-hidden rounded-lg border border-line bg-black"
      style={{ aspectRatio: "16 / 12" }}
    >
      <video
        ref={videoRef}
        src={src}
        playsInline
        controls={playing}
        onEnded={handleEnded}
        className="w-full h-full object-cover"
      />

      {/* Poster overlay with play button (hidden once playing) */}
      <AnimatePresence>
        {!playing && (
          <motion.button
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handlePlay}
            className="absolute inset-0 flex flex-col items-center justify-center gap-5 cursor-pointer group"
            style={{ background: "rgba(0,0,0,0.55)" }}
            aria-label="Videoyu oynat"
          >
            {/* Logo */}
            <Image
              src="/logo-mark.png"
              alt="Glass Steel"
              width={64}
              height={64}
              className="object-contain w-16 h-16 opacity-90"
            />

            {/* Play button */}
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
              style={{ background: "var(--accent)" }}
            >
              <Play size={24} className="text-white ml-1" fill="white" />
            </div>

            {label && (
              <span className="text-xs font-mono tracking-[0.15em] uppercase text-white/70">
                {label}
              </span>
            )}
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

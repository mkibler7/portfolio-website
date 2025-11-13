"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface ProjectPreviewProps {
  images: string[];
  position: { x: number; y: number };
  visible: boolean;
}

export default function ProjectPreview({
  images,
  position,
  visible,
}: ProjectPreviewProps) {
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [naturalSize, setNaturalSize] = useState({ w: 0, h: 0 });

  // Reset to first image when becoming visible
  useEffect(() => {
    if (visible) {
      setIndex(0);
      setLoaded(false);
    }
  }, [visible]);

  // Instantly cycle through images — no fade
  useEffect(() => {
    if (!visible || images.length <= 1) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
      setLoaded(false);
    }, 1800);

    return () => clearInterval(interval);
  }, [visible, images]);

  if (!visible || images.length === 0) return null;

  const { w, h } = naturalSize;
  const scale = 1.25; // enlarge slightly for readability
  const width = w ? w * scale : 500;
  const height = h ? h * scale : 300;

  return (
    <div
      className={`fixed pointer-events-none z-[9999] ${
        visible ? "opacity-100" : "opacity-0"
      } transition-opacity duration-150 ease-out`}
      style={{
        top: position.y - 100,
        left: position.x + 60,
        transform: "translate(-50%, -50%)",
      }}
    >
      <Image
        key={index}
        src={images[index]}
        alt="Project preview"
        width={width}
        height={height}
        className="max-w-[800px] max-h-[500px] object-contain select-none"
        unoptimized
        onLoad={(e) => {
          const img = e.currentTarget as HTMLImageElement;
          setNaturalSize({ w: img.naturalWidth, h: img.naturalHeight });
          setLoaded(true);
        }}
      />
    </div>
  );
}

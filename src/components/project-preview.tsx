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
  const [fade, setFade] = useState(true);

  const MAX_WIDTH = 280;
  const MAX_HEIGHT = 180;

  const [imgSize, setImgSize] = useState({
    w: MAX_WIDTH,
    h: MAX_HEIGHT,
  });

  useEffect(() => {
    if (!visible) return;
    if (!images || images.length === 0) return;
    if (!images[index]) return;

    const img = new window.Image();
    img.src = images[index];

    img.onload = () => {
      const { naturalWidth, naturalHeight } = img;
      const ratio = Math.min(
        MAX_WIDTH / naturalWidth,
        MAX_HEIGHT / naturalHeight
      );

      setImgSize({
        w: naturalWidth * ratio,
        h: naturalHeight * ratio,
      });
    };
  }, [visible, images, index]);

  useEffect(() => {
    if (!images) return;
    images.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, [images]);

  useEffect(() => {
    if (!visible) return;
    setIndex(0);
    setFade(true);
  }, [visible]);

  useEffect(() => {
    if (!visible) return;
    if (!images || images.length <= 1) return;

    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 120);
    }, 1800);

    return () => clearInterval(interval);
  }, [visible, images]);

  if (!visible || !images || images.length === 0) {
    return null;
  }

  return (
    <div
      className={`
        fixed pointer-events-none z-[9999]
        transition-opacity duration-150
        ${visible ? "opacity-100" : "opacity-0"}
      `}
      style={{
        top: position.y - 40,
        left: position.x + 40,
      }}
    >
      <div
        style={{
          width: imgSize.w,
          height: imgSize.h,
          position: "relative",
        }}
      >
        <Image
          key={index}
          src={images[index]}
          alt="project preview"
          unoptimized
          width={imgSize.w}
          height={imgSize.h}
          className={`
            rounded-xl shadow-xl
            transition-all duration-300 ease-out
            ${fade ? "opacity-100 scale-100" : "opacity-0 scale-95"}
            object-contain
          `}
          style={{
            border: "2px solid rgba(255,255,255,0.4)",
          }}
        />
      </div>
    </div>
  );
}

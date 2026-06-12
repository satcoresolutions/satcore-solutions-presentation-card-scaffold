"use client";

import Image from "next/image";

interface HeroAvatarProps {
  src: string;
  alt: string;
}

export default function HeroAvatar({
  src,
  alt,
}: HeroAvatarProps) {
  return (
    <div
      className="
        relative

        mb-8

        flex
        items-center
        justify-center
      "
    >
      {/* Glow exterior */}
      <div
        className="
          absolute

          h-44
          w-44

          rounded-full

          opacity-20

          blur-3xl
        "
        style={{
          background:
            "var(--color-accent)",
        }}
      />

      {/* Ring exterior */}
      <div
        className="
          absolute

          h-38
          w-38

          rounded-full

          border
        "
        style={{
          borderColor:
            "color-mix(in srgb, var(--color-accent) 25%, transparent)",
        }}
      />

      {/* Avatar */}
      <div
        className="
          relative

          overflow-hidden

          rounded-full

          border-2

          transition-all
          duration-300

          hover:scale-105
        "
        style={{
          borderColor:
            "color-mix(in srgb, var(--color-accent) 20%, transparent)",

          boxShadow: `
            0 10px 40px
            color-mix(
              in srgb,
              var(--color-accent) 15%,
              transparent
            )
          `,
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={140}
          height={140}
          priority
          className="
            h-36
            w-36

            object-cover
          "
        />
      </div>

      {/* Indicador online opcional */}
      <div
        className="
          absolute

          bottom-2
          right-2

          h-4
          w-4

          rounded-full

          border-2
        "
        style={{
          background:
            "var(--color-success)",

          borderColor:
            "var(--color-surface)",
        }}
      />
    </div>
  );
}
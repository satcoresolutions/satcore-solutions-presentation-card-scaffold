"use client";

interface HeroContactChipProps {
  label?: string;
}

export default function HeroContactChip({
  label = "NFC · QR · vCard",
}: HeroContactChipProps) {
  return (
    <div
      className="
        mt-8

        inline-flex
        items-center
        justify-center

        gap-3

        px-5
        py-3

        transition-all
        duration-200
      "
      style={{
        borderRadius:
          "var(--radius-badge)",

        background:
          "var(--color-surface-secondary)",

        border:
          "1px solid color-mix(in srgb, var(--color-accent) 15%, transparent)",

        boxShadow: `
          0 4px 16px
          color-mix(
            in srgb,
            var(--color-accent) 6%,
            transparent
          )
        `,
      }}
    >
      <span
        className="
          h-2.5
          w-2.5

          shrink-0

          rounded-full
        "
        style={{
          background:
            "var(--color-accent)",

          boxShadow: `
            0 0 12px
            color-mix(
              in srgb,
              var(--color-accent) 50%,
              transparent
            )
          `,
        }}
      />

      <span
        className="
          text-xs

          font-semibold

          uppercase

          tracking-[0.15em]
        "
        style={{
          color:
            "var(--color-text-secondary)",
        }}
      >
        {label}
      </span>
    </div>
  );
}
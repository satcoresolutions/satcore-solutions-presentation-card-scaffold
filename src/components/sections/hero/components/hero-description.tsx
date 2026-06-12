"use client";

interface HeroDescriptionProps {
  description: string;
}

export default function HeroDescription({
  description,
}: HeroDescriptionProps) {
  return (
    <div
      className="
        mt-6

        w-full
        max-w-sm

        px-5
        py-4
      "
      style={{
        background:
          "var(--color-surface-secondary)",

        border:
          "1px solid color-mix(in srgb, var(--color-accent) 10%, transparent)",

        borderRadius:
          "var(--radius-card)",
      }}
    >
      <p
        className="
          text-sm
          leading-7
        "
        style={{
          color:
            "var(--color-text-secondary)",
        }}
      >
        {description}
      </p>
    </div>
  );
}
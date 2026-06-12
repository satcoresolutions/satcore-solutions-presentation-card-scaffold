export const cardVariants = {
  default: {
    background:
      "var(--color-surface)",

    border:
      "1px solid color-mix(in srgb, var(--color-text-primary) 4%, transparent)",
  },

  floating: {
    background:
      "var(--color-surface)",

    border:
      "1px solid color-mix(in srgb, var(--color-text-primary) 8%, transparent)",

    boxShadow: `
      0 10px 30px
      color-mix(
        in srgb,
        var(--color-background) 25%,
        transparent
      )
    `,
  },

  glass: {
    background:
      "color-mix(in srgb, var(--color-surface) 75%, transparent)",

    border:
      "1px solid color-mix(in srgb, var(--color-accent) 15%, transparent)",

    backdropFilter:
      "blur(20px)",

    WebkitBackdropFilter:
      "blur(20px)",

    boxShadow: `
    0 20px 60px
    color-mix(
      in srgb,
      var(--color-background) 35%,
      transparent
    )
  `,
  },
} as const;
export const buttonVariants = {
  primary: {
    background: `
      linear-gradient(
        135deg,
        var(--color-primary),
        var(--color-accent)
      )
    `,

    color: "#ffffff",

    boxShadow:
      "0 10px 30px rgba(34,211,238,0.18)",
  },

  secondary: {
    background:
      "color-mix(in srgb, var(--color-surface) 80%, transparent)",

    color:
      "var(--color-text-primary)",

    border:
      "1px solid color-mix(in srgb, var(--color-text-primary) 8%, transparent)",

    backdropFilter:
      "blur(16px)",

    WebkitBackdropFilter:
      "blur(16px)",
  },
} as const;
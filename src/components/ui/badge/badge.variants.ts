import type { CSSProperties } from "react";

export const badgeVariants = {
  accent: {
    background:
      "rgba(34,211,238,0.08)",

    border:
      "1px solid rgba(34,211,238,0.18)",

    color:
      "var(--color-accent)",

    backdropFilter:
      "blur(16px)",

    boxShadow:
      "0 0 20px rgba(34,211,238,0.08)",
  },
} satisfies Record<
  string,
  CSSProperties
>;
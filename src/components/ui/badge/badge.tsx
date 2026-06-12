import type {
  BadgeProps,
} from "./badge.types";

import {
  badgeVariants,
} from "./badge.variants";

export default function Badge({
  children,

  variant = "accent",

  className = "",

  style,

  ...props
}: BadgeProps) {
  const variantStyle =
    badgeVariants[variant];

  return (
    <span
      {...props}
      className={`
        inline-flex
        items-center
        gap-2

        w-fit

        px-4
        py-2

        text-[11px]
        font-semibold

        uppercase

        tracking-[0.22em]

        transition-all

        ${className}
      `}
      style={{
        borderRadius:
          "999px",

        ...variantStyle,

        ...style,
      }}
    >
      <span
        className="
          h-2
          w-2
          rounded-full
        "
        style={{
          background:
            "var(--color-accent)",

          boxShadow:
            "0 0 10px var(--color-accent)",
        }}
      />

      {children}
    </span>
  );
}
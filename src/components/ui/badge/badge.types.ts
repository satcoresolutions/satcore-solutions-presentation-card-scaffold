import type {
  CSSProperties,
  HTMLAttributes,
  ReactNode,
} from "react";

export type BadgeVariant =
  | "accent";

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;

  variant?: BadgeVariant;

  className?: string;

  style?: CSSProperties;
}
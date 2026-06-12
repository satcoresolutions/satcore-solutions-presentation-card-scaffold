import type {
  HTMLAttributes,
} from "react";

export type CardVariant =
  | "default"
  | "floating"
  | "glass"

export interface CardProps
  extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
}
import type {
  ReactNode,
} from "react";

export type ButtonVariant =
  | "primary"
  | "secondary"

export interface ButtonProps {
  children: ReactNode;

  href?: string;

  variant?: ButtonVariant;

  className?: string;

  disabled?: boolean;

  onClick?: () => void;
}
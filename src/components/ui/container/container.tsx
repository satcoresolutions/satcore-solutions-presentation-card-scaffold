import type {
  ContainerProps,
} from "./container.types";

export default function Container({
  children,
  className = "",
  fluid = false,
}: ContainerProps) {
  return (
    <div
      className={`
        mx-auto
        w-full
        px-4
        ${fluid ? "" : "max-w-7xl"}
        ${className}
      `}
      style={{
        borderRadius:
          "var(--radius-container)",
      }}
    >
      {children}
    </div>
  );
}
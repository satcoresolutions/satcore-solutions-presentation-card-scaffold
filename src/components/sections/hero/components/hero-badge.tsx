import Badge
  from "@/components/ui/badge";

interface HeroBadgeProps {
  label: string;
}

export default function HeroBadge({
  label,
}: HeroBadgeProps) {
  return (
    <Badge
      variant="accent"
    >
      {label}
    </Badge>
  );
}
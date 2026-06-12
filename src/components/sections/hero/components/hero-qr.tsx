"use client";

import Button from "@/components/ui/button";

interface HeroQRProps {
  label: string;
}

export default function HeroQR({
  label,
}: HeroQRProps) {
  const openQR = () => {
    // modal
  };

  return (
    <Button
      variant="secondary"
      onClick={openQR}
    >
      {label}
    </Button>
  );
}
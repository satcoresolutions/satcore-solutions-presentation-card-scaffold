"use client";

import Card from "@/components/ui/card";

interface HeroQRModalProps {
  open: boolean;
  onClose: () => void;
  qrImage: string;
}

export default function HeroQRModal({
  open,
  onClose,
  qrImage,
}: HeroQRModalProps) {
  if (!open) {
    return null;
  }

  return (
    <div
      className="
        fixed
        inset-0
        z-50

        flex
        items-center
        justify-center

        bg-black/60
      "
      onClick={onClose}
    >
      <Card
        variant="glass"
        className="p-6"
      >
        <img
          src={qrImage}
          alt="QR"
          className="
            h-64
            w-64
          "
        />
      </Card>
    </div>
  );
}
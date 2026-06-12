"use client";

import Button from "@/components/ui/button";

interface HeroActionsProps {
  vcardUrl: string;

  onOpenQR: () => void;

  labels: {
    saveContact: string;
    shareCard: string;
    viewQR: string;
  };
}

export default function HeroActions({
  vcardUrl,
  onOpenQR,
  labels,
}: HeroActionsProps) {
  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: document.title,
        url: window.location.href,
      });

      return;
    }

    await navigator.clipboard.writeText(
      window.location.href,
    );
  };

  return (
    <div
      className="
        mt-8
        flex
        w-full
        flex-col
        gap-3
      "
    >
      <Button
        href={vcardUrl}
        variant="primary"
      >
        {labels.saveContact}
      </Button>

      <Button
        variant="secondary"
        onClick={handleShare}
      >
        {labels.shareCard}
      </Button>

      <Button
        variant="secondary"
        onClick={onOpenQR}
      >
        {labels.viewQR}
      </Button>
    </div>
  );
}
"use client";

import { useState } from "react";

import Card from "@/components/ui/card";

import HeroAvatar from "./hero-avatar";
import HeroBadge from "./hero-badge";
import HeroDescription from "./hero-description";
import HeroSocials from "./hero-socials";
import HeroActions from "./hero-actions";
import HeroContactChip from "./hero-contact-chip";
import HeroQRModal from "./hero-qr-modal";

import { heroContent } from "../content/hero.content";

export default function HeroContent() {
  const [
    isQRModalOpen,
    setIsQRModalOpen,
  ] = useState(false);

  return (
    <>
      <Card
        variant="glass"
        className="
          mx-auto
          w-full
          max-w-md
          p-8
          md:p-10
        "
      >
        <div
          className="
            flex
            flex-col
            items-center
            text-center
          "
        >
          <HeroAvatar
            src={heroContent.avatar}
            alt={heroContent.name}
          />

          <HeroBadge
            label={heroContent.badge}
          />

          <h1
            className="
              mt-5
              text-4xl
              font-bold
              tracking-tight
            "
            style={{
              color:
                "var(--color-text-primary)",
            }}
          >
            {heroContent.name}
          </h1>

          <p
            className="
              mt-3
              text-sm
              font-semibold
              uppercase
              tracking-[0.25em]
            "
            style={{
              color:
                "var(--color-accent)",
            }}
          >
            {heroContent.profession}
          </p>

          <HeroDescription
            description={
              heroContent.description
            }
          />

          <HeroSocials />

          <HeroActions
            vcardUrl={
              heroContent.contact
                .vcardUrl
            }
            labels={
              heroContent.actions
            }
            onOpenQR={() =>
              setIsQRModalOpen(true)
            }
          />

          <HeroContactChip
            label={
              heroContent.contact
                .chip
            }
          />
        </div>
      </Card>

      <HeroQRModal
        open={isQRModalOpen}
        onClose={() =>
          setIsQRModalOpen(false)
        }
        qrImage={
          heroContent.contact
            .qrImage
        }
      />
    </>
  );
}
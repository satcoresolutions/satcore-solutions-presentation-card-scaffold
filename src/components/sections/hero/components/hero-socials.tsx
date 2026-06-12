"use client";

import Link from "next/link";

import Icon from "@/components/ui/icon";

import { socialsConfig } from "@/config/socials.config";

import { Events } from "@/analytics/events";

const socials = Object.entries(
  socialsConfig,
).map(([key, value]) => ({
  key,
  href: value.href,
  icon: value.icon,
}));

export default function HeroSocials() {
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
      {socials.map((social) => (
        <Link
          key={social.key}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            Events.socialClick(
              social.key,
            )
          }
          className="
            group

            flex
            items-center
            justify-between

            px-5
            py-4

            transition-all
            duration-200

            hover:-translate-y-0.5
          "
          style={{
            borderRadius:
              "var(--radius-card)",

            background:
              "var(--color-surface-secondary)",

            border:
              "1px solid color-mix(in srgb, var(--color-accent) 10%, transparent)",
          }}
        >
          <div
            className="
              flex
              items-center
              gap-4
            "
          >
            <Icon
              src={social.icon}
              alt={social.key}
              size="md"
              variant="social"
            />

            <span
              className="
                font-medium
                capitalize
              "
              style={{
                color:
                  "var(--color-text-primary)",
              }}
            >
              {social.key}
            </span>
          </div>

          <span
            className="
              text-sm

              transition-transform

              group-hover:translate-x-1
            "
            style={{
              color:
                "var(--color-text-muted)",
            }}
          >
            →
          </span>
        </Link>
      ))}
    </div>
  );
}
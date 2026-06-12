"use client";

import Icon from "@/components/ui/icon";

import { companyConfig } from "@/config/company.config";
import { assetsConfig } from "@/config/assets.config";
import { companyContent } from "@/content/company.content";

export default function FooterBrand() {

  return (
    <div className="space-y-4">
      {/* LOGO */}
      <div className="flex items-center gap-3">
        <Icon
          src={assetsConfig.logoSecondary}
          alt={companyConfig.name}
          size="lg"
          variant="brand"
        />

        <h2 className="text-xl font-bold">
          {companyConfig.name}
        </h2>
      </div>

      {/* DESCRIPTION (i18n) */}
      <p className="text-text-secondary">
        {companyContent.description}
      </p>
    </div>
  );
}
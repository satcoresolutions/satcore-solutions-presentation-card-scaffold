import type { Metadata } from "next";

import { siteConfig }  from "@/config/site.config";
import { assetsConfig } from "@/config/assets.config";
import { siteContent }  from "@/content/site.content";

const { description } = siteContent["es"];

export const openGraphMetadata: Metadata["openGraph"] = {
  type:        "website",
  locale:      siteConfig.locale,
  url:         siteConfig.url,
  siteName:    siteConfig.name,
  title:       siteConfig.name,
  description,
  images: [
    {
      url:    assetsConfig.ogImage,
      width:  1200,
      height: 630,
      alt:    siteConfig.name,
    },
  ],
};

import "@/app/globals.css";

import type { Viewport } from "next";

import GoogleAnalytics    from "@/analytics/google-analytics";

import { baseMetadata }                       from "@/seo/metadata";
import { openGraphMetadata } from "@/seo/open-graph";
import { getSchemaScript }                    from "@/seo/schema";

export const metadata = {
  ...baseMetadata,
  openGraph: openGraphMetadata,
};

export const viewport: Viewport = {
  width:        "device-width",
  initialScale: 1,
  themeColor:   "#7c3aed",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      data-theme="light"
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: getSchemaScript(),
          }}
        />
      </head>

      <body className="antialiased min-h-screen">
        <GoogleAnalytics />
         {children}
      </body>
    </html>
  );
}
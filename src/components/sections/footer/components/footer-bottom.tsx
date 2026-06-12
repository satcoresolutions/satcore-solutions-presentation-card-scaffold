"use client";

import { companyConfig } from "@/config/company.config";
import { footerContent } from "../content/footer.content";

export default function FooterBottom() {


  return (
    <div
      className="
        mt-16
        border-t
        border-surface-secondary
        pt-8

        text-center
        text-sm
        text-text-muted
      "
    >
      © {new Date().getFullYear()}{" "}
      {companyConfig.organization}.{" "}
      {footerContent.copyright}
    </div>
  );
}
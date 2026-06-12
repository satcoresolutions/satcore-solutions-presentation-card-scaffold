"use client";

import Container from "@/components/ui/container";

import FooterBrand from "./components/footer-brand";
import FooterContact from "./components/footer-contact";
import FooterBottom from "./components/footer-bottom";

export default function Footer() {
  return (
    <footer className="border-t border-surface-secondary py-20">
      <Container>
        <div
          className="
      mx-auto
      max-w-5xl
      grid
      gap-12
      md:grid-cols-2
      lg:grid-cols-3
    "
        >
          <div className="lg:col-span-2">
            <FooterBrand />
          </div>

          <div>
            <FooterContact />
          </div>
        </div>

        <FooterBottom />
      </Container>
    </footer>
  );
}
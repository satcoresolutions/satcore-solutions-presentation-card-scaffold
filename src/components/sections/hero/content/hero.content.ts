import type { HeroContent } from "../types/hero.types";

export const heroContent = {
  badge: "Creador y editor de música",

  name: "Carlos López",

  profession: "Ingeniero de sonido",

  description:
    "Conecta conmigo a través de mis canales oficiales y guarda mi contacto fácilmente.",

  avatar: "/images/hero/avatar.png",

  contact: {
    vcardUrl: "/contact.vcf",

    qrImage: "/images/hero/qr.png",

    chip: "NFC · QR · vCard",
  },

  actions: {
    saveContact: "Guardar Contacto",

    shareCard: "Compartir Tarjeta",

    viewQR: "Ver Código QR",
  },
} as const satisfies HeroContent;
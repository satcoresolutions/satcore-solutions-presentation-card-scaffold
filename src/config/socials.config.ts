export type SocialKey =
  | "whatsapp"
  | "instagram"
  | "facebook"
  | "youtube"

export interface SocialItem {
  href: string;
  icon: string;
}

export type SocialConfig = Record<SocialKey, SocialItem>;

export const socialsConfig: SocialConfig = {

   whatsapp: {
    href: "https://wa.me/${companyConfig.whatsapp",
    icon: "/images/socials/whatsapp.png",
  },
   facebook: {
    href: "https://facebook.com/satcoresolutions",
    icon: "/images/socials/facebook.png",
  },
   instagram: {
    href: "https://instagram.com/satcore_solutions",
    icon: "/images/socials/instagram.png",
  },
   youtube: {
    href: "https://youtube.com/@SatCore_Solutions",
    icon: "/images/socials/youtube.png",
  },
};
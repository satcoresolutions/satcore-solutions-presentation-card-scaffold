export interface HeroContent {
  badge: string;

  name: string;

  profession: string;

  description: string;

  avatar: string;

  contact: {
    vcardUrl: string;

    qrImage: string;

    chip: string;
  };

  actions: {
    saveContact: string;

    shareCard: string;

    viewQR: string;
  };
}
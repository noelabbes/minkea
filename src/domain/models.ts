export type MinkaCategory = 'Ambiental' | 'Social' | 'Salud';

export interface User {
  id: string;
  name: string;
  avatarUrl: string;
}

export interface Minka {
  id: string;
  title: string;
  description: string;
  category: MinkaCategory;
  date: string;
  location: string;
  rewardPoints: number;
  image: string;
  gallery?: string[];
  organizer: string;
  asistentes: User[];
  impactDescription: string;
  voucherImage?: string;
  meetingPoint: {
    lat: number;
    lng: number;
    address: string;
    reference?: string;
  };
}

export interface Reward {
  id: string;
  title: string;
  pointsRequired: number;
  description: string;
  image: string;
}

import type { StaticImageData } from 'next/image';

export interface Work {
  id: number;
  title: string;
  category: string;
  image: StaticImageData;
  slug: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  github: string | null;
  status: string;
  date: string;
  challenges: string;
  screenshots: StaticImageData[];
}
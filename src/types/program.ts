export interface Program {
  id?: string;

  title: string;

  description?: string;

  image?: string;

  duration: string;

  students: number;

  price: number;

  level: string;

  rating?: number;

  reviews?: number;

  seatsLeft?: number;

  featured?: boolean;

  status?: "published" | "draft";
}
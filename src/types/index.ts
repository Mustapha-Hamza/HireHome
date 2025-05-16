export interface HomeType {
  id: string;
  name: string;
  description: string;
  startingPrice: number;
  locations: Location[];
}

export interface Location {
  id: string;
  name: string;
  country: string;
  shortDescription: string;
  description: string;
  pricePerNight: number;
  maxGuests: number;
  bedrooms: number;
  bathrooms: number;
  size: number;
  rating?: number;
  reviews?: number;
  images: string[];
}

export type Movie = {
  id: number;
  movieName: string;
  duration: number;
  releaseDate: Date;
  imageUrl: string;
  genre: string;
};

export type HallAddress = {
  id: number;
  city?: string | null;
  state?: string | null;
  street?: string | null;
  postalCode?: string | null;
  country?: string | null;
  hallId: number;
} | null;

export type Seats = {
  id: number;
  seatNumber: number;
  available: boolean;
  hallId: number;
};

export type Hall = {
  id: number;
  hallName: string;
  capacity: number;
  hallAddress?: HallAddress;
  seats?: Seats[];
};

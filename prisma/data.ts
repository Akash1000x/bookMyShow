export const hallsData = [
  {
    hallName: "Miraj",
    capacity: 100,
    address: {
      city: "Mumbai",
      state: "Maharashtra",
      country: "India",
      postalCode: "400001",
      street: "Mumbai Central",
    },
    movie: {
      movieName: "Deadpool 3",
      duration: 180,
      releaseDate: new Date("2025-07-25"),
    },
  },
  {
    hallName: "INOX",
    capacity: 100,
    address: {
      city: "jaipur",
      state: "rajasthan",
      country: "india",
      postalCode: "302019",
      street: "vivek vihar",
    },
    movie: {
      movieName: "Deadpool 3",
      duration: 180,
      releaseDate: new Date("2025-07-25"),
    },
  },
  {
    hallName: "WTP",
    capacity: 100,
    address: {
      city: "jaipur",
      state: "rajasthan",
      country: "india",
      postalCode: "302021",
      street: "durgapura",
    },
    movie: {
      movieName: "Deadpool 3",
      duration: 180,
      releaseDate: new Date("2025-07-25"),
    },
    seats: Array.from({ length: 100 }, (_, i) => ({ seatNumber: i + 1 })),
  },
  {
    hallName: "rajmandir",
    capacity: 100,
    address: {
      city: "jaipur",
      state: "rajasthan",
      country: "india",
      postalCode: "302008",
      street: "mi road",
    },
    movie: {
      movieName: "Deadpool 3",
      duration: 180,
      releaseDate: new Date("2025-07-25"),
    },
    seats: Array.from({ length: 100 }, (_, i) => ({ seatNumber: i + 1 })),
  },
];

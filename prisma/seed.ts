import db from "../src/db";

async function AddHalls() {
  await db.halls.create({
    data: {
      hallName: "Miraj",
      capacity: 100,
      hallAddress: {
        create: {
          city: "Mumbai",
          state: "Maharashtra",
          country: "India",
          postalCode: "400001",
          street: "Mumbai Central",
        },
      },
      Movies: {
        create: {
          movieName: "Deadpool 3",
          Duration: 180,
          ReleaseDate: new Date("2025-07-25"),
        },
      },
      seats: {
        createMany: {
          data: Array.from({ length: 100 }, (_, i) => ({ seatNumber: i + 1 })),
        },
      },
    },
  });
}

AddHalls()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });

import db from "../src/db";
import { hallsData } from "./data";

async function AddHalls() {
  for (const hallData of hallsData) {
    const hall = await db.halls.create({
      data: {
        hallName: hallData.hallName,
        capacity: hallData.capacity,
      },
    });

    await db.hallAddress.create({
      data: {
        ...hallData.address,
        hallId: hall.id,
      },
    });

    await db.seat.createMany({
      data: Array.from({ length: hallData.capacity }, (_, i) => ({ seatNumber: i + 1, hallId: hall.id })),
    });
  }
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

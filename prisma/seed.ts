import db from "../src/db";
import { hallsData, movies } from "./data";

async function AddHalls() {
  const hallIds = [];
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
    hallIds.push(hall.id);
  }
  const createdMovies = [];

  for (const movie of movies) {
    const createdMovie = await db.movie.create({
      data: {
        movieName: movie.movieName,
        releaseDate: movie.releaseDate,
        duration: movie.duration,
        genre: movie.genre,
        imageUrl: movie.imageUrl,
      },
    });
    createdMovies.push(createdMovie);
  }

  for (let i = 0; i < createdMovies.length; i++) {
    for (const hall of hallIds) {
      const hallMovie = await db.hallMovie.create({
        data: { hallId: hall, movieId: createdMovies[i].id },
      });

      await db.seat.createMany({
        data: Array.from({ length: 100 }, (_, i) => ({
          seatNumber: i + 1,
          hallId: hall,
          hallMovieId: hallMovie.id,
        })),
      });
    }
  }
}

AddHalls()
  .then(async () => {
    console.log("🌱 db is seeded");

    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });

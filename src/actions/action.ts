"use server";
import prisma from "@/db";

export const bookseets = async (
  hallId: number,
  movieId: number,
  userId: string,
  seatId: number[],
  hallMovieId: number,
) => {
  await prisma.$transaction([
    prisma.booking.createMany({
      data: seatId.map((id) => ({ hallId, movieId, userId, seatId: id })),
    }),
    prisma.hallMovie.update({
      where: {
        id: hallMovieId,
      },
      data: {
        Seat: {
          updateMany: {
            where: {
              id: {
                in: seatId,
              },
            },
            data: {
              available: false,
            },
          },
        },
      },
    }),
  ]);
  console.log("seet booked ✅");
};

export const getMovieHallWithSeat = async (hallId: number, movieId: number) => {
  const hall = await prisma.hallMovie.findFirst({
    where: { hallId: hallId, movieId: movieId },
    include: { Seat: true },
  });
  return hall;
};

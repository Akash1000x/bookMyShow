"use server";
import prisma from "@/db";

export const bookseets = async (hallId: number, movieId: number, userId: string, seatId: number[]) => {
  await prisma.$transaction([
    prisma.booking.createMany({
      data: seatId.map((id) => ({ hallId, movieId, userId, seatId: id })),
    }),
    prisma.seat.updateMany({
      where: {
        id: {
          in: seatId,
        },
      },
      data: {
        available: false,
      },
    }),
  ]);
  console.log("seet booked");
};

export const getMovieHallWithSeat = async (id: number) => {
  const hall = await prisma.halls.findUnique({
    where: { id },
    include: { seats: true },
  });
  return hall;
};

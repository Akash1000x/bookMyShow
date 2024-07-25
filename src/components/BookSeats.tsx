"use client";
import * as React from "react";
import { Button } from "./ui/button";
import Box from "./ui/box";
import { HallMovie } from "@/types";
import { useSession } from "next-auth/react";
import { bookseets, getMovieHallWithSeat } from "@/actions/action";
import { hallMovie } from "@prisma/client";
import { TicketConfirm } from "./TicketConfirm";

export default function Bookseets({ hall, movieId }: { hall: HallMovie | null; movieId: string }) {
  const [selectedSeets, setSelectedSeets] = React.useState<number[]>([]);
  const [hallData, sethallData] = React.useState<HallMovie | null>();
  const [openDialog, setOpenDialog] = React.useState<boolean>(false);
  const session = useSession();

  React.useEffect(() => {
    sethallData(hall);
  }, [hall]);

  const selectSeet = (seatId: number) => {
    if (selectedSeets.includes(seatId)) {
      setSelectedSeets((prev) => prev.filter((n) => n != seatId));
    } else {
      setSelectedSeets([...selectedSeets, seatId]);
    }
  };

  return (
    <div>
      <div className="mx-auto w-fit pb-8 pt-4">
        <h1 className="text-5xl font-bold">{hallData?.movie?.movieName}</h1>
      </div>
      <div>
        {hallData &&
          hallData.Seat &&
          hallData.Seat.sort((a, b) => a.seatNumber - b.seatNumber).map((value, i) => (
            <Box
              key={i}
              className={`m-2 ${selectedSeets.includes(value.id) && "bg-green-500 text-white"}`}
              disabled={!value.available}
              onClick={() => selectSeet(value.id)}
            >
              {value.seatNumber}
            </Box>
          ))}
      </div>
      <Button
        variant={"default"}
        onClick={async () => {
          if (hallData?.id !== undefined && !!session.data?.user?.id) {
            await bookseets(hallData.hallId, Number(movieId), session.data?.user?.id, selectedSeets, hallData.id).then(
              async () => {
                let data: hallMovie | null = await getMovieHallWithSeat(hallData.hallId, Number(movieId));
                setOpenDialog(!openDialog);
                sethallData(data);
                setSelectedSeets([]);
              },
            );
          }
        }}
      >
        book seet
      </Button>
      <Button onClick={() => setOpenDialog(!openDialog)}>open dialog</Button>
      <TicketConfirm hallData={hallData} open={openDialog} setOpen={() => setOpenDialog(!openDialog)} />
    </div>
  );
}

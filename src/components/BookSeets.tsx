"use client";
import * as React from "react";
import { Button } from "./ui/button";
import Box from "./ui/box";
import { Hall } from "@/types";
import { useSession } from "next-auth/react";
import { bookseets, getMovieHallWithSeat } from "@/actions/addNewUser";

export default function Bookseets({ hall, movieId }: { hall: Hall | null; movieId: string }) {
  const [selectedSeets, setSelectedSeets] = React.useState<number[]>([]);
  const [hallData, sethallData] = React.useState<Hall | null>();
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
      <div>
        {hallData &&
          hallData.seats &&
          hallData.seats
            .sort((a, b) => a.seatNumber - b.seatNumber)
            .map((value, i) => (
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
            await bookseets(hallData.id, Number(movieId), session.data?.user?.id, selectedSeets).then(async () => {
              let data: Hall | null = await getMovieHallWithSeat(hallData.id);
              sethallData(data);
              setSelectedSeets([]);
            });
          }
        }}
      >
        book seet
      </Button>
    </div>
  );
}

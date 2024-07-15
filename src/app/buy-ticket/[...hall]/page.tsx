import { getMovieHallWithSeat } from "@/actions/action";
import BookSeats from "@/components/BookSeats";
import Container from "@/components/ui/container";
import Wrapper from "@/components/ui/wrapper";
import { HallMovie } from "@/types";
import React from "react";

export default async function Page({ params }: { params: { hall: string[] } }) {
  const hall: HallMovie | null = await getMovieHallWithSeat(Number(params.hall[1]), Number(params.hall[2]));

  return (
    <Wrapper>
      <Container>
        <BookSeats hall={hall} movieId={params.hall[2]} />
      </Container>
    </Wrapper>
  );
}

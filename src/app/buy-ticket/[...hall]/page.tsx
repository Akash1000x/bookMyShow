import { getMovieHallWithSeat } from "@/actions/addNewUser";
import Bookseets from "@/components/Bookseets";
import Container from "@/components/ui/container";
import Wrapper from "@/components/ui/wrapper";
import prisma from "@/db";
import { Hall } from "@/types";
import React from "react";

export default async function Page({ params }: { params: { hall: string[] } }) {
  const hall: Hall | null = await getMovieHallWithSeat(Number(params.hall[1]));

  return (
    <Wrapper>
      <Container>
        <Bookseets hall={hall} movieId={params.hall[2]} />
      </Container>
    </Wrapper>
  );
}

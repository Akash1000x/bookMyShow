import * as React from "react";
import ImageCrousel from "@/components/ui/image-crousel";
import Wrapper from "@/components/ui/wrapper";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import prisma from "@/db";
import { Movie } from "@/types";
import Link from "next/link";
import Container from "@/components/ui/container";

const getAllMovies = async () => {
  const movies: Movie[] = await prisma.movie.findMany();
  return movies;
};

export default async function Page() {
  const movies = await getAllMovies();
  return (
    <div>
      <ImageCrousel />
      <Wrapper className="mt-8">
        <Container>
          <h1 className="mb-4 text-4xl font-semibold">Movies</h1>
          <div className="flex flex-wrap justify-between gap-8">
            {movies.map((movie, i) => (
              <Link href={`movies/${movie.id}`} key={i}>
                <Card className="w-fit border-none p-0 shadow-2xl dark:shadow-[0px_4px_30px_0px_rgba(255,255,255,0.325)]">
                  <CardContent className="rounded-none p-0">
                    <Image src={movie.imageUrl} height={200} width={250} alt={movie.movieName} className="rounded-lg" />
                  </CardContent>
                  <CardFooter className="block px-2 pt-1">
                    <h2 className="text-lg font-medium">{movie.movieName}</h2>
                    <div>
                      <p className="text-sm opacity-90">{movie.genre}</p>
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </Wrapper>
    </div>
  );
}

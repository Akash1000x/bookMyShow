import * as React from "react";
import NavBar from "@/components/ui/nav-bar";
import ImageCrousel from "@/components/ui/image-crousel";
import Wrapper from "@/components/ui/wrapper";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import prisma from "@/db";
import { Movie } from "@/types";
import Link from "next/link";

const getAllMovies = async () => {
  const movies: Movie[] = await prisma.movie.findMany();
  return movies;
};

export default async function Page() {
  const movies = await getAllMovies();
  return (
    <div>
      <NavBar />
      <ImageCrousel />
      <Wrapper className="mt-8">
        <h1 className="text-4xl font-semibold">Movies</h1>
        <div className="flex gap-8 justify-between">
          {movies.map((movie, i) => (
            <Link href={`movies/${movie.id}`} key={i}>
              <Card className="w-fit p-0 border-none">
                <CardContent className="p-0 rounded-none">
                  <Image src={movie.imageUrl} height={200} width={250} alt={movie.movieName} className="rounded-lg" />
                </CardContent>
                <CardFooter className="block px-2 pt-1">
                  <h2 className="font-medium text-lg">{movie.movieName}</h2>
                  <div>
                    <p className="opacity-90 text-sm">{movie.genre}</p>
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </Wrapper>
    </div>
  );
}

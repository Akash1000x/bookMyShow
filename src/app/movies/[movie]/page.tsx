import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Wrapper from "@/components/ui/wrapper";
import prisma from "@/db";
import { Hall, Movie } from "@/types";
import Image from "next/image";
import Link from "next/link";

const getMovieHalls = async (id: number) => {
  const halls = await prisma.halls.findMany({
    where: { hallMovie: { some: { movieId: id } } },
    include: { hallAddress: true },
  });
  return halls;
};

const getMovie = async (id: number) => {
  const movie = await prisma.movie.findUnique({
    where: { id },
  });
  return movie;
};

export default async function page({ params }: { params: { movie: string } }) {
  const halls: Hall[] = await getMovieHalls(Number(params.movie));
  const movie: Movie | null = await getMovie(Number(params.movie));

  return (
    <Wrapper className="pt-10">
      <Card className="w-full flex bg-blue-50 items-center rounded-none shadow-lg">
        <CardContent className="p-0 rounded-none">
          {movie?.imageUrl && (
            <Image src={movie?.imageUrl} height={200} width={150} alt={movie?.movieName} className="" />
          )}
        </CardContent>
        <CardFooter className="block px-2 pl-10">
          <h2 className="font-bold text-4xl">{movie?.movieName}</h2>
          <div>
            <p className="opacity-80 text-xl pl-1">{movie?.genre}</p>
          </div>
        </CardFooter>
      </Card>
      <div>
        <h1 className="text-2xl font-semibold mb-8 mt-16">Halls in which the movie streaming:</h1>
        <div className="space-y-5 ">
          {halls.map((hall, i) => (
            <Card key={i} className="p-4 border-none bg-pink-100/70 flex justify-between items-center">
              <CardContent className="p-0 rounded-none">
                <div className="text-2xl font-semibold">{hall?.hallName && <h1>{hall.hallName} Cinema Hall</h1>}</div>
                <CardFooter className="block pl-1 pb-0 pt-1">
                  <div className="space-x-1">
                    <strong className="font-medium">Address:</strong>
                    <span>{hall?.hallAddress?.street},</span>
                    <span>{hall?.hallAddress?.city},</span>
                    <span>{hall?.hallAddress?.state},</span>
                    <span>{hall?.hallAddress?.country},</span>
                    <span>({hall?.hallAddress?.postalCode})</span>
                  </div>
                </CardFooter>
              </CardContent>
              <Link
                href={`/buy-ticket/${hall.hallName}/${hall.id}/${movie?.id}`}
                className={buttonVariants({ variant: "destructive" })}
              >
                Book Ticket
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

import Wrapper from "./wrapper";
import Image from "next/image";
import Link from "next/link";
import logo from "@/../public/logo.svg";
import { Input } from "./input";
import { Search } from "lucide-react";
import { getServerSession } from "next-auth";
import { authOption } from "@/lib/auth";
import { signIn } from "next-auth/react";
import { ThemeToggle } from "./theme-toggle";

export default async function NavBar() {
  const session = await getServerSession(authOption);
  if (!!session) {
    console.log("session ", session);
  }
  return (
    <div className="shadow-lg">
      <Wrapper className="py-4">
        <nav className="flex justify-between">
          <Link href="/home" className="flex-1">
            <Image src={logo} alt="bookMyShow" width={120} />
          </Link>
          <div className="relative flex-auto">
            <Search className="absolute left-2 top-2 opacity-40" width={20} />
            <Input className="pl-9" placeholder="Search for Movies, Events, Plays, Sports and Activities" />
          </div>
          <div className="flex flex-1 justify-end text-white">
            {!!session ? (
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-xl font-bold uppercase">
                {session.user.name[0]}
              </div>
            ) : (
              <button onClick={() => signIn()}>LogIn</button>
            )}
          </div>
          <div className="pl-4">
            <ThemeToggle />
          </div>
        </nav>
      </Wrapper>
    </div>
  );
}

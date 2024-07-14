import Wrapper from "./wrapper";
import Image from "next/image";
import Link from "next/link";
import logo from "@/../public/logo.svg";
import { Input } from "./input";
import { Search } from "lucide-react";
import { getServerSession } from "next-auth";
import { authOption } from "@/lib/auth";
import { signIn } from "next-auth/react";

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
            <Search className="opacity-40 absolute left-2 top-2" width={20} />
            <Input className="pl-9" placeholder="Search for Movies, Events, Plays, Sports and Activities" />
          </div>
          <div className=" text-white flex-1 flex justify-end">
            {!!session ? (
              <div className="bg-gray-900 uppercase h-10 w-10 rounded-full flex justify-center items-center text-xl font-bold">
                {session.user.name[0]}
              </div>
            ) : (
              <button onClick={() => signIn()}>LogIn</button>
            )}
          </div>
        </nav>
      </Wrapper>
    </div>
  );
}

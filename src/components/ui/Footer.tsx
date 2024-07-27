import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 flex h-[200px] w-full items-center justify-center bg-black text-4xl font-bold text-white">
      Developed by
      <Link href="https://akashkumawat.vercel.app" className="pl-4 text-blue-400 hover:underline">
        Akash Kumawat
      </Link>
    </footer>
  );
}

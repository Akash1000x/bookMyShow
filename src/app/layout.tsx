import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Providers from "@/Providers";
import NavBar from "@/components/ui/nav-bar";
import Link from "next/link";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "bookMyShow",
  description:
    "BookMyShow offers showtimes, movie tickets, reviews, trailers, concert tickets and events near Mumbai . Also features promotional offers, coupons and mobile ...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <Providers>
          <NavBar />
          <div className="min-h-[calc(100vh-272px)]">{children}</div>
          <footer className="mt-20 flex h-[200px] w-full items-center justify-center bg-black text-4xl font-bold text-white">
            Developed by
            <Link href="https://akashkumawat.vercel.app" className="pl-4 text-blue-400 hover:underline">
              Akash Kumawat
            </Link>
          </footer>
        </Providers>
      </body>
    </html>
  );
}

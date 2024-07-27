import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Providers from "@/Providers";
import NavBar from "@/components/ui/nav-bar";
import Link from "next/link";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Footer from "@/components/ui/Footer";

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
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Providers>
            <div className="grid min-h-[100dvh] grid-rows-[auto_1fr_auto]">
              <NavBar />
              <div>{children}</div>
              <Footer />
            </div>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}

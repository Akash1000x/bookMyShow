import NextAuth from "next-auth";

declare module "next-auth" {
  type User = {
    id: string;
    name: string;
    phone: string;
    password?: string;
    email?: string;
  };
}

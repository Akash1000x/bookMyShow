import prisma from "@/db";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export const authOption = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        phone: { label: "Phone", type: "tel", placeholder: "1234567890" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        const user = await prisma.user.findFirst({
          where: {
            phoneNumber: credentials.phone,
          },
        });

        if (user) {
          const passwordValidation = await bcrypt.compare(credentials.password, user.password);

          if (passwordValidation) {
            return { id: user.id, name: user.firstName, phone: user.phoneNumber, email: user?.email };
          }

          console.log("Password is incorrect");
          return null;
        }
        console.log("User not found");
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.phone = user.phone;
        token.email = user?.email;
      }
      return token;
    },
    async session({ token, session }: any) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.phone = token.phone;
        session.user.email = token?.email;
      }

      return session;
    },
  },
};

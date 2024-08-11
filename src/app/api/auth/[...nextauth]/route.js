import { connectDB } from "@/components/lib/connectDB";
import { User } from "@/components/lib/models";
import NextAuth from "next-auth";
import bcrypt from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      async authorize(credentials) {
        await connectDB();
        try {
          const user = await User.findOne({ email: credentials.email });
          if (user) {
            const passwordMatched = await bcrypt.compare(
              credentials.password,
              user.password
            );
            if (passwordMatched) {
              return user;
            } else {
              throw new Error("wrong credentials");
            }
          } else {
            throw new Error("user not found");
          }
        } catch (error) {
          throw new Error(error);
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async signIn({ account, profile }) {
      if (account.provider === "google" || account.provider === "github") {
        const {name:username, email, image:img } = profile;
        try {
          await connectDB();
          const userExist = await User.findOne({ email });
          if (!userExist) {
            const newUser = new User({
              username,

              email,
              img,
              password: 'defaultpassword',
            });
            await newUser.save();
          }
          return true;
        } catch (error) {
          console.log(error);
          return false;
        }
      }
      return true;
    },
  },
});
export { handler as GET, handler as POST };

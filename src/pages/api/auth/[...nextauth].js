import NextAuth from "next-auth/next";
import SMTPConnection from "nodemailer/lib/smtp-connection";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import connectMongo from "@/database/conn";
import Users from "@/model/Schema";
import { compare } from "bcryptjs";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId:
        "846721768332-uvi095nhltv66o9rkrrs60io52rre0rb.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        connectMongo().catch(err => {err: "connection failed...!"});

        //Check user existance
        const result = await Users.findOne({ email: credentials.email });
        if (!result) {
          throw new Erorr("No user found with Email please sign up..!");
        }

        //compare
        const checkPassword = await compare(
          credentials.password,
          result.password
        );

        //incorrect password
        if (!checkPassword || result.email !== credentials.email) {
          throw new Error("User name of password doesnt match");
        }
        return result;
      },
    }),
  ],
});

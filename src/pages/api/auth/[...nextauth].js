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
      // name: "Credentials",
      async authorize(credentials) {
        const client = await connectMongo()
        const userCollection = client.db().collection('users');
        const user = await userCollection.findOne({email: credentials.email});

        if(!user || user.password !==credentials.password){
          client.close();
          throw new Error('Invalid Email or Password')
        }

        client.close();
        return {email:user.email};
      },
    }),
  ],

  pages:{
    signIn:'/auth/login',
    signOut:'/auth/logout',
    error:'auth/error'
  },
  session:{
    jwt:true
  },
  callbacks: {
    async session(session, user) {
      session.user = user;
      return Promise.resolve(session);
    }
    }
});

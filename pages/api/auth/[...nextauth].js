import axios from "axios";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const { email, password } = credentials;
        // Add logic here to look up the user from the credentials supplied
        let response;
        try {
          response = await axios.post("http://localhost:5000/api/auth/login", {
            email,
            password,
          });
        } catch (error) {
          console.log(error);
        }

        // console.log(response);
        if (response) {
          return { ...response.data };
        }
        return null;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      // the user present here gets the same data as received from DB call  made above -> fetchUserInfo(credentials.opt)

      return { ...token, ...user };
    },
    async session({ session, user, token }) {
      // user param present in the session(function) does not recive all the data from DB call -> fetchUserInfo(credentials.opt)

      return token;
    },
  },
};

export default NextAuth(authOptions);

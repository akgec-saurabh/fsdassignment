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
        return { ...response.data };
      },
    }),
  ],
};

export default NextAuth(authOptions);

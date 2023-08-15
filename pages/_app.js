import MainLayout from "@/layout/MainLayout";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, ...pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </SessionProvider>
  );
}

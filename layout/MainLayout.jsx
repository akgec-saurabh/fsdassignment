import { Poppins } from "next/font/google";
import { useRouter } from "next/router";
import Sidebar from "../components/Sidebar";
import MainHeader from "../components/MainHeader";
import React from "react";
import { useSession } from "next-auth/react";
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
function MainLayout({ children }) {
  const router = useRouter();
  const { data: session } = useSession();

  if (router.pathname === "/dashboard" || router.pathname === "/my-connections")
    return (
      <div className={`${poppins.className} flex`}>
        <Sidebar />
        <div className="w-screen min-h-screen">
          <MainHeader />
          <main className="min-h-screen bg-slate-100">{children}</main>
        </div>
      </div>
    );

  return <>{!session && children}</>;
}

export default MainLayout;

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
  const { data: session } = useSession();

  if (session)
    return (
      <div className={`${poppins.className} flex`}>
        <Sidebar />
        <div className="w-screen min-h-screen">
          <MainHeader />
          <main className="min-h-screen bg-slate-100">{children}</main>
        </div>
      </div>
    );
  else {
    return <>{!session && children}</>;
  }
}

export default MainLayout;

import React from "react";
import Sidebar from "../components/Sidebar";
import { Poppins } from "next/font/google";
import MainHeader from "../components/MainHeader";
import Register from "@/pages/auth/register";
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

function Layout({ children }) {
  return (
    <div className={`${poppins.className} flex`}>
      <Sidebar />
      <div className="w-screen min-h-screen">
        <MainHeader />
        <main className="min-h-screen bg-slate-100">{children}</main>
      </div>
    </div>
  );
}

export default Layout;

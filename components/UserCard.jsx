import React from "react";
import userPic from "../public/user.png";
import Image from "next/image";
import { Outfit } from "next/font/google";
const outfit = Outfit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

function UserCard({ name, role, company }) {
  return (
    <div
      className={`flex gap-8 items-center border border-slate-300 w-max px-4 py-4 rounded-xl ${outfit.className}`}
    >
      <div className="text-sm">
        <div className="font-medium">{name}</div>
        <div className="text-slate-600 mt-4">{role}</div>
        <div className="text-slate-600 mb-4">@{company}</div>
        <button className="bg-violet-400 px-4 rounded-xl">Connect</button>
      </div>
      <div
        className="rounded-full
       bg-red-400 overflow-hidden"
      >
        <Image
          src={userPic}
          width={88}
          height={88}
          alt="profile"
          style={{ objectFit: "cover", width: "auto", height: "auto" }}
        />
      </div>
    </div>
  );
}

export default UserCard;

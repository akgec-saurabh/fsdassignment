import React, { useState } from "react";
import menu from "@/public/menu.svg";
import logo from "@/public/logo.png";
import notification from "@/public/notification.svg";
import user from "@/public/user.png";
import Image from "next/image";
import PhotoWrapper from "./PhotoWrapper";
import Link from "next/link";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";
import Button from "./Button";

function MobileNav() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  return (
    <div className="flex items-center justify-between py-4 px-2 sm:hidden">
      <div className="flex gap-4">
        <Image
          onClick={() => {
            setMenuOpen((prv) => !prv);
          }}
          src={menu}
          width={24}
          height={24}
          alt="menu"
        />
        <Image
          src={logo}
          width={48}
          height={24}
          style={{ objectFit: "contain" }}
          alt="logo"
        />
      </div>
      <div className="flex gap-4">
        <Image src={notification} width={24} height={24} alt="notification" />
        <PhotoWrapper>
          <Image src={user} width={24} height={24} alt="user" />
        </PhotoWrapper>
      </div>
      {isMenuOpen && (
        <ul className="absolute top-0 left-0 p-4 shadow-sm mt-10 flex flex-col gap-4  bg-white  w-full ">
          <li className="flex items-cente gap-2">
            <Link
              className={`border ${
                router.pathname === "/dashboard"
                  ? "border-violet-900"
                  : "border-transparent"
              }  rounded-md w-max px-6 py-2  `}
              href="dashboard"
            >
              My Profile
            </Link>
          </li>
          <li className="flex items-center gap-2">
            <Link
              className={`border ${
                router.pathname === "/my-connections"
                  ? "border-violet-900"
                  : "border-transparent"
              }  rounded-md w-max px-6 py-2  `}
              href="my-connections"
            >
              My Connections
            </Link>
          </li>
          <li>
            <Button onClick={() => signOut()}>Logout</Button>
          </li>
        </ul>
      )}
    </div>
  );
}

export default MobileNav;

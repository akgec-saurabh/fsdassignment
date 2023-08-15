import Image from "next/image";
import Link from "next/link";
import React from "react";
import right from "../public/right.svg";
import { useRouter } from "next/router";
import Button from "./Button";
import { signOut } from "next-auth/react";

function Sidebar() {
  const router = useRouter();
  console.log(router);

  return (
    <nav className="w-96 ">
      <div className="mx-auto  mt-6 border border-slate-300 rounded-md w-max px-8 py-2 font-medium text-2xl">
        {router.pathname === "/dashboard" ? "Dashboard" : "My Connections"}
      </div>
      <ul className="mt-10 flex flex-col gap-4 ml-8">
        <li className="flex items-cente gap-2">
          <Image
            src={right}
            width={14}
            height={14}
            alt="svg"
            style={{ objectFit: "contain", width: "auto", height: "auto" }}
          />

          <Link
            className={`border ${
              router.pathname === "/dashboard"
                ? "border-violet-900"
                : "border-transparent"
            }  rounded-md w-max px-6 py-2 text-xl `}
            href="dashboard"
          >
            My Profile
          </Link>
        </li>
        <li className="flex items-center gap-2">
          <Image
            src={right}
            width={14}
            height={14}
            alt="svg"
            style={{ objectFit: "contain", width: "auto", height: "auto" }}
          />

          <Link
            className={`border ${
              router.pathname === "/my-connections"
                ? "border-violet-900"
                : "border-transparent"
            }  rounded-md w-max px-6 py-2 text-xl `}
            href="my-connections"
          >
            My Connections
          </Link>
        </li>
      </ul>
      <Button onClick={() => signOut()}>Logout</Button>
    </nav>
  );
}

export default Sidebar;

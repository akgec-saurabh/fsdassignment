import React from "react";
import notification from "../public/notification.svg";
import down from "../public/down.svg";
import user from "../public/user.png";
import Image from "next/image";

function MainHeader() {
  return (
    <div className="w-full  justify-end py-4 border-b border-slate-200 hidden sm:flex">
      <div className="flex gap-4 mr-4">
        <Image
          className="cursor-pointer"
          src={notification}
          width={24}
          height={24}
          alt="notification"
          style={{ objectFit: "contain", width: "auto", height: "auto" }}
        />
        <div className="w-max border border-slate-200 rounded-lg flex items-center">
          <div className="flex gap-3 px-2 py-3">
            <Image
              src={user}
              width={34}
              height={34}
              alt="profile"
              style={{ objectFit: "cover", width: "auto", height: "auto" }}
            />

            <div className="w-max pr-4">
              <div className="text-xs">Welcome back,</div>
              <div>Vishnu Sawroop</div>
            </div>

            <Image
              className="cursor-pointer"
              src={down}
              width={24}
              height={24}
              alt="down"
              style={{ objectFit: "contain", width: "auto", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainHeader;

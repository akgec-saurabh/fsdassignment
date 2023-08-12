import React from "react";
import Image from "next/image";
import certificate from "../public/certificate.svg";
import Button from "./Button";

function Certifications() {
  return (
    <div className="my-8">
      <div className="flex justify-between">
        <span className="font-medium">Certifications</span>
        <Button>Edit</Button>
      </div>
      <div className="relative flex justify-center items-center border border-slate-300 rounded-full py-4 px-8 my-4">
        <Image
          className="absolute left-8"
          src={certificate}
          width={32}
          height={32}
          style={{ objectFit: "cover", width: "auto", height: "auto" }}
          alt="certy logo"
        />
        <div className=" ">
          <div className="text-slate-500">Python</div>
          <div className="text-sm text-slate-500">Coding Ninjas</div>
        </div>
      </div>
    </div>
  );
}

export default Certifications;

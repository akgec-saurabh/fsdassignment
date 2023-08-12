import React from "react";
import Button from "./Button";
import logo from "../public/logo.png";
import Image from "next/image";

const xpData = [
  {
    time: "7 Years(2014-2021)",
    type: "Full-time",
    company: "Oruphones",
    position: "Full Stack Developer",
  },
  {
    time: "6 months (2014)",
    type: "Intern",
    company: "Oruphones",
    position: "Full Stack Developer",
  },
];
const XpContainer = ({ time, type, company, position }) => {
  return (
    <div className="my-4 flex justify-between border border-slate-300 rounded-xl py-4 px-8">
      <div className="flex w-full flex-col">
        <div className="flex  w-full">
          <div className="flex-1 font-medium">{time}</div>
          <div className="flex-1 font-medium">{type}</div>
        </div>
        <div className="flex">
          <div className="flex-1 text-slate-500">{company}</div>
          <div className="flex-1 text-slate-500 -ml-8">--{position}</div>
        </div>
      </div>
      <Image
        src={logo}
        width={47}
        height={23}
        alt="logo"
        style={{ objectFit: "contain", width: "auto", height: "auto" }}
      />
    </div>
  );
};

function Experience() {
  return (
    <div className="my-8">
      <div className="flex justify-between">
        <span className="font-medium">Experience</span>
        <Button>Edit</Button>
      </div>
      {xpData.map((xp) => (
        <XpContainer {...xp} key={xp.time} />
      ))}
    </div>
  );
}

export default Experience;

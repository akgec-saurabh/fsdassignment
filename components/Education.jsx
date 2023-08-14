import React from "react";
import Button from "./Button";
import EditButton from "./EditButton";

function Education() {
  return (
    <div className="my-8">
      <div className="flex justify-between">
        <span className="font-medium">Education</span>
        <EditButton>Edit</EditButton>
      </div>
      <div className="border border-slate-400 rounded-xl py-4 px-8 my-4 ">
        <div className="text-violet-900 font-medium">IIT HYDERABAD</div>
        <div className="font-medium flex justify-between my-2">
          <span>&#40;2010-2014&#41;</span>
          <span>Btech</span>
        </div>
        <div className="text-slate-500">
          Lorem ipsum dolor sit amet consectetur. Erat auctor a aliquam vel
          congue luctus. Leo diam cras neque mauris ac arcu elit ipsum dolor sit
          amet consectetur.
        </div>
      </div>
    </div>
  );
}

export default Education;

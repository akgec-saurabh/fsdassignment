import React from "react";
import star from "../public/star.svg";
import Image from "next/image";

function ProfessionalDetails() {
  return (
    <div className="flex justify-between px-4 py-4 border border-slate-300 rounded-xl my-8">
      <div>
        <div className="font-medium">Professional Details</div>
        <div>This are the professional details shown to users in the app.</div>
      </div>
      <Image alt="star" src={star} width={48} height={48} />
    </div>
  );
}

export default ProfessionalDetails;

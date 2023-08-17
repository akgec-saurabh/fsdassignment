import Image from "next/image";
import React from "react";
import edit from "@/public/edit.svg";

function EditButton({ children, icon = false, gray, onClick, ...props }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center    shadow-sm w-max  my-2  rounded-xl cursor-pointer px-3 ${
        gray
          ? "bg-slate-200 text-black hover:bg-slate-300"
          : "bg-violet-700 text-white hover:bg-violet-800"
      }`}
      {...props}
    >
      {icon && (
        <Image className="mx-2" src={edit} width={16} height={16} alt="edit" />
      )}
      <span>{children}</span>
    </button>
  );
}

export default EditButton;

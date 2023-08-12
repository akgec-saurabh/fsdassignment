import Image from "next/image";
import React from "react";
import edit from "@/public/edit.svg";

function EditButton({ children, icon = false, onClick, ...props }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center bg-slate-200 w-max pr-2 rounded-xl cursor-pointer my-2 mr-4"
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

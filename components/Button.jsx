import React from "react";

function Button({ children, border = false, onClick, ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded-sm w-full my-2 ${
        border
          ? "bg-white text-violet-800 border border-violet-800 hover:bg-slate-200"
          : "bg-violet-700 text-white hover:bg-violet-800 "
      } `}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;

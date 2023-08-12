import React from "react";

function Button({ children, onClick, ...props }) {
  return (
    <button
      className="bg-violet-800 text-white px-4 py-2 rounded-sm w-full hover:bg-violet-900"
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;

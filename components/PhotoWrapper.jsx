import React from "react";

function PhotoWrapper({ children }) {
  return (
    <div className="rounded-full bg-red-400 overflow-hidden shadow-md">
      {children}
    </div>
  );
}

export default PhotoWrapper;

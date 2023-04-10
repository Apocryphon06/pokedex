import React from "react";

function Button({title}:any) {
  return (
    <button className="bg-[#2FA7D6] p-4 rounded-md text-white text-base hover:shadow-lg">
      {title}
    </button>
  );
}

export default Button;

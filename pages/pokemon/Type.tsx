import React from "react";

function Type({ type, color, isBig }: any) {
  return (
    <button
      className={`cursor-text font-light ${
        isBig ? `${color} rounded ` : `${color} rounded px-4 text-xs `
      }`}
    >
      {type}
    </button>
  );
}

export default Type;

import React from "react";

export default function Button({ children, ...buttonProps }) {
  return (
    <button
      className="px-2 py-1 rounded-lg mt-2 bg-green-400 text-black-400 text-xl font-light uppercase shadow-md hover:shadow-lg"
      {...buttonProps}
    >
      {children}
    </button>
  );
}

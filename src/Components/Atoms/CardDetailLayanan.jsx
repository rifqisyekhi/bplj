import React from "react";

export default function CardDetailLayanan({ text, action }) {
  return (
    <div
      className="bg-blue-950 px-4 py-2 rounded-md flex-1 basis-1/3 md:basis-1/2 flex justify-center items-center cursor-pointer hover:bg-blue-800 transition-colors"
      onClick={action}
    >
      <h3 className="text-lg font-bold text-white text-center">{text}</h3>
    </div>
  );
}

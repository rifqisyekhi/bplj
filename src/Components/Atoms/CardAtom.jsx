import React from "react";

export default function CardAtom({ text, link = "/" }) {
  const handleClick = () => {
    if (link) {
      window.location.href = link;
    }
  };

  return (
    <div
      className="bg-blue-950 px-4 py-10 md:py-20 lg:py-24 rounded-md flex-1 basis-1/3 lg:basis-1/5 flex justify-center items-center cursor-pointer hover:bg-blue-800 transition-colors"
      onClick={handleClick}
    >
      <h3 className="text-2xl font-bold text-white text-center">{text}</h3>
    </div>
  );
}

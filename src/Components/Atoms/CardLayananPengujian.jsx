import React from "react";

export default function CardLayananPengujian({ text, link = "/", image }) {
  const handleClick = () => {
    if (link) {
      window.location.href = link;
    }
  };

  return (
    <div
      className="bg-white py-2 rounded-lg flex-1 basis-1/3 flex justify-center items-center cursor-pointer 
  hover:shadow-lg hover:scale-105 transition-all duration-300"
      onClick={handleClick}
    >
      <div className="flex flex-col h-full">
        <div className="my-auto">
          <img
            src={
              process.env.REACT_APP_API_URL + "/" + image ||
              "https://via.placeholder.com/120"
            } // Default placeholder if no image provided
            className="w-36 mx-auto"
            alt={text}
          />
        </div>
        <div className="mt-auto">
          <h3 className="mt-1 text-sm font-semibold text-blue-950 text-center">
            {text}
          </h3>
        </div>
      </div>
    </div>
  );
}

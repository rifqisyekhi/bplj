import React from "react";

export default function HeaderComponent() {
  return (
    <div className="mx-4 shadow-md rounded-lg bg-yellow-400 py-24 lg:py-32 px-4 flex flex-col justify-center">
      <h2 className="text-3xl lg:text-5xl text-center text-stroke-blue text-white font-black text-shadow tracking-tight">
        SELAMAT DATANG DI
      </h2>
      <h1 className="text-4xl lg:text-6xl text-center text-stroke-blue text-white font-black py-1 text-shadow tracking-tight">
        BALAI PERKERASAN DAN LINGKUNGAN JALAN
      </h1>
    </div>
  );
}

import React from "react";

export default function CardJadwalRapat({ title, date }) {
  return (
    <div className="bg-blue-950 flex flex-col p-4 text-white w-4/5 rounded-lg shadow-lg">
      <div className="flex gap-3">
        <div>
          <h2 className="text-xl font-bold">{title}</h2>
        </div>
        <div>
          <p className="pt-1">{date}</p>
        </div>
      </div>
    </div>
  );
}

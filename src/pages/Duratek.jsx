import React, { useRef, useState } from "react";
import { RiHome6Line } from "react-icons/ri";

export default function Duratek() {
  const [openAccordion, setOpenAccordion] = useState(null);

  // Ref array for each accordion
  const accordionRefs = useRef([]);

  const toggleAccordion = (index) => {
    setOpenAccordion((prev) => (prev === index ? null : index));
    if (accordionRefs.current[index]) {
      accordionRefs.current[index].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  };

  // Accordion titles
  const accordionTitles = [
    "Manual Desain Perkerasan (MDP) 2024",
    "PKJI",
    "Pedoman JPD",
    "PDGS",
    "Pedoman Pembangunan Jalan dan Bangunan Mitigasi Kawasan Hutan",
    "Pedoman Persyaratan",
    "Pedoman Inspeksi",
  ];

  return (
    <div className="flex flex-col gap-8 justify-center p-6 overflow-y-auto">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-blue-950">DURATEK</h1>
      </div>

      {accordionTitles.map((title, index) => (
        <div
          key={index}
          className="bg-blue-950 p-2 rounded-md"
          ref={(el) => (accordionRefs.current[index] = el)} // Assign ref for each accordion
        >
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleAccordion(index)}
          >
            <h2 className="text-white font-bold text-lg">{title}</h2>
            <span className="text-white text-xl">
              {openAccordion === index ? "-" : "+"}
            </span>
          </div>
          {openAccordion === index && (
            <div className="mt-2 flex justify-center">
              <img
                src={`/duratek/${index + 1}.png`}
                alt={`Accordion ${index + 1}`}
                className="w-auto"
              />
            </div>
          )}
        </div>
      ))}

      {/* Back to Home */}
      <div className="flex mt-auto justify-center text-3xl">
        <a href="/">
          <RiHome6Line />
        </a>
      </div>
    </div>
  );
}

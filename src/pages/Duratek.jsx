import React, { useEffect, useRef, useState } from "react";
import { RiHome6Line } from "react-icons/ri";

export default function Duratek() {
  const [openAccordion, setOpenAccordion] = useState(null);

  // State untuk memicu animasi slide-in
  const [isAnimated, setIsAnimated] = useState(false);

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

  // Jalankan animasi saat halaman dimuat
  useEffect(() => {
    setTimeout(() => setIsAnimated(true), 100); // Delay animasi agar smooth
  }, []);

  // Accordion titles
  const accordionTitles = [
    "Manual Desain Perkerasan (MDP) 2024",
    "Pedoman Kapasitas Jalan Indonesia",
    "Pedoman JPD Jalur Perhentian Darurat",
    "Pedoman Desain Geometrik Simpang",
    "Pedoman Pembangunan Jalan dan Bangunan Mitigasi Kawasan Hutan",
    "Pedoman Persyaratan Teknis Konstruksi Berkelanjutan",
    "Pedoman Inspeksi ",
  ];

  return (
    <div className="flex flex-col gap-8 justify-center p-6 overflow-y-auto">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-blue-950">DURATEK</h1>
      </div>

      {accordionTitles.map((title, index) => (
        <div
          key={index}
          className={`bg-blue-950 p-2 rounded-md transform transition-all duration-700 ease-out ${
            isAnimated
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          }`}
          style={{ transitionDelay: `${index * 200}ms` }} // Delay setiap card agar tampil bertahap
          ref={(el) => (accordionRefs.current[index] = el)}
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
            <div
              className={`mt-2 transform transition-all duration-700 ease-out ${
                openAccordion === index
                  ? "translate-x-0 opacity-100"
                  : "translate-x-full opacity-0"
              }`}
            >
              <div className="flex justify-center">
                <img
                  src={`/duratek/${index + 1}.png`}
                  alt={`Accordion ${index + 1}`}
                  className="w-auto"
                />
              </div>
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

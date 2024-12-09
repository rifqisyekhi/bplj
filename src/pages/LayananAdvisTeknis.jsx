import React, { useState } from "react";
import { RiHome6Line } from "react-icons/ri";

export default function LayananAdvisTeknis() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = (type) => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      // Close the modal only if the overlay itself is clicked
      handleCloseModal();
    }
  };

  return (
    <div className="flex flex-col gap-8 justify-center p-6 h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-blue-950">Advis Teknis</h1>
      </div>
      <div className="text-justify bg-blue-950 p-2">
        <p className="text-white mb-2">
          <span className="font-bold">Advis Teknik</span> merupakan layanan
          teknis BPLJ yang membantu stakeholders dalam mengatasi masalah-masalah
          teknis pelaksanaan pekerjaan fisik bidang jalan dan jembatan khususnya
          perkerasan, geometrik, keselamatan, dan lingkungan jalan. Hasil dari
          pelayanan ini berupa rekomendasi teknis dari ahli-ahli kami yang dapat
          dijadikan alternatif solusi permasalahan di lapangan sesuai dengan
          peraturan atau pedoman yang berlaku.
        </p>
      </div>
      <div className="flex justify-center">
        <button
          className="text-blue-950 font-semibold border-4 border-blue-950 rounded-lg px-2 py-1"
          onClick={() => {
            handleOpenModal("maskot");
          }}
        >
          Alur Permintaan Advis Teknis
        </button>
      </div>
      <div className="flex mt-auto justify-center text-3xl">
        <a href="/">
          <RiHome6Line />
        </a>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={handleOverlayClick} // Handle clicks on the overlay
        >
          <div
            className="bg-white w-11/12 max-w-md"
            onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from closing it
          >
            <div className="mt-4">
              <img
                src="alur-advis-teknis.png"
                alt="Alur Advis Teknis"
                className="w-full h-auto mx-auto"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

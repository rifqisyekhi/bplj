import React, { useState } from "react";
import { RiHome6Line } from "react-icons/ri";
import FilosofiModal from "../Components/Modals/FilosofiModal";
import MaskotModal from "../Components/Modals/MaskotModal";
import TaglineModal from "../Components/Modals/TaglineModal";

export default function Profile() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [type, setType] = useState("");

  const handleOpenModal = (type) => {
    setType(type);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setType("");
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      // Close the modal only if the overlay itself is clicked
      handleCloseModal();
    }
  };

  return (
    <div className="flex flex-col gap-8 justify-center px-2 py-4">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-blue-950">Profil</h1>
      </div>
      <div className="flex justify-center">
        <img
          src="bpljori.png"
          className="w-36 cursor-pointer"
          alt="bplj"
          onClick={() => {
            handleOpenModal("filosofi");
          }}
        />
      </div>
      <div className="flex justify-around items-center">
        <div>
          <button
            className="text-red-700 font-semibold border-4 border-yellow-400 rounded-full px-2 py-1"
            onClick={() => {
              handleOpenModal("maskot");
            }}
          >
            Maskot HADE
          </button>
        </div>
        <img src="maskot-hade.png" className="w-48" alt="bplj" />
      </div>
      <div className="flex justify-around items-center">
        <div className="text-3xl">
          <p className="font-bold">
            <span className="text-blue-700 font-bold">H</span>armonic
          </p>
          <p className="font-bold">
            <span className="text-blue-700 font-bold">A</span>daptive
          </p>
          <p className="font-bold">
            <span className="text-blue-700 font-bold">D</span>edicated
          </p>
          <p className="font-bold">
            <span className="text-blue-700 font-bold">E</span>xcellent
          </p>
        </div>
        <div>
          <button
            className="text-blue-700 font-semibold border-4 border-blue-700 rounded-full px-2 py-1"
            onClick={() => {
              handleOpenModal("tagline");
            }}
          >
            Tagline HADE
          </button>
        </div>
      </div>
      <div className="flex justify-center text-3xl">
        <a href="/">
          <RiHome6Line />
        </a>
      </div>

      {/* Modal */}
      {isModalOpen && type === "filosofi" && (
        <FilosofiModal action={handleOverlayClick} />
      )}

      {isModalOpen && type === "maskot" && (
        <MaskotModal action={handleOverlayClick} />
      )}

      {isModalOpen && type === "tagline" && (
        <TaglineModal action={handleOverlayClick} />
      )}
    </div>
  );
}

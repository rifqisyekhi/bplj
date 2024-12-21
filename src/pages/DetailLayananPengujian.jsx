import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { RiHome6Line } from "react-icons/ri";
import { MdOutlineArrowBackIos } from "react-icons/md";
import DetailPengujianModal from "../Components/Modals/DetailPengujianModal";
import CardDetailLayanan from "../Components/Atoms/CardDetailLayanan";

export default function DetailLayananPengujian() {
  const { slug } = useParams(); // Get slug from URL params
  const [isModalOpen, setModalOpen] = useState(false);
  const [layananDetails, setLayananDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState("");

  // Fetch the layanan details based on the slug
  useEffect(() => {
    const fetchLayananDetails = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/layanan-pengujian/${slug}`
        );
        setLayananDetails(response.data); // Store data in state
        setLoading(false);
      } catch (error) {
        console.error("Error fetching layanan details:", error);
        setLoading(false);
      }
    };
    fetchLayananDetails();
  }, [slug]);

  const handleOpenModal = (content) => {
    setContent(content);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  if (loading) return <div>Loading...</div>; // Loading state

  return (
    <div className="flex flex-col gap-8 justify-center px-2 py-4 h-screen">
      <div>
        <a href="/layanan-pengujian">
          <MdOutlineArrowBackIos />
        </a>
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-bold text-blue-950">
          {layananDetails?.namaLayanan}
        </h1>
      </div>
      <div className="flex justify-center">
        <img
          src={
            process.env.REACT_APP_API_URL +
              "/" +
              layananDetails?.imageLayanan || "bpljori.png"
          } // Conditional image
          className="w-60 h-auto rounded-lg border-4 border-blue-950"
          alt="bplj"
        />
      </div>
      <div className="mx-4 flex flex-wrap gap-6 uppercase mt-4">
        <CardDetailLayanan
          text={"Deskripsi"}
          action={() => {
            handleOpenModal(layananDetails?.deskripsi);
          }}
        />
        <CardDetailLayanan
          text={"Standar Acuan"}
          action={() => {
            handleOpenModal(layananDetails?.standarAcuan);
          }}
        />
        <CardDetailLayanan
          text={"Biaya / Tarif"}
          action={() => {
            handleOpenModal(layananDetails?.biayaTarif);
          }}
        />
        <CardDetailLayanan
          text={"Produk"}
          action={() => {
            handleOpenModal(layananDetails?.produk);
          }}
        />
      </div>

      <div className="flex justify-center mt-auto text-3xl">
        <a href="/">
          <RiHome6Line />
        </a>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <DetailPengujianModal content={content} action={handleOverlayClick} />
      )}
    </div>
  );
}

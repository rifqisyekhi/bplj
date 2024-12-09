import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { RiHome6Line } from "react-icons/ri";
import { MdOutlineArrowBackIos } from "react-icons/md";
import DetailPengujianModal from "../Components/Modals/DetailPengujianModal";
import CardDetailLayanan from "../Components/Atoms/CardDetailLayanan";

export default function DetailLayananPengujian() {
  const { slug } = useParams();
  const [isModalOpen, setModalOpen] = useState(false);
  const [layananDetails, setLayananDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchLayananDetails = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/layanan-pengujian/${slug}`
        );
        setLayananDetails(response.data);
      } catch (error) {
        console.error("Error fetching layanan details:", error);
      } finally {
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

  if (loading) return <div>Loading...</div>;
  if (!layananDetails) return <div>Data layanan tidak ditemukan.</div>;

  const detailItems = [
    { text: "Deskripsi", content: layananDetails?.deskripsi },
    { text: "Standar Acuan", content: layananDetails?.standarAcuan },
    { text: "Biaya / Tarif", content: layananDetails?.biayaTarif },
    { text: "Produk", content: layananDetails?.produk },
  ];

  return (
    <div className="flex flex-col gap-8 justify-center px-2 py-4 h-screen">
      <div>
        <Link to="/layanan-pengujian">
          <MdOutlineArrowBackIos />
        </Link>
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-bold text-blue-950">
          {layananDetails?.namaLayanan}
        </h1>
      </div>
      <div className="flex justify-center">
        <img
          src={
            layananDetails?.imageLayanan
              ? `${process.env.REACT_APP_API_URL}/${layananDetails.imageLayanan}`
              : "/bpljori.png"
          }
          className="w-60 h-auto rounded-lg border-4 border-blue-950"
          alt={layananDetails?.namaLayanan || "Default Image"}
        />
      </div>
      <div className="mx-4 flex flex-wrap gap-6 uppercase mt-4">
        {detailItems.map((item, index) => (
          <CardDetailLayanan
            key={index}
            text={item.text}
            action={() => handleOpenModal(item.content)}
          />
        ))}
      </div>
      <div className="flex justify-center mt-auto text-3xl">
        <Link to="/">
          <RiHome6Line />
        </Link>
      </div>
      {isModalOpen && (
        <DetailPengujianModal content={content} action={handleCloseModal} />
      )}
    </div>
  );
}

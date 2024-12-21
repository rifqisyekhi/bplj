import React, { useEffect, useState } from "react";
import CardLayananPengujian from "../Components/Atoms/CardLayananPengujian";
import { RiHome6Line } from "react-icons/ri";
import axios from "axios";

export default function LayananPengujian() {
  const [layanan, setLayanan] = useState([]);

  // Fetch data from the /layanan endpoint
  useEffect(() => {
    const fetchLayanan = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/layanan`
        );
        setLayanan(response.data);
      } catch (error) {
        console.error("Error fetching layanan:", error);
      }
    };

    fetchLayanan();
  }, []);

  return (
    <div className="flex flex-col bg-yellow-400 h-screen pt-10">
      <div className="mx-10 flex flex-wrap gap-10 uppercase mt-8 px-1 scrollable-container overflow-x-hidden">
        {layanan.map((item) => (
          <CardLayananPengujian
            key={item._id}
            text={item.namaLayanan} // Example, you can change this to any field you want
            link={`/layanan-pengujian/${item._id}`} // Using _id as part of the URL
            image={item.imageLayanan} // Pass the image path
          />
        ))}
      </div>
      <div className="flex justify-center text-6xl text-blue-950 mt-auto pb-8">
        <a href="/">
          <RiHome6Line />
        </a>
      </div>
    </div>
  );
}

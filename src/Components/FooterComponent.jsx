import React from "react";

export default function FooterComponent() {
  return (
    <div className="flex justify-around lg:justify-between items-center lg:mt-1 pb-3">
      <div>
        <img src="footer-image.png" className="w-36 lg:w-60" alt="bplj" />
      </div>
      <div className="pt-1 lg:pr-12">
        <h4 className="font-bold text-sm lg:text-lg">Kontak Kami</h4>
        <div className="text-gray-600">
          <p className="text-[0.5em] lg:text-sm">
            Balai Perkerasan dan Lingkungan Jalan
          </p>
          <p className="text-[0.5em] lg:text-sm">
            Jl.AH Nasution No.264 Ujungberung,
          </p>
          <p className="text-[0.5em] lg:text-sm">Bandung - Jawa Barat</p>
          <p className="text-[0.5em] lg:text-sm">Kode Pos : 40294</p>
        </div>
      </div>
    </div>
  );
}

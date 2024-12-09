import React from "react";
import NavbarComponent from "../Components/NavbarComponent";
import HeaderComponent from "../Components/HeaderComponent";
import CardAtom from "../Components/Atoms/CardAtom";
import RunningTextComponent from "../Components/RunningTextComponent";
import FooterComponent from "../Components/FooterComponent";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <NavbarComponent />
      <HeaderComponent />
      <div className="mx-4 flex flex-wrap gap-2 uppercase mt-4">
        <CardAtom text={"Profil"} link="/profil" />
        <CardAtom text={"Layanan Pengujian"} link="/layanan-pengujian" />
        <CardAtom text={"Layanan Advis Teknis"} link="layanan-advis-teknis" />
        <CardAtom text={"Duratek"} link="duratek" />
      </div>
      <div className="mt-auto">
        <RunningTextComponent
          text={
            "This is an infinite running text. React is amazing! — This is an infinite running text. React is amazing!"
          }
        />
        <FooterComponent />
      </div>
    </div>
  );
}

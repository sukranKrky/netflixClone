import React from "react";

import Murat from "/Image/Murat.png";
import Sukran from "/Image/Şükran.png";
import Cocuk from "/Image/Cocuk.png";
import Umut from "/Image/Umut.png";
import ProfilEkle from "/Image/ProfilEkle.png";
import { Link } from "react-router-dom";

const UserCard = () => {
  return (
    <div className=" flex flex-col justify-center w-[1260px] h-[478px] pt-40 m-auto">
      <div className="flex flex-row py-10 justify-center">
        <h1 className=" text-6xl "> Kim İzliyor?</h1>
      </div>
      <div className=" flex flex-col ">
        <div className=" flex flex-row gap-12 px-7">
          <div className="  w-[200px] h-64  hover:opacity-85 ">
            <img src={Murat} alt="" />
            <p className=" flex text-[#5B5B5B] text-2xl  pt-6 justify-center ">
              Murat
            </p>
          </div>

          <div className="  w-[200px] h-64 hover:opacity-85 ">
            <img src={Umut} alt="" />
            <p className=" flex text-[#5B5B5B] text-2xl pt-7 justify-center">
              Umut
            </p>
          </div>
          <Link to="/homePage">
            <div className="  w-[200px] h-64  hover:opacity-85">
              <img src={Sukran} alt="" />

              <p className=" flex text-[#5B5B5B] text-2xl pt-7 justify-center">
                Şükran
              </p>
            </div>
          </Link>
          <div className="  w-[200px] h-64 hover:opacity-85  ">
            <img src={Cocuk} alt="" />

            <p className=" flex text-[#5B5B5B] text-2xl pt-7 justify-center">
              Çocuk
            </p>
          </div>
          <div className="  w-[200px] h-64  hover:opacity-85 ">
            <div className="p-8 px-10">
              <img src={ProfilEkle} alt="" />
            </div>

            <p className=" flex text-[#5B5B5B] text-2xl pt-7 justify-center">
              Profil Ekle
            </p>
          </div>
        </div>

        <div className=" flex flex-row py-5  justify-center pt-11 hover:opacity-85 ">
          <label
            htmlFor=""
            className=" border-2 border-[#5B5B5B] text-3xl text-[#5B5B5B] px-6 py-3 "
          >
            PROFİLLERİ YÖNET
          </label>
        </div>
      </div>
    </div>
  );
};

export default UserCard;

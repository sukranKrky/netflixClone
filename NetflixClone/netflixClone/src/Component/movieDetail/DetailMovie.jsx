import React from "react";
import Navbar from "../Navbar/Navbar";

import like from "/Image/icone/like.png";
import Play from "/Image/icone/Play.png";
import DetailMovies from "/Image/DetailMovie.png";
import ds from "/Image/ds.png";

import add from "/Image/icone/add icone.png";
import N from "/Image/N.png";

const DetailMovie = () => {
  return (
    <div>
      <Navbar />
      <div className="relative bg-custom-bg bg-cover bg-no-repeat bg-center h-screen">
        <img
          src={DetailMovies}
          alt="Arka Plan Resmi"
          className="w-full h-[700px] opacity-55 "
        />
        <div className="  w-full h-full bg-transparent top-0 absolute bg-gradient-to-r from-black to-transparent">
          <div className="absolute top-12 left-24  text-white w-[800px] text-7xl bg-transparent  ">
            <div className="flex flex-row h-12 bg-transparent items-center">
              <img src={N} alt="" className="bg-transparent" />
              <p className=" text-3xl  bg-transparent pl-3">ANIME</p>
            </div>
            <div className="flex flex-col  bg-transparent w-[370px] items-center  ">
              <img src={ds} alt="" className="bg-transparent" />
            </div>
            <div className=" bg-transparent flex flex-row gap-3">
              <p className="bg-transparent text-base font-sans text-green-500 ">
                79.9% Match
              </p>
              <p className="text-base font-bold bg-transparent"> 2019</p>
              <p className="border text-base font-bold bg-transparent w-6 h-6 items-center px-1 ">
                R
              </p>
              <p className=" bg-transparent text-base ">2 saat 53 dk</p>
            </div>

            <div className=" flex flex-row bg-transparent gap-4 py-4">
              <p className="  text-2xl font-bold bg-transparent">
                Türkiye’de Bugün 4 Numara
              </p>
            </div>
            <div className=" bg-transparent ">
              <p className=" bg-transparent text-[26px]  text-inherit leading-8 ">
                Bir iblis saldırısında ailesi katledilen ve kız kardeşi
                lanetlenen Tanjiro, laneti kaldırmanın bir yolunu bulmak ve
                intikam almak için tehlikeli bir yolculuğa çıkar.
              </p>
            </div>

            <div className=" flex flex-row  bg-transparent py-5 gap-4 items-center">
              <button className=" flex flex-row h-14 w-auto text-2xl font-bold bg-white text-black justify-center items-center py-4 px-5  gap-2  rounded-lg ">
                <img src={Play} alt="" className="bg-transparent " />
                Oynat
              </button>
              <button
                className="flex flex-row h-14 w-auto text-2xl font-bord text-white  justify-center items-center py-4 px-5 gap-5 bg-white bg-opacity-30 rounded-lg "
              >
                <img src={add} alt="" className="bg-transparent " />
                <p className=" bg-transparent  text-white">Listeme Ekle</p>
             
              </button>
             
              <button className=" border-2 rounded-[50%] w-12 h-12 items-center justify-center ">
                <img src={like} alt="" className="bg-transparent p-2 "/>
              </button>
              <button className=" border-2 rounded-[50%] w-12 h-12 items-center justify-center ">
                <img src={like} alt="" className="bg-transparent p-2 transform rotate-180 "/>
              </button>
            </div>

            <div className=" flex flex-col  bg-transparent   ">
              <p className="bg-transparent text-lg  flex flex-row gap-2 ">
                <h4 className="bg-transparent text-lg font-bold">Oyuncular:</h4>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, maiores?
              </p>
              <p className="bg-transparent text-lg  flex flex-row gap-2 ">
                <h4 className="bg-transparent text-lg font-bold">Tür:</h4>
                Lorem ipsum
              </p> <p className="bg-transparent text-lg  flex flex-row gap-2 ">
                <h4 className="bg-transparent text-lg font-bold">Yayınlanma Tarihi:</h4>
                Lorem ipsum dolor, sit amet consectetur
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailMovie;

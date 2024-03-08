import React from "react";
import Movie1 from "/Image/movies/MovieHorizontalCard2.png";
import Movie2 from "/Image/movies/MovieHorizontalCard3.png";
import Movie3 from "/Image/movies/MovieHorizontalCard4.png";
import Movie4 from "/Image/movies/MovieHorizontalCard5.png";
import Movie5 from "/Image/movies/MovieHorizontalCard6.png";
import ArrowRight from "/Image/icone/ArrowRight.png";
import ArrowLeft from "/Image/icone/ArrowLeft.png";


const YenidenIzle = () => {
  return (
    <div className="  relative text-white text-7xl py-2 -left-6 ">
      <div className=" flex flex-col py-2 bg-transparent  gap-2 right-80 pl-24 ">
        <p className="bg-transparent  text-2xl font-bold text-[#E5E5E5]  ">
          Yeniden İzle
        </p>
       
      </div>

      <div className=" flex flex-row justify-center items-center">

      <div className="flex flex-row  ">
          <img src={Movie5} alt="" />
          <img src={Movie1} alt="" />
          <img src={Movie2} alt="" />
          <img src={Movie3} alt="" />
          <img src={Movie4} alt="" />
          <img src={Movie5} alt="" />
        </div>
      </div>
      <img
            src={ArrowRight}
            alt=""
            className=" bg-transparent top-28  right-5  absolute h-8 w-8"
          />
             <img
            src={ArrowLeft}
            alt=""
            className=" bg-transparent left-24 top-28 absolute h-8 w-8"
          />
    </div>
  );
};

export default YenidenIzle;

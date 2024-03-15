import React, { useEffect, useState } from "react";
import Movie1 from "/Image/movies/MovieHorizontalCard2.png";
import Movie2 from "/Image/movies/MovieHorizontalCard3.png";
import Movie3 from "/Image/movies/MovieHorizontalCard4.png";
import Movie4 from "/Image/movies/MovieHorizontalCard5.png";
import Movie5 from "/Image/movies/MovieHorizontalCard6.png";
import ArrowRight from "/Image/icone/ArrowRight.png";
import ArrowLeft from "/Image/icone/ArrowLeft.png";
import axios from "axios";
import SliderBar from "../Sliders/SliderBar";


const YenidenIzle = () => {


  const [data, setData] = useState([]);

  const API_KEY = "c225375253b23d29d8fae3c63602c8f4";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${API_KEY}`
        );
        setData(response.data.results.slice(0, 5));
        console.log(response.data.results.slice(0, 5));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="  relative text-white text-7xl py-2 -left-6 ">
      <div className=" flex flex-col py-2 bg-transparent  gap-2 right-80 pl-24 ">
        <p className="bg-transparent  text-2xl font-bold text-[#E5E5E5]  ">
          Yeniden İzle
        </p>
       
      </div>



     <div className=" flex flex-row justify-center items-center">

      <div className="flex flex-row  pl-24 ">
      <SliderBar data={data}/>
          
        </div>
      </div>
      {/*  <img
            src={ArrowRight}
            alt=""
            className=" bg-transparent top-28  right-5  absolute h-8 w-8"
          />
             <img
            src={ArrowLeft}
            alt=""
            className=" bg-transparent left-24 top-28 absolute h-8 w-8"
          /> */}
    </div>
  );
};

export default YenidenIzle;

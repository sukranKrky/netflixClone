import React, { useEffect, useState } from "react";
import MoviePoster from "/Image/MoviePoster.png";
import Top10Badge from "/Image/Top10Badge.png";
import Detail from "/Image/icone/Detail.png";
import Play from "/Image/icone/Play.png";
import axios from "axios";
import SliderBar from "./Sliders/SliderBar";

const HighlightedMovie = () => {
  const [data, setData] = useState([]);

  const API_KEY = "c225375253b23d29d8fae3c63602c8f4";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${API_KEY}`
        );
        setData(response.data.results.slice());
        console.log(response.data.results.slice());
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div className="relative bg-custom-bg bg-cover bg-no-repeat bg-center h-screen">
      <img src={MoviePoster} alt="Arka Plan Resmi" className="w-full h-auto" />
      <div className="absolute top-52 left-24  text-white w-[600px] text-7xl bg-transparent  ">
        <div className="flex flex-col  bg-transparent w-[370px] items-center  ">
          <h1 className="font-extrabold  bg-transparent ">YANIMDA</h1>
          <h2 className="-mt-6 items-center bg-transparent">KAL</h2>
        </div>
        <div className=" flex flex-row bg-transparent gap-4 py-4">
          <img src={Top10Badge} alt="" />
          <p className="  text-2xl font-bold bg-transparent">
            Türkiye’de Bugün 4 Numara
          </p>
        </div>
        <div className=" bg-transparent ">
          <p className=" bg-transparent text-[26px]  text-inherit leading-8 ">
            Küçük yaşta başının çaresine bakmayı öğrenen ve çok çalışarak iş
            dünyasında önemli bir konuma gelen Emir, bir gün sokak şarkıcısı bir
            kızla karşılaşır ve hayatı değişir.{" "}
          </p>
        </div>

        <div className=" flex flex-row  bg-transparent py-5 gap-4">
          <button className=" flex flex-row w-36 text-2xl font-bold bg-white text-black justify-center items-center py-4 px-5  gap-2  rounded-lg ">
            <img src={Play} alt="" className="bg-transparent" />
            Oynat
          </button>
          <button className="flex flex-row  w-72 text-2xl font-sans text-white font-bold justify-center items-center py-4 px-5  gap-2 bg-white bg-opacity-30 rounded-lg ">
            <img src={Detail} alt="" className="bg-transparent" />
            <p className=" bg-transparent  text-white">Daha Fazla Bilgi</p>
          </button>
        </div>

        <div className=" flex flex-col  bg-transparent  gap-2 ">
          <p className="bg-transparent  text-2xl font-bold text-[#E5E5E5] ">
            Netflix'te Popüler
          </p>
          <SliderBar data={data}  className="bg-transparent"/>
        </div>
      </div>
    </div>
  );
};

export default HighlightedMovie;

import React, { useEffect, useState } from "react";
import ArrowRight from "/Image/icone/ArrowRight.png";
import axios from "axios";
import SliderBar2 from "../Sliders/SliderBar2";
import Slider from "react-slick";
import SliderBar from "../Sliders/SliderBar";

const MovieListCard = () => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

  const API_KEY = "c225375253b23d29d8fae3c63602c8f4";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${API_KEY}`
        );
        setData(response.data.results.slice(5, 10));
        setData2(response.data.results.slice(10, 15));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className=" top-52 right-80  text-white text-7xl py-2 pl-24">
      <div className=" flex flex-col py-4 bg-transparent  gap-4  ">
        <p className="bg-transparent  text-2xl font-bold text-[#E5E5E5]  ">
          Kemal, İzlemeye Devam Et
        </p>
        <div className="relative bg-transparent">
          <div className=" flex flex-row h-40 gap-3  bg-transparent">
            <SliderBar2 data={data}/>
            
            </div>
        </div>
      </div>

      <div className=" flex flex-col py-4 bg-transparent  gap-4 ">
        <p className="bg-transparent  text-2xl font-bold text-[#E5E5E5]  ">
          Gündemdekiler
        </p>
        <div className="relative bg-transparent">
          <SliderBar data={data2}/>
        </div>
      </div>
    </div>
  );
};

export default MovieListCard;

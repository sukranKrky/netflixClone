import React, { useEffect, useState } from "react";
import Rank1 from "/public/Image/top10/Rank - 01.png";
import Rank2 from "/public/Image/top10/Rank - 02.png";
import Rank3 from "/public/Image/top10/Rank - 03.png";
import Rank4 from "/public/Image/top10/Rank - 04.png";
import Rank5 from "/public/Image/top10/Rank - 05.png";
import ArrowRight from "/Image/icone/ArrowRight.png";
import axios from "axios";

const Top10 = () => {
  const Ranks = [Rank1, Rank2, Rank3, Rank4, Rank5];

  const [data, setData] = useState([]);

  const API_KEY = "c225375253b23d29d8fae3c63602c8f4";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=${API_KEY}`
        );
        setData(response.data.results.slice(10, 15));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className=" right-80  text-white text-7xl py-2 pl-24 ">
      <div className=" flex flex-col py-2 bg-transparent  gap-2 ">
        <p className="bg-transparent  text-2xl font-bold text-[#E5E5E5]  ">
          Türkiye'de Bugünün Top 10 Listesi
        </p>
        <div className="flex flex-col   ">
          <div className=" absolute  flex flex-row left-12 items-center ">
            {Ranks.map((rank, index) => (
              <img
                key={index}
                src={rank}
                alt=""
                className=" h-[205px] w-[285px]  pr-36  left-15 "
              />
            ))}
          </div>
          <div className="   flex flex-row h-[205px]   pl-20  z-0 bg-transparent items-center justify-between">
            {data.map((movie) => (
              <div key={movie.id} className=" ">
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                  className="w-[145px] h-[205px] rounded-sm   "
                />
              </div>
            ))}

            <img
              src={ArrowRight}
              alt=""
              className=" bg-transparent  right-0   absolute h-8 w-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top10;

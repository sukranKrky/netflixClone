import React, { useEffect, useState } from "react";
import ArrowRight from "/Image/icone/ArrowRight.png";
import axios from "axios";

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
            {data.map((movie) => (
              <div key={movie.id}>
                <div className=" flex flex-col justify-center items-center ">
                  <img
                    src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                    alt=""
                    className="w-72 h-40 py-2  "
                    
                  />
                  <div className="w-44 h-[3px]  bg-[#525253]">
                    <div className="w-[20%] h-[3px] bg-[#B9090B] "></div>
                  </div>
                </div>
              </div>
            ))}

           
          </div>
          <img
            src={ArrowRight}
            alt=""
            className=" bg-transparent right-12 top-14 absolute h-8 w-8"
          />
        </div>
      </div>

      <div className=" flex flex-col py-4 bg-transparent  gap-4 ">
        <p className="bg-transparent  text-2xl font-bold text-[#E5E5E5]  ">
          Gündemdekiler
        </p>
        <div className="relative bg-transparent">
          <div className=" flex flex-row h-40 gap-3  bg-transparent">
            {data2.map((movie) => (
              <div key={movie.id}>
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                  className="w-72 h-40 "
                />
              </div>
            ))}
          </div>
          <img
            src={ArrowRight}
            alt=""
            className=" bg-transparent right-12 top-14 absolute h-8 w-8"
          />
        </div>
      </div>
    </div>
  );
};

export default MovieListCard;

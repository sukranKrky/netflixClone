import React, { useEffect, useState } from "react";
import MoviePoster from "/public/Image/MoviePosters/MoviePoster.png"
import MoviePoster2 from "/public/Image/MoviePosters/MoviePoster2.png"
import MoviePoster3 from "/public/Image/MoviePosters/MoviePoster3.png"
import MoviePoster4 from "/public/Image/MoviePosters/MoviePoster4.png"
import MoviePoster5 from "/public/Image/MoviePosters/MoviePoster5.png"
import ArrowRight from "/Image/icone/ArrowRight.png";
import axios from "axios";



const NetflixOrijinal = () => {
  const [data, setData] = useState([]);

  const API_KEY = "c225375253b23d29d8fae3c63602c8f4";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=${API_KEY}`
        );
        setData(response.data.results.slice(5, 10));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  
  return (
    <div className=" right-80  text-white text-7xl py-2 pl-24">
      <div className=" flex flex-col py-2 bg-transparent  gap-4  ">
        <p className="bg-transparent  text-2xl font-bold text-[#E5E5E5]  ">
          Kemal, İzlemeye Devam Et
        </p>
        <div className="h-[550px] flex flex-row gap-1 ">
            <img src={MoviePoster} alt="" className="w-[260px]" />
            <img src={MoviePoster2} alt="" className="w-[260px]"  />
            <img src={MoviePoster3} alt="" className="w-[260px]"  />
            <img src={MoviePoster4} alt="" className="w-[260px]"  />
            <img src={MoviePoster5} alt="" className="w-[260px]"  />
{/* 
            {data.map((movie) => (
              <div key={movie.id}>
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                  className="w-[285px] h-[570px] " 
                />
              </div>
            ))} */}

        </div>
        <img
            src={ArrowRight}
            alt=""
            className=" bg-transparent right-1 top-[110rem] absolute h-8 w-8"
          />
      </div>
    </div>
  );
};

export default NetflixOrijinal;

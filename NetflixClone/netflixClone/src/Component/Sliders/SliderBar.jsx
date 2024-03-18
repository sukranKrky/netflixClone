import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import DetailMovie from "../movieDetail/DetailMovie";


const SliderBar = ({data}) => {
 
  const settings = {
    
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "20px",
    slidesToShow: 5,
    
  };
  return (
    <div className="slider-container w-[1290px]  bg-transparent items-center  ">
      <Slider
        {...settings}
        className=" bg-transparent"
      >
        {data.map((movie) => (
          <div key={movie.id} className=" bg-transparent  "    >

            
             <Link to={`/homePage/${movie.id}`} key={movie.id} className="bg-transparent">
              
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              className="w-72 h-40 pl-3 bg-transparent "
            />
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderBar;

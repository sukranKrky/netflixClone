import React from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick";



const SliderBar2 = ({data}) => {
  
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
              <div key={movie.id} className=" bg-transparent ">
                  <Link to={`/homePage/${movie.id}`} key={movie.id} className="bg-transparent">
              
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                  className="w-72 h-40 pl-3 bg-transparent "
                />
                </Link>
                 <div className=" pl-8 pt-3">
                 <div className="w-44 h-[3px]  pr-8 bg-[#525253]">
                    <div className="w-[20%] h-[3px] pl-8 bg-[#B9090B] "></div>
                  </div>
                 </div>
              </div>
            ))}
          </Slider>
        </div>
      );
  
}

export default SliderBar2
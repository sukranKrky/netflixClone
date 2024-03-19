import React from "react";
import Navbar from "../Navbar/Navbar";
import { useSelector } from "react-redux";
import SliderBar from "../Sliders/SliderBar";

const MyMovieList = () => {
  const favoriteMovies = useSelector((state) => state.favorite.movies);
  console.log(favoriteMovies);
  return (
    <div>
      <Navbar />

      <div className="flex flex-col">
        <h2>Favorite Movies</h2>
        <SliderBar data={favoriteMovies} />
      </div>
    </div>
  );
};

export default MyMovieList;

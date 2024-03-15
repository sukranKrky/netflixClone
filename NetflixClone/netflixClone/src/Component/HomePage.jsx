import React from "react";
import HighlightedMovie from "./HighlightedMovie";
import Footer from "./Footer/Footer";
import MovieListCard from "./MoviesList/MovieListCard";
import NetflixOrijinal from "./MoviesList/NetflixOrijinal";
import Top10 from "./MoviesList/Top10";
import YenidenIzle from "./MoviesList/YenidenIzle";
import MyList from "./MoviesList/MyList";
import Navbar from "./Navbar/Navbar";
import DetailMovie from "./movieDetail/DetailMovie";
import { Route, Routes } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="w-[1444px] h-[3123px] flex flex-col gap-4  ">
      <Navbar />
     
      <HighlightedMovie />
      <MovieListCard />
      <NetflixOrijinal />
      <Top10 />
      <YenidenIzle />
      <MyList />
      <Footer />
   

    
    </div>
  );
};

export default HomePage;

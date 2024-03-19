import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import { useParams } from "react-router-dom";

import classNames from "classnames"
import like from "/Image/icone/like.png";
import Play from "/Image/icone/Play.png";
import DetailMovies from "/Image/DetailMovie.png";
import ds from "/Image/ds.png";
import add from "/Image/icone/add icone.png";
import N from "/Image/N.png";
import { SlLike } from "react-icons/sl";
import { BiSolidLike } from "react-icons/bi";
import { BiLike } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { addMovie } from "../Redux/favoriteSlice";
import { IoAddSharp } from "react-icons/io5";
import { IoCheckmark } from "react-icons/io5";
const DetailMovie = () => {
  const [data, setData] = useState({});
  const [isActive, setIsActive] = useState(true);
  const [isDislike, SetIsDislike] = useState(true);


  const { movieId } = useParams();
  const API_KEY = "c225375253b23d29d8fae3c63602c8f4";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [movieId]);

  const formatPercent = (value) => {
    return Math.round(value * 100) / 100;
  };

  const formatDate = (value) => {
    if (value) {
      return value.split("-")[0];
    } else {
      return "";
    }
  };


  const handleLike= () => {
    setIsActive(!isActive);
  };
  const handleDislike= () => {
    SetIsDislike(!isDislike);
  };

  const dispatch = useDispatch();
  const favoriteMovies = useSelector(state => state.favorite.movies);
  const isMovieInFavorites = favoriteMovies.some(favoriteMovie => favoriteMovie.id === data.id);

  const handleAddToFavorites = () => {
    if (!favoriteMovies.some(favoriteMovie => favoriteMovie.id === data.id)) {
      dispatch(addMovie(data))
    } else {
      console.log("Film zaten favori listenizde bulunuyor.");
    }
  };



  return (
    <div>
      <Navbar />

      <div className="relative bg-custom-bg bg-cover bg-no-repeat bg-center h-screen">
        <img
          src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
          alt="Arka Plan Resmi"
          className="w-full h-[700px] opacity-55 "
        />
        <div className="  w-full h-full bg-transparent top-0 absolute bg-gradient-to-r from-black to-transparent">
          <div className="absolute top-12 left-24  text-white w-[800px] text-7xl bg-transparent  ">
            <div className="flex flex-row h-12 bg-transparent items-center">
              <img src={N} alt="" className="bg-transparent" />
              <p className=" text-3xl  bg-transparent pl-3">ANIME</p>
            </div>
            <div className="flex flex-col h-24 bg-transparent w-[370px] items-center  ">
              {/* <img src={ds} alt="" className="bg-transparent" /> */}
            </div>
            <div className=" bg-transparent flex flex-row gap-3">
              <p className="bg-transparent text-base font-sans text-green-500 ">
                {formatPercent(data.vote_average)}% Match
              </p>
              <p className="text-base font-bold bg-transparent">
                
                {formatDate(data.release_date)}
              </p>
              <p className="border text-base font-bold bg-transparent w-6 h-6 items-center px-1 ">
                R
              </p>
              <p className=" bg-transparent text-base ">{data.runtime} dk</p>
            </div>

            <div className=" flex flex-row bg-transparent gap-4 py-4">
              <p className=" text-7xl font-bold bg-transparent">
                {data.title}
              </p>
            </div>
            <div className=" bg-transparent ">
              <p className=" bg-transparent text-[26px]  text-inherit leading-8 ">
                {data.overview}
              </p>
            </div>

            <div className=" flex flex-row  bg-transparent py-5 gap-4 items-center">
              <button className=" flex flex-row h-14 w-auto text-2xl font-bold bg-white text-black justify-center items-center py-4 px-5  gap-2  rounded-lg ">
                <img src={Play} alt="" className="bg-transparent " />
                Oynat
              </button>
              <button  onClick={handleAddToFavorites} className="flex flex-row h-14 w-auto text-2xl font-bord text-white  justify-center items-center py-4 px-5 gap-5 bg-white bg-opacity-30 rounded-lg ">
              
              {!isMovieInFavorites ?<IoAddSharp  className="bg-transparent text-3xl"/> :<IoCheckmark className="bg-transparent text-3xl " /> }
              
              <p className=" bg-transparent  text-white"> {!isMovieInFavorites ? "Listeme Ekle" : "Listeye Eklendi"}</p>


                {/* <img src={add} alt="" className="bg-transparent " />
                <p className=" bg-transparent  text-white">Listeme Ekle</p> */}
              </button>

              <button onClick={handleLike}  className={classNames({
                "border-2 rounded-[50%] w-14 h-14 flex items-center justify-center":true,
                " bg-black":!isActive,
                " bg-transparent ":isActive

              })}>
              {
                isActive? <BiLike  className="bg-transparent text-2xl  " />:<BiSolidLike  className="bg-transparent text-2xl " />
              }
              </button>
              <button onClick={handleDislike}  className={classNames({
                "border-2 rounded-[50%] w-14 h-14 flex items-center justify-center":true,
                "bg-black ":!isDislike,
                " bg-transparent ":isDislike

              })}>
               
              {
                isDislike? <BiLike  className="bg-transparent text-2xl  transform rotate-180  " />:<BiSolidLike  className="bg-transparent text-2xl  transform rotate-180 " />
              }
              </button>
            </div>

            <div className=" flex flex-col  bg-transparent   ">
              <p className="bg-transparent text-lg  flex flex-row gap-2 ">
                <h4 className="bg-transparent text-lg font-bold">Oyuncular:</h4>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Facilis, maiores?
              </p>
              <p className="bg-transparent text-lg  flex flex-row gap-2 ">
                <h4 className="bg-transparent text-lg font-bold">Tür:</h4>
                {data.genres &&
                  data.genres.map((genre, index) => (
                    <p className=" bg-transparent">{genre.name},</p>
                  ))}
              </p>
              <p className="bg-transparent text-lg  flex flex-row gap-2 ">
                <h4 className="bg-transparent text-lg font-bold">Bu Film:</h4>
                {data.tagline}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailMovie;

import React, { useContext, useState } from "react";

import RingLoader from "react-spinners/RingLoader";
import { GlobalContext } from "../Context/GlobalContext";
import { CiMenuBurger } from "react-icons/ci";

import { AiOutlineClose } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { toast } from "sonner";

const HomePage = () => {
  const { isim } = useContext(GlobalContext);

  const [isMenu, setMenu] = useState(false);
  const logout=()=>{
    localStorage.removeItem("name");
    localStorage.removeItem("password");
    toast.success("Çıkış yapıldı");
  
  }

  
  const togleMenu = () => {
    setMenu(!isMenu);
  };
  return (
    <div>
      <nav className="flex w-full bg-zinc-600  items-center justify-between ">
        <div className="pl-18 w-44  p-5">
          <img
            src="../../public/lock_11628517.png"
            alt=""
            className="w-16 h-16 "
          />
        </div>

        <div className=" md:static hidden md:block   bg-zinc-600  md:min-h-fit left-0 top-16  items-center w-auto ">
          <ul className="  flex flex-row items-center gap-[6vw]  font-light text-xl px-5  ">
            <li className="p-2 text-white hover:text-orange-500 hover:border-b-2 hover:bottom-3 hover:border-orange-500 ">
              <Link to="/">Anasayfa</Link>
            </li>
            <li className="p-2 text-white hover:text-orange-500 hover:border-b-2 hover:bottom-3 hover:border-orange-500 ">
              <Link to="/about">Hakkımızda</Link>
            </li>
            <li className="p-2 text-white hover:text-orange-500 hover:border-b-2 hover:bottom-3 hover:border-orange-500 ">
              <Link to="/contact">İletişim</Link>
            </li>
          </ul>
        </div>

        <div className=" flex items-center w-1.5/4 justify-normal  ">
          <img
            className="w-12 h-12 rounded-full  "
            src="../../public/user_10922418.png"
            alt=""
          />

          <label
            className="  text-white text-xl font-light text-start  pl-2 "
            htmlFor=""
          >
            {isim}
          </label>
          <div className="p-4 flex items-center justify-between gap-5 ">
            <NavLink to="/">
              <button
                onClick={logout}
                className="w-24 h-10  text-white bg-orange-500 items-center rounded-full hover:text-white hover:opacity-75 "
              >
                Çıkış yap
              </button>
            </NavLink>
            {isMenu ? (
              <AiOutlineClose
                onClick={togleMenu}
                className="text-3xl font-light    md:hidden"
              />
            ) : (
              <CiMenuBurger
                onClick={togleMenu}
                className="text-3xl cursor-pointer  md:hidden"
              />
            )}
          </div>
        </div>
      </nav>
      {isMenu && (
        <div className="md:hidden">
          <div className="  bg-zinc-600  min-h-fit left-0 top-16  items-center w-full ">
            <ul className="flex flex-col  items-center gap-[6vw]  font-light text-xl px-5  ">
              <li className="p-2 text-white hover:text-orange-500 hover:border-b-2 hover:bottom-3  hover:border-orange-500 ">
                <Link to="/">Anasayfa</Link>
              </li>
              <li className="p-2 text-white hover:text-orange-500 hover:border-b-2 hover:bottom-3 hover:border-orange-500 ">
                <Link to="/about">Hakkımızda</Link>
              </li>
              <li className="p-2 text-white hover:text-orange-500 hover:border-b-2 hover:bottom-3 hover:border-orange-500 ">
                <Link to="/contact">İletişim</Link>
              </li>
            </ul>
          </div>
        </div>
      )}

      <div className=" w-auto h-[400px]  items-center flex flex-col pt-28">
        <RingLoader
          className=" bg-black-200 "
          color={"#36d7b7"}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />

        <h1 className=" font-extralight  text-orange-500 text-6xl p-4 ">
          Welcome {isim} ;)
        </h1>
      </div>
    </div>
  );
};

export default HomePage;

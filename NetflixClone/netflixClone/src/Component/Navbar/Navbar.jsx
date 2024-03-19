import React, { useState } from "react";
import NavImage from "/Image/Logo.png";
import Bell from "/Image/icone/Bell.png";
import Search from "/Image/icone/Search.png";
import Gift from "/Image/icone/Gift.png";
import Arrow from "/Image/icone/Arrow.png";
import Sukran from "/Image/Şükran.png";
import { Link } from "react-router-dom";
import Dropdown from "../dropdown/Dropdown";

const Navbar = () => {

  const [selectedMenu, setSelectedMenu] = useState(null);

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };
  return (
    <nav className="flex flex-row w-[1440px] h-[1024]  items-start py-2 px-16 justify-between">
      <div className="flex flex-row py-3 ">
        <img src={NavImage} alt="" className="w-28 h-7 " />

        <ul className="flex flex-row gap-3 px-12  ">
          <Link to="/homePage">
            <li    className={selectedMenu === "Ana Sayfa" ? "text-[#E5E5E5] font-extrabold text-sm" : "text-[#E5E5E5] text-sm"}
          onClick={() => handleMenuClick("Ana Sayfa")}>Ana Sayfa</li>
          </Link>
          <Link to="/homePage">
            <li className={selectedMenu === "Diziler" ? "text-[#E5E5E5] font-extrabold text-sm" : "text-[#E5E5E5] text-sm"}
          onClick={() => handleMenuClick("Diziler")}>Diziler</li>
          </Link>
          <Link to="/homePage">
          <li className={selectedMenu === "Filmler" ? "text-[#E5E5E5] font-extrabold text-sm" : "text-[#E5E5E5] text-sm"}
          onClick={() => handleMenuClick("Filmler")}>Filmler</li>
          </Link>
          <Link to="/homePage">
          <li className={selectedMenu === "Yeni ve Popiler" ? "text-[#E5E5E5] font-extrabold text-sm" : "text-[#E5E5E5] text-sm"}
          onClick={() => handleMenuClick("Yeni ve Popiler")}>Yeni ve Popiler</li>
          </Link>
          <Link to="/mylist">
            <li className={selectedMenu === "Listem" ? "text-[#E5E5E5] font-extrabold text-sm" : "text-[#E5E5E5] text-sm"}
          onClick={() => handleMenuClick("Listem")}>Listem</li>
          </Link>
        </ul>
      </div>
      <div className=" flex flex-row gap-5 items-center py-3 ">
        <img src={Search} alt="" className="w-5 h-5  " />
        <p className="font-sans "> Çocuk</p>

        <img src={Gift} alt="" className="w-5 h-5  " />
        <img src={Bell} alt="" className="w-5 h-5  " />

        {/* <div className=" flex flex-row gap-2 items-center ">
          <img src={Sukran} alt="" className="w-8 h-8" />
          <img src={Arrow} alt="" className="w-4 h-2  " />
        </div> */}

        <div className=" flex flex-row gap-2 items-center ">
          <Dropdown />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import { Menu } from "@headlessui/react";
import { AiOutlineUser } from "react-icons/ai";
import Arrow from "/Image/icone/Arrow.png";
import Sukran from "/Image/Şükran.png";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { PiUserSquareLight } from "react-icons/pi";
import { TiPencil } from "react-icons/ti";




const Dropdown = () => {

  return (
    <Menu >
     
      <Menu.Button className="flex flex-row gap-2 items-center">
   
        <img src={Sukran} alt="" className="w-8 h-8" />
        <img src={Arrow} alt="" className="w-4 h-2" />
      </Menu.Button>

      <Menu.Items className=" flex flex-col top-16 right-0 absolute z-10 w-44 bg-black p-3 gap-3 rounded-sm ">
        <Menu.Item className="flex flex-row items-center gap-2 bg-black">
          {({ active }) => (
            <a
              className={`${active && "opacity-50"}`}
              href=""
            >
                <TiPencil className="bg-transparent w-6 h-6" />
             Profil Yönetimi
            </a>
          )}
        </Menu.Item>
        <Menu.Item className="flex flex-row items-center gap-2  bg-black">
          {({ active }) => (
            <a
              className={`${active && "opacity-50"}`}
              href=""
            >
                <PiUserSquareLight  className="bg-transparent w-6 h-6" />
             Profil Aktar
            </a>
          )}
        </Menu.Item>
        <Menu.Item className="flex flex-row items-center gap-2  bg-black">
          {({ active }) => (
            <a
              className={`${active && "opacity-50"}`}
              href=""
            >
                <AiOutlineUser  className="bg-transparent w-6 h-6"/>
              Hesap
            </a>
          )}
        </Menu.Item>
        <Menu.Item className="flex flex-row items-center gap-2  bg-black">
          {({ active }) => (
            <a
              className={`${active && "opacity-50"}`}
              href=""
            >
                <AiOutlineExclamationCircle   className="bg-transparent w-6 h-6"/>
             Yardım Merkezi
            </a>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
};

export default Dropdown;

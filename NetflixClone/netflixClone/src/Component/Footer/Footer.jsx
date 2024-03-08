import React from "react";
import Facebook from "/Image/icone/facebook.png";

import Instagram from "/Image/icone/instagram.png";
import Twitter from "/Image/icone/twitter.png";
import Youtube from "/Image/icone/youtube.png";

const Footer = () => {
  return (
    <div className="px-72 py-14   w-full h-80  gap-5">
      
      <div className="flex flex-row gap-5">
        <img src={Facebook} alt=""/>
        <img src={Instagram} alt="" />
        <img src={Twitter} alt="" />
        <img src={Youtube} alt="" />
      </div>
      <div className=" flex flex-row justify-between py-5 text-sm leading-6 ">
        <ul >
          
          <li className="text-[#808080] bg-transparent "><a href="/users" className="hover:text-slate-100">Seslendirme ve Alt Yazı</a></li>
          <li className="text-[#808080] "><a href="">Medya Merkezi</a></li>
          <li className="text-[#808080] ">Gizlilik</li>
          <li className="text-[#808080]">Bize Ulaşın</li>
        </ul>
        <ul>
          <li className="text-[#808080] ">Sesli Betimleme</li>
          <li className="text-[#808080] ">Yatırımcı İlişkileri</li>
          <li className="text-[#808080] " >Yasal Hükümler</li>
        </ul>
        <ul>
          <li className="text-[#808080] " >Yardım Merkezi</li>
          <li className="text-[#808080] " >İş İmkanları</li>
          <li className="text-[#808080] " >Çerez Tercihleri</li>
        </ul>
        <ul>
          <li className="text-[#808080] " >Hediye Kartları</li>
          <li className="text-[#808080] " >Kullanım Koşulları</li>
          <li className="text-[#808080] " >Kurumsal Bilgiler</li>
        </ul>
      </div>

      <div className="flex flex-row justify-between py-5 ">
        <button className=" text-[#808080] border border-[#808080]  p-2 text-base  hover:text-white hover:border-white " >
            Hizmet Kodu
        </button>
      </div>
      <div>
        <a className=" text-[#808080] "> © 1997-2021 Netflix, Inc. [i-062d573a0ee099242]</a>
      </div>
    </div>
  );
};

export default Footer;

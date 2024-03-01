import React from "react";
import { Link } from "react-router-dom";
import { SiAiqfome } from "react-icons/si";

const Page404 = () => {
  return (
    <div className="flex flex-col  items-center mt-11">
      <div className="flex font-extrabold text-orange-600 font-mono  mt-52  ">
        <h1 className="text-9xl font-black  flex font-mono">4  <SiAiqfome className="p-2" /> 4</h1>

      </div>

      <label htmlFor="">Upsss Bir Problem Oldu!</label>

      <Link to="/Home" className="text-white text-6xl font-mono">
        Ana sayfaya Dön
      </Link>
    </div>
  );
};

export default Page404;

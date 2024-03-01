import React, { useEffect, useState } from "react";

import SyncLoader from "react-spinners/ClipLoader";
import HomePage from "./HomePage";

const Loading = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, [1000]);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="flex flex-col justify-center">
          <span
            className="material-symbols-outlined   "
            style={{ color: "yellow", fontSize: 250 }}
          >
            lock_open_right
          </span>
          <div className="">
            <SyncLoader color="orange" />
          </div>

          <h1 className=" flex justify-center  text-5xl text-blue-300 font-extralight">
            Tüm Kilitleri Açtın Tebrikler 
          </h1>
        </div>
      ) : (
        <HomePage />
      )}
    </div>
  );
};

export default Loading;

import React, { useEffect, useState } from "react";

import NavImage from "/Image/Logo.png";
import HeroImage from "../../../public/Image/HeroImage.png";
import { useDispatch, useSelector } from "react-redux";
import { loginUser ,loginSuccess} from "../Redux/AuthSlice";
import { Link, Navigate, useNavigate } from "react-router-dom";


const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleSubmit = async (e) => {
    e.preventDefault();
dispatch(loginSuccess(), loginUser())

    try {
      const response = dispatch(loginUser({ userName, password }));
      if (response.status) {
        
        console.log("Giriş Başarılı");
        
        
      } else {
        console.error("Giriş başarısız.");
      }
    } catch (error) {
      
      console.error("Giriş hatası:", error);
    }

  };

  return (
    <div className="relative flex flex-col bg-custom-bg bg-cover bg-no-repeat bg-center h-[1314px]">
      <img
        src={HeroImage}
        alt="Arka Plan Resmi"
        className="w-[1512px] h-[1114px] "
      />

      <div className="absolute felx flex-col  justify-center items-center pt-9 pl-9  bg-transparent  ">
        <div className=" bg-transparent">
          <img src={NavImage} alt="" className="w-40 h-12   bg-transparent" />
        </div>
      </div>
      <div className="absolute flex flex-row justify-center items-center w-full h-[1000px] bg-black bg-opacity-5">
        <div className="flex flex-col gap-5 w-[450px] h-[660px] py-16 px-20 bg-black bg-opacity-85 ">
          <div className="  flex flex-row  top-0 bg-transparent ">
            <label
              htmlFor=""
              className=" text-white text-3xl font-bold  pb-3 bg-transparent "
            >
              Sign In
            </label>
            <p>
            kminchelle
              <br />0lelplR
            </p>
          </div>
          <div className=" flex flex-col gap-5 justify-center items-center  bg-black bg-opacity-5">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 justify-center items-center  bg-black bg-opacity-5"
            >
              <input
                type="text"
                placeholder="Email or phone number"
                className="w-80 h-12 bg-[#333333]  placeholder-[#8c8c8c] px-5 py-3 text-lg  rounded-sm  focus:outline-none "
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className="w-80 h-12 bg-[#333333]  placeholder-[#8c8c8c] px-5 py-3 text-lg rounded-sm focus:outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="submit"
                className="w-80 h-12 bg-[#E50914]  text-base rounded-sm "
              >
                Sign In
              </button>

              <div className="bg-transparent flex flex-row ">
                <div className="flex flex-row bg-transparent pr-16 ">
                  <input
                    type="checkbox"
                    class="h-5 w-5 bg-[#737373] bg-transparent  "
                  />
                  <label
                    htmlFor=""
                    className=" bg-transparent px-2 text-sm text-[#737373]"
                  >
                    Remember me
                  </label>
                </div>
                <label
                  htmlFor=""
                  className="bg-transparent text-sm  text-[#737373]"
                >
                  Need Help?
                </label>
              </div>
            </form>

            {/* {isLoggedIn && <Navigate to="/users" />} */}
            <div className="bg-transparent w-[314px] left-0 pt-16 ">
              <label
                htmlFor=""
                className=" text-[#737373] flex flex-row bg-transparent"
              >
                New to Netflix?
                <p className=" text-white px-2 bg-transparent ">Sign up now.</p>
              </label>

              <div className=" bg-transparent py-4 ">
                <label
                  htmlFor=""
                  className="text-[#737373] bg-transparent text-sm  "
                >
                  This page is protected by Google reCAPTCHA to ensure you're
                  not a bot.
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-72 py-14   w-full h-[273px]  gap-5">
        <div className=" flex flex-row justify-between py-5 text-sm leading-6  bg-transparent">
          <ul>
            <li className="text-[#808080] ">Seslendirme ve Alt Yazı</li>
            <li className="text-[#808080] ">Medya Merkezi</li>
            <li className="text-[#808080] ">Gizlilik</li>
            <li className="text-[#808080] ">Bize Ulaşın</li>
          </ul>
          <ul>
            <li className="text-[#808080] ">Sesli Betimleme</li>
            <li className="text-[#808080] ">Yatırımcı İlişkileri</li>
            <li className="text-[#808080] ">Yasal Hükümler</li>
          </ul>
          <ul>
            <li className="text-[#808080] ">Yardım Merkezi</li>
            <li className="text-[#808080] ">İş İmkanları</li>
          </ul>
          <ul>
            <li className="text-[#808080] ">Hediye Kartları</li>
            <li className="text-[#808080] ">Kullanım Koşulları</li>
          </ul>
        </div>

        <div className="flex flex-row justify-between py-5 ">
          <button className=" text-[#808080] border border-[#808080]  p-2 text-base">
            English
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

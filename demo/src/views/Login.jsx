import { useContext, useEffect, useState } from "react";
import {  Navigate } from "react-router-dom";
import { GlobalContext } from "../Context/GlobalContext";
import { useFormik } from "formik";
import { toast } from "sonner";
import { ReactDOM } from "react";

const Login = (props) => {
  const { isim, isLogin, setLogin ,password} = useContext(GlobalContext);
  const [message ,setMessage]=useState("")


useEffect(() => {
  
if(localStorage.getItem("name"=="")){
 
  console.log("useEffect çalıştı");
}
},[])

  const login = (values) => {
    localStorage.setItem("name", values.name);
    localStorage.setItem("password", values.password);

    const storeUserName = localStorage.getItem("name");
    const storeUserPassword = localStorage.getItem("password");

    if (storeUserName === isim && storeUserPassword ==password) {
      setLogin(true);
      toast.success("Giriş Yapıldı.");
    } else {
      toast.error("Kullanıcı adınız ve ya Şifreniz yanlış!");
    }
  };


  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      name: "",
      password: "",
    },
    onSubmit: (values) => {
      login(values);
    },
  });

  return (
    <div className=" ">
      <div className="flex  md:flex-row  justify-center items-center mt-20  ">
        <div className=" p-20 md:static  ">
          <span
            className="material-symbols-outlined"
            style={{ color: "blue", fontSize: 250 }}
          >
            lock
          </span><br/>
          <label htmlFor="" className="text-2xl font-extralight text-orange-500  ">
            Hayatınızdaki Tüm Kilitleri Açımaya Son 1 Adım...
          </label> 
        </div>

        <div className="flex md:flex-col  p-24 rounded-3xl bg-slate-800">
          <form onSubmit={handleSubmit}>
            <div className=" flex flex-col justify-center items-center">
              <div className="flex flex-col items-start ">
                <div className="flex flex-row justify-center items-center pl-28">
                  <label htmlFor="" className="font-bold text-5xl text-orange-500">
                    Login
                  </label>
                </div>
                <label
                  htmlFor=""
                  className="text-white text-lg font-light p-2  "
                >
                  Kullanıcı Adı
                </label>
                <input
                  type="text"
                  id="name"
                  value={values.name}
                  onChange={handleChange}
                  className="w-80 h-14 rounded-full bg-slate-200 p-4 focus:outline-none "
                  required
                />
                <label
                  htmlFor=""
                  className="text-white text-lg font-light p-2  "
                >
                  Şifre
                </label>

                <input
                  type="password"
                  id="password"
                  value={values.password}
                  onChange={handleChange}
                  className="w-80 h-14 rounded-full bg-slate-200 p-4 mt-2 focus:outline-none "
                  required
                />

                <button
                  type="submit"
                  className="w-80 h-14 bg-orange-500 rounded-full mt-4 text-xl hover:opacity-85 hover:text-white "
                >
                  Giriş yap
                </button>
              </div>
            </div>
          </form>
          {isLogin && <Navigate to="/loading" />}
        </div>
      </div>
    </div>
  );
};

export default Login;

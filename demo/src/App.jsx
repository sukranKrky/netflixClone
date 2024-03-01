import { useState } from "react";
import "./App.css";
import Home from "./views/Home";
import Login from "./views/Login";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Loading from "./views/Loading";
import Layout from "./views/Layout";
import Page404 from "./views/Page404";
import HomePage from "./views/HomePage";


function App() {
 

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/homePage" element={<HomePage/>}/>
        <Route path="*" element={<Page404 />} />
      </Routes>

    </>
  );
}

export default App;

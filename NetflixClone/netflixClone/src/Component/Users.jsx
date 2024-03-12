import React from "react";
import NavImage from "/Image/Logo.png";
import UserCard from "./UserCard";

const Users = () => {
  return (
    <div className="">
      <nav className="flex w-[1440px] h-[1024]  items-start py-5 px-28 justify-between">
        <div className="py-5 ">
          <img src={NavImage} alt="" className="w-30 h-6 " />
        </div>
      </nav>

      <UserCard />
    </div>
  );
};

export default Users;

import React from "react";
import { MdOutlineExplore } from "react-icons/md";
import { MdPeopleOutline } from "react-icons/md";
import { MdPersonOutline } from "react-icons/md";
import { MdOutlineLeaderboard } from "react-icons/md";
import { BsListTask } from "react-icons/bs";
import { MdOutlineCreate } from "react-icons/md";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { MdOutlineSettings } from "react-icons/md";
import { MdOutlineLogout } from "react-icons/md";

const SideBar = () => {
  return (
    <div className="w-[60px] bg-[#F5F5F5F5] border-r border-gray-300">
      <div className="flex flex-col  text-[25px] items-center h-[100vh]">
        <div className="flex flex-col gap-8 mt-10">
          <MdOutlineExplore />
          <MdPersonOutline />
          <MdPeopleOutline />
        </div>

        <div className="flex flex-col gap-8 mt-14">
          <MdOutlineLeaderboard />
          <BsListTask />
          <MdOutlineCreate />
        </div>

        <div className="flex flex-col gap-8 mt-14">
          <MdOutlineFavoriteBorder />
          <MdOutlineSettings />
          <MdOutlineLogout />
        </div>
      </div>
    </div>
  );
};

export default SideBar;

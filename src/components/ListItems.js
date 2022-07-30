import React from "react";
import Angela from "../images/angela.png";
import angela from "../images/angela.png";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { AiOutlineComment } from "react-icons/ai";
import { AiOutlineUserAdd } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdPeopleOutline } from "react-icons/md";

const ListItems = () => {
  return (
    <div>
      <div className="flex gap-52 bg-[#F5F5F5F5] p-2 border-t border-b border-gray-300 items-center">
        <div className="flex gap-6">
          <img src={Angela} alt="angela" width={80} height={80} />
          <div>
            <p className="text-lg ">Python looping through in array</p>
            <p>Easy</p>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col">
          <MdPeopleOutline className="text-2xl text-gray-400" />
          <p>10,000 people solved</p>
        </div>
        <div className="flex items-center gap-10">
          <div className="flex items-center flex-col">
            <img src={angela} width={40} height={40} className="mr-0" />
            <p>By Angela </p>
          </div>
          <div className="flex flex-col text-2xl text-gray-400">
            <MdOutlineFavoriteBorder />
            <AiOutlineComment />
            <AiOutlineUserAdd />
          </div>
        </div>
        <div className="flex items-center justify-center text-3xl text-gray-400">
          <MdKeyboardArrowRight />
        </div>
      </div>
    </div>
  );
};

export default ListItems;

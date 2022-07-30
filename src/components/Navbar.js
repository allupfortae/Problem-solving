import React from "react";
import Logo from "../images/Central.png";
import { AiOutlineSearch } from "react-icons/ai";
import { BsTerminal } from "react-icons/bs";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import Angela from "../images/angela.png";

const Navbar = () => {
  return (
    <>
      <div className="mt-5">
        <div className="flex  items-center justify-between">
          <div className="flex items-center">
            <img src={Logo} />
            <div className="relative">
              <AiOutlineSearch className="absolute top-8 left-2 text-lg -translate-y-6 " />
              <input
                type="search"
                placeholder="Search for anything"
                className=" py-1 px-10 rounded-[15px] outline-none border bg-[#F5F5F5F5] pr-3"
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 mr-4 text-gray-500">
              <BsTerminal className="border-r border-gray-500 pr-2 text-[30px]" />
              <MdOutlineModeEditOutline className="border-r border-gray-500 pr-2 text-[30px]" />
              <AiOutlineMail className="border-r border-gray-500 pr-2 text-[30px]" />
            </div>
            <div className="flex items-center gap-1">
              <img
                src={Angela}
                alt="Angela"
                width={40}
                height={30}
                className="mr-3"
              />
              <span>Angela</span>
              <RiArrowDropDownLine className="text-[30px]" />
              <div>
                <p className="text-lg mr-10 text-blue-500 bg-[#F5F5F5F5] font-semibold p-3 rounded-[15px]">
                  Web Devlopment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

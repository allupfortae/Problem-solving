import React, { useState } from "react";
import SideBar from "./SideBar";
import { AiOutlineSearch } from "react-icons/ai";
import ListItems from "./ListItems";
import { MdLinkedCamera } from "react-icons/md";
import { TiTimes } from "react-icons/ti";

const MainContent = () => {
  const [updatelist, setUpDateList] = useState("");

  const updateHandler = () => {
    setUpDateList();
  };

  const listBar = [
    "HTML",
    "CSS",
    "JavaScript",
    "Python",
    "Java",
    "Swift",
    "C#",
    "C++",
    "R",
    "SQL",
  ];
  return (
    <>
      <div className="grid grid-cols-2 w-[120px]">
        <SideBar />
        <div className="w-[1380px] relative">
          <AiOutlineSearch
            className="absolute top-[30px] right-0 -translate-x-[215px]
					translate-y-[20px] text-lg"
          />
          <div className="mt-3">
            <div className="flex items-center justify-between ">
              <div className="ml-10 relative">
                <TiTimes className="absolute top-[65px]  right-[10px] text-lg" />
                <h1 className="font-semibold text-2xl mb-5">Pick an PGL</h1>
                <p className="bg-[#F5F5F5] text-center p-2 text-base rounded-[15px]">
                  {updatelist}
                </p>
              </div>
              <input
                type="search"
                placeholder="Search for PGL"
                className="py-1 px-8 rounded-[15px] outline-none border bg-[#F5F5F5F5] pr-3 mr-5"
              />
            </div>
            <ul className="grid grid-cols-10 text-center  mt-5 border-t border-gray-300 bg-[#F5F5F5F5] p-4">
              {listBar.map((list) => {
                return (
                  <li
                    className="cursor-pointer active "
                    onClick={updateHandler}
                    key={list.index}
                  >
                    {list}
                  </li>
                );
              })}
            </ul>
          </div>
          <ListItems />
          <ListItems />
          <ListItems />
          <ListItems />
          <ListItems />
          <ListItems />
          <ListItems />
          <ListItems />
          <ListItems />
          <ListItems />
          <ListItems />
          <ListItems />
        </div>
      </div>
    </>
  );
};

export default MainContent;

import React from "react";
import SideBar from "./SideBar";
import { AiOutlineSearch } from "react-icons/ai";
import ListItems from "./ListItems";

const MainContent = () => {
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
          <AiOutlineSearch className="absolute top-[30px] right-0 -translate-x-[215px] text-lg" />
          <div className="mt-5">
            <div className="flex items-center justify-between ">
              <h1 className="font-semibold text-3xl  ml-10">Pick an PGL</h1>
              <input
                type="search"
                placeholder="Search for PGL"
                className="py-1 px-8 rounded-[15px] outline-none border bg-[#F5F5F5F5] pr-3 mr-5"
              />
            </div>
            <ul className="grid grid-cols-10 text-center  mt-5 border-t border-gray-300 bg-[#F5F5F5F5] p-4">
              {listBar.map((list) => {
                return <li>{list}</li>;
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

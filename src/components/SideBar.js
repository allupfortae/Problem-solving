import React from "react";
import Logo from "../images/Central.png";

const SideBar = () => {
  return (
    <div className="h-[100vh] w-[600px] card">
      <img
        className="black ml-auto mr-3 my-auto mt-20"
        src={Logo}
        alt="Central Logo"
      />
    </div>
  );
};

export default SideBar;

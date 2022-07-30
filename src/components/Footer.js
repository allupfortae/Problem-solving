import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <div className="flex items-center justify-around mt-10 ">
        <div>
          <div className="flex items-center mb-3 gap-2 ">
            <BsFillCheckCircleFill className="text-blue-500 text-2xl" />
            <h1 className="font-bold text-xl ">Join The Community</h1>
          </div>
          <p className="w-[200px] text-sm">
            A growing community of problem solving and software engineer
          </p>
        </div>

        <div>
          <div className="flex items-center mb-3 gap-2">
            <BsFillCheckCircleFill className="text-blue-500 text-2xl" />
            <h1 className="font-bold text-xl ">Become A Pro</h1>
          </div>
          <p className="w-[200px] text-sm">
            With over 300+ problems you can train your self with hands-on and in
            groups
          </p>
        </div>

        <div>
          <div className="flex items-center mb-3 gap-2">
            <BsFillCheckCircleFill className="text-blue-500 text-2xl" />
            <h1 className="font-bold text-xl">Break In To Tech</h1>
          </div>
          <p className="w-[200px] text-sm">
            Solve problems that will help you for interviews and fundamentals
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

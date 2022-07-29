import React from "react";
import Logo from "../images/Central.png";

const Signup = () => {
  return (
    <div>
      <div className="flex items-center flex-col ">
        <img src={Logo} alt="Central Logo" />
        <form className=" flex flex-col card h-[700px] py-3 w-[500px] items-center gap-8 rounded-[10px] mt-6">
          <p className="text-2xl text-blue-500 mt-3">
            Advance in problem solving
          </p>

          <input
            type="text"
            placeholder="Username"
            className="px-3 py-2 border-b border-black outline-none w-[300px] ml-2"
          />
          <input
            type="text"
            placeholder="Fullname"
            className="px-3 py-2 border-b border-black outline-none w-[300px] ml-2"
          />
          <input
            type="email"
            placeholder="Email"
            className="px-3 py-2 border-b border-black outline-none w-[300px] ml-2"
          />
          <input
            type="password"
            placeholder="Password"
            className="px-3 py-2 border-b border-black outline-none w-[300px] ml-2"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="px-3 py-2 border-b border-black outline-none w-[300px] ml-2"
          />
          <div className="flex flex-col items-center">
            <p>
              Already have an account?
              <span className="font-bold text-blue-500"> Log in</span>
            </p>
            <button className="bg-blue-500 text-white px-3 py-2 w-[100px] mt-5">
              Sign up
            </button>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-sm">
              I accept the
              <span className="text-blue-500"> Terms of Service</span> and the
              <span className="text-blue-500"> Pirvacy Policy</span>
            </span>
            <span className="text-sm mt-2">
              I will like to receive emails regarding updates
            </span>
          </div>
        </form>
        <div className="flex  items-center gap-10 mt-5">
          <a href="#">Terms of Service</a>
          <a href="#">Contacts</a>
          <a href="#">Pirvacy Policy</a>
        </div>
        <p className="mt-4">&copy; 2022 Central</p>
      </div>
    </div>
  );
};

export default Signup;

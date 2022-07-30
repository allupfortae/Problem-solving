import React, { useState } from "react";
import Logo from "../images/Central.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUserName] = useState("");
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const [confrimpassword, setConfirmPassword] = useState("");
  const navigate = useNavigate;

  const submitHandler = (e) => {
    setUserName("");
    setFullName();
    setEmail("");
    setPassWord("");
    setConfirmPassword("");
    e.preventDefault();
    navigate("/signedin");
  };

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
            className="px-3 py-2 border-b border-black outline-none w-[300px] ml-2
            "
            onChange={(e) => setUserName(e.target.value)}
            value={username}
          />
          <input
            type="text"
            placeholder="Fullname"
            className="px-3 py-2 border-b border-black outline-none w-[300px] ml-2"
            onChange={(e) => setFullName(e.target.value)}
            value={fullname}
          />
          <input
            type="email"
            placeholder="Email"
            className="px-3 py-2 border-b border-black outline-none w-[300px] ml-2"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            placeholder="Password"
            className="px-3 py-2 border-b border-black outline-none w-[300px] ml-2"
            onChange={(e) => setPassWord(e.target.value)}
            value={password}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="px-3 py-2 border-b border-black outline-none w-[300px] ml-2"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confrimpassword}
          />
          <div className="flex flex-col items-center">
            <p>
              Already have an account?
              <span className="font-bold text-blue-500"> Log in</span>
            </p>
            <button
              className="bg-blue-500 text-white px-3 py-2 w-[100px] mt-5 "
              onClick={submitHandler}
            >
              Sign up
            </button>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-sm">
              I accept the
              <a className="text-blue-500 cursor-pointer"> Terms of Service </a>
              and the
              <a className="text-blue-500 cursor-pointer"> Pirvacy Policy</a>
            </span>
            <span className="text-sm mt-2">
              I will like to receive emails regarding updates
            </span>
          </div>
        </form>
        <div className="flex  items-center gap-10 mt-5">
          <a className="hover:text-blue-500" href="#">
            Terms of Service
          </a>
          <a className="hover:text-blue-500" href="#">
            Contacts
          </a>

          <a className="hover:text-blue-500" href="#">
            Pirvacy Policy
          </a>
        </div>
        <a href="#" className="mt-4 hover:text-blue-500">
          &copy; 2022 Central
        </a>
      </div>
    </div>
  );
};

export default Signup;

import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="flex items-center justify-around mt-10 ">
        <div>
          <h1 className="font-bold text-xl mb-3">Join The Community</h1>
          <p className="w-[200px] text-sm">
            A growing community of problem solving and software engineer
          </p>
        </div>
        <div>
          <h1 className="font-bold text-xl mb-3">Become A Pro</h1>
          <p className="w-[200px] text-sm">
            With over 300+ problems you can train your self with hands-on and in
            groups
          </p>
        </div>
        <div>
          <h1 className="font-bold text-xl mb-3">Break In To Tech</h1>
          <p className="w-[200px] text-sm">
            Solve problems that will help you for interviews and fundamentals
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

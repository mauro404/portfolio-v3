import React from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <footer className="flex flex-row items-center justify-between  text-gray-400 max-w-7xl mx-auto p-5 mt-auto w-full">
      <div className="text-xs">@Mauro Mansano dos Santos. 2023</div>
      <div>
        <SocialIcon
          url="https://github.com/mauro404/"
          target="_blank"
          fgColor="rgb(156 163 175)"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/mauromsantos/"
          target="_blank"
          fgColor="rgb(156 163 175)"
          bgColor="transparent"
        />
        {/* <SocialIcon
          url="https://www.chess.com/member/zapatao"
          target="_blank"
          fgColor="white"
          bgColor="transparent"
        /> */}
      </div>
    </footer>
  );
};

export default Footer;

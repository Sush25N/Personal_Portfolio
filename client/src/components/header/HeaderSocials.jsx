import React from "react";
import {BsLinkedin} from "react-icons/bs";
import {BsGithub} from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="www.linkedin.com/in/sushrut-gabhane-5a3695196" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/Sush25N">
        <BsGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;

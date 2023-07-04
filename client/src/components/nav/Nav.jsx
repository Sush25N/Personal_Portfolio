import React from "react";
import "./nav.css";
import {AiOutlineHome} from "react-icons/ai";
import {AiOutlineUser} from "react-icons/ai";
import {GiSpellBook} from "react-icons/gi";
import {TbMessages} from "react-icons/tb";

const Nav = () => {
  return (
    <div>
      <a href="#">
        <AiOutlineHome />
      </a>
      <a href="#about">
        <AiOutlineUser />
      </a>
      <a href="#experience">
        <GiSpellBook />
      </a>
      <a href="#contact">
        <TbMessages />
      </a>
    </div>
  );
};

export default Nav;

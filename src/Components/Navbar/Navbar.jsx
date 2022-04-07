import { useState } from "react";
import { Link } from "react-router-dom";
import { Nav_Button } from "../Button/Button.jsx";
import { Menu } from "@headlessui/react";

const logo = require("../../images/logo.jpg");
export function Navbar() {
  return (
    <div className="container max-w-full bg-black text-white font-sans">
      <div className="flex flex-row justify-between py-4">
        <Link to={"/"}>
          <div className="flex justify-start pt-2">
            <img src={logo} className="rounded md:h-10 w-40 md:w-auto " />
            <div className="hidden md:flex py-2 px-2 font-semibold">
              Luciano Benavides
            </div>
          </div>
        </Link>

        <div className="md:justify-end justify-center px-5 font-semibold flex flex-wrap items-baseline">
          <Link to={"/experience"}>
            <div className="flex py-2 px-5">Experience</div>
          </Link>
          <Link to={"/skills"}>
            <div className="flex py-2 px-5">Skills</div>
          </Link>
          <Link to={"/contact"}>
            <div className="flex py-2 px-5">Contact</div>
          </Link>
          <a
            href={
              "https://drive.google.com/file/d/14zEVGnejOPntjqnLEL0zh3EHpOq9ktdq/view?usp=sharing"
            }
            target="_blank"
          >
            <div className="flex py-2 px-5">
              <Nav_Button name={"Resume"} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

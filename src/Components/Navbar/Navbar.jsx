import { Link } from "react-router-dom";
import { Nav_Button } from "../Button/Button.jsx";

const logo = require("../../images/logo.jpg");
export function Navbar() {
  return (
    <div className="container max-w-full bg-black text-white font-sans">
      <div className="flex flex-row justify-between py-4">
        <Link to={"/"}>
          <div className="flex justify-start">
            <img src={logo} className="rounded h-10 ml-auto" />
            <div className="flex py-2 px-2 font-semibold">
              Luciano Benavides
            </div>
          </div>
        </Link>
        <div className="flex justify-end px-5 font-semibold">
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
            <Nav_Button name={"Resume"} />
          </a>
          {/* <div className="flex py-2 px-5 rounded bg-white text-black">
            Resume
          </div> */}
        </div>
      </div>
    </div>
  );
}

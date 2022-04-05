import { Navbar } from "../Navbar/Navbar";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
const humble_landing = require("../../images/HumbleFood/Landing.png");
const dogs_landing = require("../../images/Dogs/landing.png");

export function Landing() {
  return (
    // <div className="container max-w-full h-screen bg-white text-black">
    //   <div className="flex flex-col h-screen">
    //     <div>
    //       <Navbar />
    //     </div>
    //     <div className="flex flex-row flex-wrap h-screen">
    //       <div className="basis-1/2 self-center flex-col  ">
    //         <div className="w-2/3 m-4 text-5xl">Luciano Benavides</div>
    //         <div className="w-5/6 m-4  text-gray-400 text-3xl">
    //           Full Stack Developer
    //         </div>
    //       </div>
    //       {/* <div className="basis-1/2 flex flex-col">
    //         <div className=" h-1/2  align-text-bottom bg-slate-400">hola</div>
    //         <div className="h-1/2 bg-slate-400">hila2</div>
    //       </div> */}
    //       <div></div>
    //     </div>
    //   </div>
    // </div>
    <div className="flex flex-col h-screen max-h-screen">
      <Navbar />
      <div className="flex flex-row h-screen items-center text-black ">
        <div className="basis-1/2 flex flex-col">
          <div className="text-left text-6xl text pl-20  ">
            Luciano Benavides
          </div>
          <div className=" text-gray-400 text-2xl pl-10">
            Full Stack Developer
          </div>
        </div>
        <div className="basis-1/2 flex flex-col h-3/4 max-h-full ">
          <div className=" text-5xl pb-8">Work</div>
          <div className=" h-full flex flex-row flex-wrap">
            <div className="basis-1/2 h-1/2 flex items-center">
              <img
                src={humble_landing}
                alt="humbleFood_landing"
                className=" object-contain h-auto rounded-xl border-2 border-black"
              />
            </div>
            <div className="basis-1/2 h-1/2 flex flex-col justify-evenly items-center pt-10 pb-10">
              <div className="flex text-justify p-10">
                Development of HumbleFood's e-commerce platform. It's primary
                focus is for a speedy proccess when it comes to stores selling
                their products on sale.
              </div>
              <Link to={"/experience"}>
                <Button name={"More"} />
              </Link>
            </div>
            <div className="basis-1/2 h-1/2 flex items-center">
              <img
                src={dogs_landing}
                alt="dogs_landing"
                className=" object-contain h-auto rounded-xl border-2 border-black"
              />
            </div>
            <div className="basis-1/2 h-1/2 flex flex-col justify-evenly  items-center pt-10 pb-10">
              <div className="flex text-justify p-10">
                Development of an SPA (Single Page Application) where the user
                can search and create breeds of dogs.
              </div>
              <div className="">
                <Link to={"/experience"}>
                  <Button name={"More"} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

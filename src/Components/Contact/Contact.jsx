import { Button } from "../Button/Button";
import { Navbar } from "../Navbar/Navbar";
import { sendEmail } from "./Email";
const linkedin = require("../../images/Social_Networks/linkedin.png");
const email = require("../../images/Social_Networks/email.png");
const phone = require("../../images/Social_Networks/phone.png");
const github = require("../../images/Social_Networks/github.png");

export function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    let message =
      "Name : " +
      e.target[0].value +
      " \nEmail: " +
      e.target[1].value +
      "\nMensaje: " +
      e.target[2].value;
    // sendEmail("lucianobenavides96@hotmail.com", message);
    // console.log(e.target[0].value, e.target[1].value, e.target[2].value);
    alert("Your message has been sent to me via email successfully!");
  };

  return (
    <div className="flex flex-col h-screen max-h-screen">
      <Navbar />
      <div className="flex flex-row h-full w-full justify-evenly">
        <div className="basis-1/2 h-1/2  flex flex-col self-center border-r-2 border-double">
          <h1 className="font-semibold text-3xl text-left pl-48 pt-10 pb-5 ">
            Find me on:
          </h1>
          <div className="flex flex-col items-left pl-56 flex-wrap  h-full justify-evenly">
            <div className="flex items-center w-max ">
              <img src={linkedin} />
              <p className=" text-lg pl-5">
                https://www.linkedin.com/in/luciano-benavides/
              </p>
            </div>
            <div className="flex items-center w-max">
              <img src={github} />
              <p className=" text-lg pl-5">https://github.com/LuchoFS96</p>
            </div>
            <div className="flex items-center w-max">
              <img src={email} />
              <p className=" text-lg pl-5">lucianobenavides96@hotmail.com</p>
            </div>
            <div className="flex items-center w-max">
              <img src={phone} />
              <p className=" text-lg pl-5">+54 9 387 570-4146</p>
            </div>
          </div>
        </div>
        <div className="basis-1/2 h-1/2 self-center">
          <h1 className="font-semibold text-3xl text-left pl-48 pt-10 pb-5 ">
            Send me a message!
          </h1>
          <div>
            <form
              onSubmit={(e) => handleSubmit(e)}
              className="flex flex-col max-w-xl pl-64"
            >
              <input
                type="text"
                name="name"
                className="text-center border-2"
                placeholder="Please enter your full name"
              />
              <input
                type="email"
                name="email"
                className="text-center border-2"
                placeholder="Please enter your email"
              />
              <textarea
                name="description"
                className="text-center border-2 h-48 resize-none"
                placeholder="What would you like to tell me?"
              />
              {/* <input
                type="text"
                name="message"
                className="text-center border-2 h-48"
                placeholder="What would you like to say?"
              /> */}
              <div className=" pt-3 flex justify-end">
                <button type="submit">
                  <Button name={"Send"} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

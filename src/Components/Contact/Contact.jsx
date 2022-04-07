import { Button } from "../Button/Button";
import { Navbar } from "../Navbar/Navbar";

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
      <div className="flex flex-col md:flex-row h-full w-full justify-evenly">
        <div className="basis-1/2 h-1/2  flex flex-col self-center md:border-r-2 border-double">
          <h1 className="font-semibold text-3xl md:text-left md:pl-48 pt-10 pb-5 ">
            Find me on:
          </h1>
          <div className="flex flex-col items-left md:pl-56 flex-wrap  h-full justify-evenly">
            <div className="flex items-center w-max ">
              <img src={linkedin} />
              <p className=" md:text-lg pl-5 w-9 md:w-max">
                <a
                  href="https://www.linkedin.com/in/luciano-benavides/"
                  target={"_blank"}
                >
                  https://www.linkedin.com/in/luciano-benavides/
                </a>
              </p>
            </div>
            <div className="flex items-center w-max">
              <img src={github} />
              <p className=" text-lg pl-5">
                <a href="https://github.com/LuchoFS96" target={"_blank"}>
                  https://github.com/LuchoFS96
                </a>{" "}
              </p>
            </div>
            <div className="flex items-center w-max">
              <img src={email} />
              <p className=" md:text-lg pl-5 w-9 md:w-max">
                <a href="mailto: lucianobenavides96@hotmail.com">
                  lucianobenavides96@hotmail.com
                </a>{" "}
              </p>
            </div>
            <div className="flex items-center w-max">
              <img src={phone} />
              <p className=" text-lg pl-5">+54 9 387 570-4146</p>
            </div>
          </div>
        </div>
        <div className="basis-1/2 h-1/2 self-center">
          <h1 className="font-semibold text-3xl md:text-left md:pl-48 pt-10 pb-5 ">
            Send me a message!
          </h1>
          <div>
            <form
              className="flex flex-col max-w-xl md:pl-64"
              action="https://formsubmit.co/lucianobenavides96@hotmail.com"
              method="POST"
            >
              <input type="hidden" name="_captcha" value="false"></input>
              <input
                type="text"
                name="name"
                className="text-center border-2"
                placeholder="Please enter your full name"
                required
              />
              <input
                type="email"
                name="email"
                className="text-center border-2"
                placeholder="Please enter your email"
                required
              />
              <textarea
                name="description"
                className="text-center border-2 h-48 resize-none"
                placeholder="What would you like to tell me?"
                required
              />
              {/* <input
                type="text"
                name="message"
                className="text-center border-2 h-48"
                placeholder="What would you like to say?"
              /> */}
              <div className=" pt-3 flex justify-end md:pb-0 pb-5">
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

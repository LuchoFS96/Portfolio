const logo = require("../../images/logo.jpg");
export function Navbar() {
  return (
    <div className="container max-w-full bg-black text-white font-sans">
      <div className="flex flex-row justify-between py-4">
        <div className="flex justify-start">
          <img src={logo} className="rounded h-10 ml-auto" />
          <div className="flex py-2 px-2 font-semibold">Luciano Benavides</div>
        </div>
        <div className="flex justify-end px-5 font-semibold">
          <div className="flex py-2 px-5">Experience</div>
          <div className="flex py-2 px-5">Skills</div>
          <div className="flex py-2 px-5">Contact</div>
          <div className="flex py-2 px-5 rounded bg-white text-black">
            Resume
          </div>
        </div>
      </div>
    </div>
  );
}

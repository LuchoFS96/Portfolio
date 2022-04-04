import { Navbar } from "../Navbar/Navbar";
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
        <div className="basis-1/2 flex flex-col max-h-full">
          <div className="bg-blue-300 text-4xl">Work</div>
          <div className="bg-red-200 h-96 ">images</div>
        </div>
      </div>
    </div>
  );
}

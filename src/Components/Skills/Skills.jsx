import { Navbar } from "../Navbar/Navbar";
import { Cards } from "./Cards";

export function Skills() {
  return (
    <div className="flex flex-col h-screen max-h-screen">
      <Navbar />
      <div className="font-bold text-3xl pt-5">Skills</div>
      <div className="h-full">
        <Cards />
      </div>
    </div>
  );
}

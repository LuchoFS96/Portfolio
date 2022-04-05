import { Navbar } from "../Navbar/Navbar";
import { Work } from "./Work";
const humbleFood = require("../../HumbleFood/humblefood.json");
const dogs = require("../../Dogs/dogs.json");

export function Experience() {
  return (
    <div className="flex flex-col h-screen max-h-screen">
      <Navbar />
      <div className="h-full  flex">
        <div className="basis-1/2 border-r-2 border-dashed border-black">
          <Work
            title={humbleFood.title}
            url={humbleFood.url}
            description={humbleFood.description}
            link={humbleFood.link}
            github={humbleFood.github}
          />
        </div>
        <div className="basis-1/2 ">
          <Work
            title={dogs.title}
            url={dogs.url}
            description={dogs.description}
            link={dogs.link}
            github={dogs.github}
          />
        </div>
      </div>
    </div>
  );
}

import { Card } from "./Card";
const front_skills = require("./front_skills.json");
const back_skills = require("./back_skills.json");
const db_skills = require("./db_skills.json");
export function Cards() {
  //   let i = 0;
  return (
    <div className="flex flex-col flex-wrap justify-evenly pt-10 ">
      <div className="flex md:flex-row flex-col justify-evenly ">
        <div className="flex flex-col  basis-1/3 items-center md:border-r-2 border-dashed border-black">
          <div className="">
            <p className=" text-2xl font-semibold">Front-End</p>
            <div className="h-max">
              {front_skills.map((skill, index) => {
                return (
                  <div key={index} className="pt-6">
                    <Card skill={skill} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex flex-col basis-1/3 items-center md:border-r-2 border-dashed border-black">
          <p className=" text-2xl font-semibold md:pt-0 md:pb-0 pt-10 pb-5">
            Back-End
          </p>
          <div className="h-full flex flex-col justify-evenly">
            {back_skills.map((skill, index) => {
              return (
                <div key={index} className="md:pt-0 pt-6">
                  <Card skill={skill} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col basis-1/3 items-center">
          <p className=" text-2xl font-semibold md:pt-0 md:pb-0 pt-10 pb-5">
            DataBase
          </p>
          <div className="h-full flex flex-col justify-evenly">
            {db_skills.map((skill, index) => {
              return (
                <div key={index} className="md:pt-0 pt-6 md:pb-0 pb-3">
                  <Card skill={skill} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

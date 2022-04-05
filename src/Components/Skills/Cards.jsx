import { Card } from "./Card";
const front_skills = require("./front_skills.json");
const back_skills = require("./back_skills.json");
const db_skills = require("./db_skills.json");
export function Cards() {
  //   let i = 0;
  return (
    <div className="flex flex-col flex-wrap justify-evenly pt-10 ">
      <div className="flex flex-row justify-evenly ">
        <div className="flex flex-col  basis-1/3 items-center border-r-2 border-dashed border-black">
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
        <div className="flex flex-col basis-1/3 items-center border-r-2 border-dashed border-black">
          <p className=" text-2xl font-semibold">Back-End</p>
          <div className="h-full flex flex-col justify-evenly">
            {back_skills.map((skill, index) => {
              return (
                <div key={index}>
                  <Card skill={skill} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col basis-1/3 items-center">
          <p className=" text-2xl font-semibold">DataBase</p>
          <div className="h-full flex flex-col justify-evenly">
            {db_skills.map((skill, index) => {
              return (
                <div key={index}>
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

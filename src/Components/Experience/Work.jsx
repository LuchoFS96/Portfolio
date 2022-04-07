import { Button } from "../Button/Button";
import { Youtube } from "../Youtube/Youtube";

export function Work({ title, url, description, link, github }) {
  return (
    <div className="h-full w-full flex flex-col flex-wrap ">
      <div className="w-max self-center p-10">
        <p className="text-3xl pb-5 font-bold">{title}</p>
        <Youtube url={url} />
      </div>
      <div className="flex md:pl-20 md:pr-20 pl-5 pr-5 text-justify md:text-lg">
        {description}
      </div>
      <div className="flex justify-evenly pt-5 pb-3">
        <a href={link} target="_blank">
          <Button name={"Live"} />
        </a>
        <a href={github} target="_blank">
          <Button name={"Github"} />
        </a>
      </div>
    </div>
  );
}

import { Button } from "../Button/Button";
import { Youtube } from "../Youtube/Youtube";

export function Work({ title, url, description, link, github }) {
  return (
    <div className="h-full w-full flex flex-col flex-wrap ">
      <div className="w-max self-center p-10">
        <p className="text-3xl pb-5 font-bold">{title}</p>
        <Youtube url={url} />
      </div>
      <div className="flex pl-20 pr-20 text-justify text-lg">{description}</div>
      <div className="flex justify-evenly pt-5">
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

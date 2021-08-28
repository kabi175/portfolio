import React from "react";
import { Icons } from "../data";

function ProjectCard({ title, description, language, repoUrl, demoUrl }) {
  return (
    <div className="w-96 boerder border-2 border-gray-200 rounded mx-7 my-5 p-5  shadow-xl flex flex-col flex-nowrap flex-grow-0 transform hover:scale-125">
      <h1 className="self-start text-2xl font-bold ">{title}</h1>
      <p className="text-gray-600 py-4">{description}</p>
      <span className={Icons[language] | ""} />
      <div className="w-full grid grid-cols-2">
        <a
          href={repoUrl}
          target="_blank"
          rel="noreferrer"
          className="place-self-start text-lg text-blue-500 font-bold"
        >
          {"📁 CODE"}
        </a>
        <a
          href={demoUrl}
          target="_blank"
          rel="noreferrer"
          className={`${
            demoUrl ? "place-self-end" : "hidden"
          } text-lg text-bule-500 font-bold`}
        >
          {" "}
          {"📺 DEMO"}{" "}
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;

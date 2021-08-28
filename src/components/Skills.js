import React from "react";
import { languages, frameworks, tools } from "../data";

const SkillSection = ({ titile, list }) => {
  return (
    <div className="pb-5 xl:grid xl:place-items-center">
      <h1 className="text-3xl pb-3 font-black text-white">{titile}</h1>
      <div className="flex flex-wrap justify-center">
        {list.map((value, id) => (
          <div
            key={id}
            className="h-10 m-3 grid place-content-center rounded-lg bg-white transform hover:scale-110"
          >
            <p className=" p-3 text-gray-800 text-md font-semibold">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="bg-blue-400 flex justify-center items-center py-10">
      <div className="w-full xl:w-3/5 xl:grid xl:place-items-center lg:px-12 px-6 xl:px-0">
        <h1 className="text-6xl text-yellow-300 font-black pb-6">Skills</h1>{" "}
        <SkillSection titile="Programming Languages" list={languages} />
        <SkillSection titile="Framework / libraries" list={frameworks} />
        <SkillSection titile="Tools" list={tools} />
      </div>
    </div>
  );
};

export default Skills;

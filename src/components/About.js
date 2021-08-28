import * as React from "react";
import { links } from "../data";

const About = () => {
  return (
    <div className="h-screen bg-white flex flex-col  justify-center items-center font-semibold text-gray-600">
      <div className="flex-grow flex items-center">
        <div className="grid gap-y-5 place-items-center xl:gap-y-10 md:gap-y-8">
          <div className="flex items-center">
            <h1 className="text-6xl xl:text-8xl md:text-7xl"> Hello </h1>
            <img
              className="p-5 md:h-32 md:w-32 h-28 w-28"
              src="hello.gif"
              alt="World!"
            />
          </div>
          <h1 className="text-5xl xl:text-8xl md:text-7xl text-gray-600">
            I'm Kabilan
          </h1>
          <h1 className="font-normal text-xl xl:text-6xl md:text-5xl">
            I Develop Web and Mobile App
          </h1>
          <div className="px-1 flex gap-x-8  text-3xl">
            {links.map(({ url, icon }, id) => {
              return (
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  key={id}
                  className="transform hover:scale-125"
                >
                  <span className={icon} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <span className="justify-self-end text-3xl animate-bounce fontawesome-download" />
    </div>
  );
};
export default About;

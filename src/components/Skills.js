import React from "react";

const backpack = [
  {
    name: "Go",
    url: "https://img.icons8.com/color/144/000000/golang.png",
  },
  {
    name: "JS",
    url: "https://img.icons8.com/color/144/000000/javascript--v1.png",
  },
  {
    name: "TS",
    url: "https://img.icons8.com/color/144/000000/typescript.png",
  },
  {
    name: "Cpp",
    url: "https://img.icons8.com/color/144/000000/c-plus-plus-logo.png",
  },
  {
    name: "Python",
    url: "https://img.icons8.com/color/144/000000/python--v1.pn",
  },
  {
    name: "html",
    url: "https://img.icons8.com/color/144/000000/html-5--v2.png",
  },
  {
    name: "node-js",
    url: "https://img.icons8.com/color/144/000000/nodejs.png",
  },
  {
    name: "buffalo-go",
    url: "https://gobuffalo.io/assets/images/logo_med.png",
  },
  {
    name: "react",
    url: "https://img.icons8.com/color/144/000000/react-native.png",
  },
  {
    name: "mongoDB",
    url: "https://img.icons8.com/color/144/000000/mongodb.png",
  },
  {
    name: "postgreesql",
    url: "https://img.icons8.com/color/144/000000/postgreesql.png",
  },
  {
    name: "redis",
    url: "https://img.icons8.com/color/144/000000/redis.png",
  },
  {
    name: "docker",
    url: "https://img.icons8.com/fluency/144/000000/docker.png",
  },
  {
    name: "linux",
    url: "https://img.icons8.com/color/144/000000/linux--v1.png",
  },
];

const Skills = () => {
  return (
    <div className="h-screen pt-10 pl-6 md:pl-16">
      <h1 className="text-5xl font-semibold pb-10">
        {" "}
        My Development Backpack{" "}
      </h1>
      <div className="xl:w-3/5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 ">
        {backpack.map(({ url, name }, id) => (
          <img
            className="w-32 h-32 hover:animate-pulse"
            key={id}
            src={url}
            alt={name}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;

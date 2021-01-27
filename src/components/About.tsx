import React from "react";

import me from "../assets/about/me.jpg";
const About = () => {
  return (
    <div className="w-full h-full flex flex-col justify-start items-center p-2">
      <img
        src={me}
        height={200}
        width={200}
        className="inline-block rounded-full"
      />
      <div className="mt-2 p-6">
        My name is Stephan Rotolante. I'm a Software Engineer living out of
        Jacksonville Florida. I consider myself an active person, I love playing
        Lacrosse, Basketball, and Hockey (Roller). You can always find me
        learning something to get a new tool under my belt. I am very proficient
        in front-end technologes such as ReactJS, Css, HTML, TailwindCSS, and
        Bootstrap. I have strong undertanding of back-end technologes/tools like
        NodeJS, Express, HapiJS, Docker/Kubernetes. I am very comfortable with
        AWS, whether it be creating/deploying EC2S, S3, AWS Batch, Lambda,
        etc...
        <br /> <br />
        Feel free to message me if you have any questions!
      </div>
    </div>
  );
};

export default About;

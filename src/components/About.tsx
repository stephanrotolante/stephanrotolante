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
        Jacksonville, Florida. I consider myself an active person. I love
        playing lacrosse, basketball, and roller hockey. You can always find me
        learning something new, as I am constantly looking to expand my
        knowledge of software engineering. I am very proficient in front-end
        technologies such as ReactJS, Css, HTML, TailwindCSS, and Bootstrap. I
        also have strong understanding of back-end technologies/tools like
        NodeJS, Express, HapiJS, Docker/Kubernetes. Over the past year I have
        become very comfortable with the many services offered by AWS.
        <br /> <br />
        Feel free to message me if you have any questions!
      </div>
    </div>
  );
};

export default About;

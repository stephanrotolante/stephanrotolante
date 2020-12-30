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
        Hey! My name is Stephan Rotolante. I'm a mid level software engineer
        living out of sunny Jacksonville Florida. I love playing sports and am
        always trying to learn new things! Feel free to message me if you have
        any questions.
      </div>
    </div>
  );
};

export default About;

import React, { useEffect, useState, useRef } from "react";
import { Card, GitHubProject } from "./components";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import axios from "axios";

import "./styles/main.css";
import "tailwindcss/tailwind.css";

// sm:w-full md:w-mc lg:w-mc
const App: React.FunctionComponent = () => {
  const ref = useRef(1);
  const [gitHubData, setGitHubData] = useState<any[]>([]);

  const isMissingData = gitHubData.length === 0;
  console.log(`Renders: ${ref.current}`);
  useEffect(() => {
    const fetchGitHubData = async () => {
      const { data } = await axios.get(
        "https://api.github.com/users/stephanrotolante/repos?per_page=100"
      );

      setGitHubData(data);
    };
    ref.current += 1;

    if (isMissingData) {
      fetchGitHubData();
    }
  }, []);

  if (isMissingData) {
    console.log("Missing");
    return null;
  }

  return (
    <div className="w-screen h-screen">
      <div className="flex flex-row justify-center">
        <div className="flex flex-row flex-wrap w-full sm:w-full md:w-full lg:w-mc">
          <Card title="About" image="about">
            this is the page about me
          </Card>
          <Card title="Stack" image="stack">
            This is the page about my stack
          </Card>

          <Card title="Projects" image="projects">
            <div style={{ overflow: "auto" }}>
              {gitHubData.map((project) => (
                <GitHubProject {...project} />
              ))}
            </div>
          </Card>
        </div>
      </div>
      <div className="flex flex-row justify-center bottom-0 left-0 sticky z-50 w-full p-1 bg-white bg-opacity-80">
        <div className="flex flex-row justify-around w-full sm:w-full md:w-mc lg:w-mc">
          <div className="hover:text-mail-100 text-mail-000 duration-300">
            <a href="" target="_blank">
              <FaEnvelope size="1.75em" />
            </a>
          </div>
          <div className="hover:text-github-100 text-github-000 duration-300">
            <a href="https://github.com/stephanrotolante" target="_blank">
              <FaGithub size="1.75em" />
            </a>
          </div>
          <div className="hover:text-linkedin-100 text-linkedin-000 duration-300">
            <a
              href="https://www.linkedin.com/in/stephan-rotolante-677b22149/"
              target="_blank"
            >
              <FaLinkedin size="1.75em" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

import React from "react";
type GitHubProjectType = {
  name: string;
  description: string;
  html_url: string;
};
const GitHubProject: React.FunctionComponent<GitHubProjectType> = ({
  name,
  description,
  html_url,
}) => {
  return (
    <div className="flex flex-col p-1 w-full">
      <a href={html_url} target="_blank">
        <div className="p-1 border rounded bg-gray-200 hover:bg-gray-300 duration-300">
          <div className="font-bold">{name}</div>
          <div>{description}</div>
        </div>
      </a>
    </div>
  );
};

export default GitHubProject;

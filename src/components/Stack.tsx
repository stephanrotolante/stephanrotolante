import React from "react";

type StackType = {
  label: string;
  src: string;
};

const Stack: React.FunctionComponent<StackType> = ({ label, src }) => {
  return (
    <div className="flex-row flex items-center justify-center w-1/2">
      <img className="rounded" src={src} height={100} width={100} alt={label} />

      <div className="inline-block ml-2 font-bold">{label}</div>
    </div>
  );
};

export default Stack;

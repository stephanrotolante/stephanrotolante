import React from "react";

type StackType = {
  label: string;
  src: string;
};

const Stack: React.FunctionComponent<StackType> = ({ label, src }) => {
  return (
    <div className="flex-row flex items-center justify-start w-1/2">
      <img
        className="rounded h-12 w-12 sm:w-12 sm:h-12 md:w-24 md:h-24 lg:w-24 lg:h-24"
        src={src}
        alt={label}
      />

      <div className="inline-block ml-2 font-bold">{label}</div>
    </div>
  );
};

export default Stack;

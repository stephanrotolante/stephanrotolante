import React from "react";

type CardComponentType = {
  children?: React.ReactNode;
  title: string;
  image: string;
};
const Card: React.FunctionComponent<CardComponentType> = ({
  children,
  title,
  image,
}) => {
  return (
    <div className="w-full sm:w-full p-1 md:w-full lg:w-1/2 duration-1000">
      <div className="border rounded duration-1000 main">
        <div className="top">
          <div className={`${image} image-mods`}></div>
          <div className="bg-text">{title}</div>
        </div>
        <div className="under">{children}</div>
      </div>
    </div>
  );
};

export default Card;

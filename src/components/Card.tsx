import React, { useEffect, useState } from "react";
import { FaWindowClose } from "react-icons/fa";

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
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="w-full sm:w-full p-1 md:w-full lg:w-1/2 duration-1000"
      onClick={() => !isOpen && setIsOpen(true)}
    >
      <div
        className="border rounded duration-1000 main"
        data-open={isOpen ? "1" : "0"}
      >
        <div className="top">
          <div className={`${image} image-mods`}></div>
          <div className="bg-text">{title}</div>
        </div>
        <div className="under">
          {isMobile && (
            <div
              className="close flex flex-row items-center"
              onClick={() => isOpen && setIsOpen(false)}
            >
              Close <FaWindowClose className="inline-block ml-1" />
            </div>
          )}
          <div className="overflow-y-auto w-full">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;

import React, { useEffect, useState } from "react";
import { FaWindowClose } from "react-icons/fa";

type CardComponentType = {
  children?: React.ReactNode;
  title: string;
  image: string;
  className?: string;
};
const Card: React.FunctionComponent<CardComponentType> = ({
  children,
  title,
  image,
  className,
}) => {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      data-open={isOpen ? "1" : "0"}
      className={`w-full sm:w-full md:w-full lg:w-cus duration-1000 shadow-rst hover-hover:hover:shadow-hv border rounded mt-5 ${className} scaled`}
      onClick={() => !isOpen && setIsOpen(true)}
    >
      <div className="duration-1000 main" data-open={isOpen ? "1" : "0"}>
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
          <div className="overflow-y-auto w-full h-full">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;

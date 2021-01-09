import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import { FaWindowClose } from "react-icons/fa";

type CardComponentType = {
  children?: React.ReactNode;
  title: string;
  image?: string;
  className?: string;
  images?: { src: string }[];
};

const updateCss = (height: number, width: number) => {
  // document.documentElement.style.setProperty(
  //   "--left",
  //   Math.random() * width + "px"
  // );
  // document.documentElement.style.setProperty(
  //   "--top",
  //   Math.random() * height + "px"
  // );
  const elements = document.getElementsByClassName("stack-image");
  for (var i = 0; i < elements.length; i += 1) {
    const { style } = elements[i] as any;

    const styles = elements[i].getAttribute("style")?.split(";") || [];
    style.setProperty(
      "--org-left",
      styles
        .find((s) => s.includes("left:"))
        ?.split(":")[1]
        .trim()
    );
    style.setProperty(
      "--org-top",
      styles
        .find((s) => s.includes("top:"))
        ?.split(":")[1]
        .trim()
    );

    style.setProperty("--delay", Math.random() * 10 + "s");
    style.setProperty("--top", Math.random() * height + "px");
    style.setProperty("--left", Math.random() * width + "px");
  }
};
const Card: React.FunctionComponent<CardComponentType> = ({
  children,
  title,
  image = "",
  className,
  images = [],
}) => {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef<HTMLDivElement | null>(null);

  const oldWidth = useRef(0);

  const oldHeight = useRef(0);

  const [dimesnions, setDimensions] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    window.addEventListener("resize", () => {
      if (ref.current && images.length > 0) {
        const { height, width } = ref.current.getBoundingClientRect();

        if (oldHeight.current !== height || oldWidth.current !== width) {
          oldHeight.current = height;
          oldWidth.current = width;
          updateCss(height, width);
        }
      }
    });

    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);

  useEffect(() => {
    if (dimesnions.width) {
      updateCss(dimesnions.height, dimesnions.width);
    }
    if (ref.current && images.length > 0 && !dimesnions.height) {
      const { height, width } = ref.current.getBoundingClientRect();

      oldHeight.current = height;
      oldWidth.current = width;
      setDimensions({
        height,
        width,
      });
    }
  }, [dimesnions.height]);

  return (
    <div
      data-open={isOpen ? "1" : "0"}
      className={`w-full sm:w-full md:w-full lg:w-cus duration-1000 shadow-rst hover-hover:hover:shadow-hv border rounded mt-5 ${className} scaled`}
      onClick={() => !isOpen && isMobile && setIsOpen(true)}
    >
      <div className="duration-1000 main" data-open={isOpen ? "1" : "0"}>
        <div ref={ref} className="top">
          <div className={`${image} image-mods `}>
            {images.map(({ src }) => {
              return (
                <img
                  src={src}
                  className="stack-image animantions h-12 w-12 sm:w-14 sm:h-14 md:w-4 md:h-14 lg:w-16 lg:h-16"
                  style={{
                    left: Math.random() * dimesnions.width,
                    top: Math.random() * dimesnions.height,
                  }}
                />
              );
            })}
          </div>
          <div className="bg-text">{title}</div>
        </div>
        <div className="under">
          {isMobile && (
            <div
              className="close flex flex-row items-center"
              onClick={() => isOpen && isMobile && setIsOpen(false)}
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

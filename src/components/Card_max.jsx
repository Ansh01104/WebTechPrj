 
 
import React, { useRef, useState } from "react";
import { CardContainer, CardItem } from "./ui/3d-card";

const Card_max = ({ name, title, idleVideoSrc, hoverVideoSrc }) => {
  const idleVideoRef = useRef(null);
  const hoverVideoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (hoverVideoRef.current) {
      hoverVideoRef.current.play(); // Play hover video
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (hoverVideoRef.current) {
      hoverVideoRef.current.pause(); // Pause hover video
      hoverVideoRef.current.currentTime = 0; // Reset hover video
    }
  };

  return (
    <CardContainer>
      <CardItem translateZ="100">
        <div
          className="flex flex-col justify-between px-1 rounded-[20px] max-w-[400px] md:mr-1 sm:mr-2 mr-2 my-1 relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ width: "400px", height: "400px" }} // Fixed size for the container
        >
          {/* Idle Video */}
          <video
            ref={idleVideoRef}
            className={`absolute inset-0 w-[400px] h-[400px] rounded-[20px] object-cover transition-opacity duration-500 ${
              isHovered ? "opacity-0" : "opacity-100"
            }`}
            src={idleVideoSrc}
            muted
            loop
            autoPlay
          />

          {/* Hover Video */}
          <video
            ref={hoverVideoRef}
            className={`absolute inset-0 w-[400px] h-[400px] rounded-[20px] object-cover transition-opacity duration-500 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
            src={hoverVideoSrc}
            muted
            loop
          />
        </div>
      </CardItem>
    </CardContainer>
  );
};

export default Card_max;

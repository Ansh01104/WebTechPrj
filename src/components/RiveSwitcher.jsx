// RiveSwitcher.jsx
import React from "react";
import { useRive } from "@rive-app/react-canvas";

const RiveSwitcher = React.memo(({ onToggle }) => {
  const { RiveComponent } = useRive({
    src: "src/assets/animated_3d_switcher.riv",
    stateMachines: ["SM"], // Replace with your actual state machine name
    autoplay: true,
  });

  return (
    <RiveComponent
      className="w-[300px] h-[265px] object-cover cursor-pointer rounded-[20px]"
      onClick={onToggle}
    />
  );
});

export default RiveSwitcher;

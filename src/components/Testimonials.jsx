import React from "react";
import { useRive } from "rive-react";

const Testimonials = ({ onSwitchToggle }) => {
  // Set up an array of Rive components
  const riveCards = [
    { src: "src/assets/card_with_glow.riv", stateMachine: "SM" ,autoplay: true,},
    { src: "src/assets/card_with_glow.riv", stateMachine: "SM" ,autoplay: true,},
    { src: "src/assets/card_with_glow.riv", stateMachine: "SM" ,autoplay: true,},
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full h-full md:h-[500px]">
      {riveCards.map((card, index) => {
        const { rive, RiveComponent } = useRive({
          src: card.src,
          stateMachines: card.stateMachine,
          autoplay: true,
        });

        return (
          <div key={index} className="flex justify-center items-center">
            <RiveComponent
              className="w-full h-full object-contain cursor-pointer"
              
            />
          </div>
        );
      })}
    </div>
  );
};

export default Testimonials;

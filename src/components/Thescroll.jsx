import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";

const Thescroll = () => {
  return (
    <div
      id="Thescroll"
      className="flex flex-col overflow-hidden px-4 sm:px-8 py-8"
    >
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="mt-2 sm:mt-1 text-2xl sm:text-4xl font-semibold text-black dark:text-black text-center mb-2 leading-snug sm:leading-tight">
              Control your Smart Home with a beautiful dashboard 🌸
              <br />
              <span className="text-2xl sm:text-4xl md:text-[4rem] font-bold mt-2 block">
                Check it out Live
              </span>
            </h1>
          </>
        }
      >
        <div className="w-full flex justify-center items-center">
          <div className="w-full max-w-[1000px] aspect-video rounded-xl overflow-hidden shadow-xl">
            <iframe
              className="w-full mx-auto max-w-[1400px] h-[400px] sm:h-[720px] rounded-[20px] border-4 border-white shadow-xl"
              src="https://demo.home-assistant.io/#/lovelace/home" // replace with the actual URL of the content
              title="Embedded Content"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </ContainerScroll>
    </div>
  );
};

export default Thescroll;

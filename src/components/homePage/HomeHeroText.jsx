import React from "react";

const HomeHeroText = () => {
  return (
    <>
      <img
        src="public\logo.png"
        className="relative lg:h-12 lg:w-42 lg:top-4 lg:left-6  h-8 w-30 top-6 left-7"
        alt=""
      />

      <div className=" relative text-center lg:text-[6rem] text-[3rem] flex flex-col ">
        <div className=" text-center">L'étincelle</div>
        <div className="flex items-center text-center justify-center">
          qui
          <div className="lg:w-40 w-[10vh] rounded-full overflow-hidden border-2 border-white">
            <video
              autoPlay
              muted
              loop
              className=" lg:w-screen object-cover rounded-full transform-gpu"
              src="public\v2.mp4"
            ></video>
          </div>
          génère
        </div>
        <div>la créativité</div>
      </div>
    </>
  );
};

export default HomeHeroText;

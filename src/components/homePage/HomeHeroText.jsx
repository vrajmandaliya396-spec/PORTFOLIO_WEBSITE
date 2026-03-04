import React from "react";

const HomeHeroText = () => {
  return (
    <>
        <img src="src\assets\logo.png" className="relative h-12 w-42 top-6 left-6 mx-auto" alt="" />   

    <div className=" relative text-center text-[6rem] flex flex-col ">
     <div className=" text-center">L'étincelle</div>
      <div className="flex items-center text-center justify-center">
        qui
        <div className="w-40 rounded-full overflow-hidden border-2 border-white">
          <video autoPlay muted  loop className=" w-screen object-cover rounded-full transform-gpu" src="src\assets\v2.mp4"></video>
        </div>
        génère1
      </div>
      <div>la créativité</div>
    </div>
    </>
  );
};

export default HomeHeroText;

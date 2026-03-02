import React from "react";

const HomeHeroText = () => {
  return (
    <>
        <img src="src\assets\logo.png" className="relative h-[3rem] w-[10.5rem] top-6 left-6 mx-auto" alt="" />   

    <div className="m-5 relative text-center text-[7rem] flex flex-col gap-5">
     <div className="mt-20 text-center">L'étincelle</div>
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

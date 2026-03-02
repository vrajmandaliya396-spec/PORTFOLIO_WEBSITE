import React from "react";

const HomeHeroText = () => {
  return (
    <div className="pt-5 text-left text-[10rem]">
      <div>L'étincelle</div>
      <div className="flex items-center ">
        qui
        <div className="w-40 rounded-full overflow-hidden border-2 border-white">
          <video autoPlay muted  loop className=" w-screen object-cover rounded-full transform-gpu" src="src\assets\v2.mp4"></video>
        </div>
        génère1
      </div>
      <div>la créativité</div>
    </div>
  );
};

export default HomeHeroText;

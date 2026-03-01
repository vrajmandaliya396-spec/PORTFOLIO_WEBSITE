import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="pt-5 text-center">
      <div>L'étincelle</div>
      <div className="flex items-center justify-center">
        qui
        <div className="w-[9vw] h-[10vh] overflow- rounded-full">
          <Video />
        </div>
        génère
      </div>
      <div>la créativité</div>
    </div>
  );
};

export default HomeHeroText;

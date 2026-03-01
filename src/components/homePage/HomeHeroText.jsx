import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div>L'étincelle</div>
      <div className="flex w-[50vw] items-center justify-center">
        qui
        <div className="h-[10vh] rounded-full overflow-hidden ">
          <Video />
        </div>
        génère
      </div>
      <div>la créativité</div>
    </div>
  );
};

export default HomeHeroText;

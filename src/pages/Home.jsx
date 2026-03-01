import React from "react";
import Video from "../components/homePage/Video";
import { Link } from "react-router-dom";
import HomeHeroText from "../components/homePage/HomeHeroText";
import HomeHeroBottomText from "../components/homePage/HomeHeroBottomText";

const Home = () => {
  return (
    <>
      <div className="text-white fixed h-screen w-screen " >
        <Video />
      </div>
      <div className="w-screen gap-55 p-0 text-white flex text-center relative font-[font2] flex-col uppercase text-[7rem] leading-27">
        <HomeHeroText />
        <div className=" w-full text-[20vh] "> 
                    <HomeHeroBottomText />

        </div>

      </div>
    </>
  );
};

export default Home;

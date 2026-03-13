import Video from "../components/homePage/Video";
import HomeHeroText from "../components/homePage/HomeHeroText";
import HomeHeroBottomText from "../components/homePage/HomeHeroBottomText";
import NavMenu from "../components/homePage/NavMenu";
import NavMenuInnerContent from "../components/homePage/NavMenuInnerContent";
import { useState } from "react";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="overflow-hidden ">
        <NavMenuInnerContent menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
      <div>
        <NavMenu setMenuOpen={setMenuOpen}></NavMenu>
      </div>
      
      <div className="text-white fixed w-full flex">
        <Video />
      </div>
      <div className="h-[96vh] justify-between text-white flex relative lg:gap-22 gap-51 font-[font2] flex-col overflow-hidden uppercase lg:leading-27 leading-13">
        <HomeHeroText />
        <div className="  text-white  lg:text-[21.5vh] text-[5.2vh] border-t-2 lg:leading-42 leading-15 left-1 hover:text-lime-200 transition-all duration-300 ease-in-outq font-[font2] text-center">
          <HomeHeroBottomText />
        </div>
      </div>
    </>
  );
};

export default Home;

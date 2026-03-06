import Video from "../components/homePage/Video";
import HomeHeroText from "../components/homePage/HomeHeroText";
import HomeHeroBottomText from "../components/homePage/HomeHeroBottomText";
import NavMenu from "../components/homePage/NavMenu";
import NavMenuInnerContent from "../components/homePage/NavMenuInnerContent";
import { useState } from "react";
import NavMenuBlackTheem from "../components/projectsPage/NavMenuBlackTheem";

const Home = () => {

      const [menuOpen, setMenuOpen] = useState(false)


  return (
    <>
      <div className="overflow-hidden">
      <NavMenuInnerContent menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>    
      </div>
      <div >
        <NavMenu setMenuOpen={setMenuOpen}  ></NavMenu>
      </div>
      <div className="hidden">
        <NavMenuBlackTheem setMenuOpen={setMenuOpen}  ></NavMenuBlackTheem>
      </div>
      <div className="text-white fixed h-full w-full flex">
        <Video />
      </div>
      <div className="h-screen justify-between text-white flex relative font-[font2] flex-col overflow-hidden uppercase leading-27">
        <HomeHeroText />
        <div className="relative z-50  text-white flex text-[21.5vh] border-t-2 leading-47 left-1 hover:text-lime-200 transition-all duration-300 ease-in-outq font-[font2] text-left">
          <HomeHeroBottomText />
        </div>
      </div>
    </>
  );
};

export default Home;

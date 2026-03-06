import { useRef, useState } from "react";
import NavMenuBlackTheem from "../components/projectsPage/NavMenuBlackTheem";
import NavMenuInnerContent from "../components/homePage/NavMenuInnerContent";
import ImgCard from "../components/projectsPage/ImgCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Projects = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  let imgArray = [
    {
      img1: "src/assets/pro1.png",
      img2: "src/assets/pro2.png",
    },

    {
      img1: "src/assets/pro3.jpg",
      img2: "src/assets/pro4.jpg",
    },

    {
      img1: "src/assets/pro5.png",
      img2: "src/assets/pro6.png",
    },
  ];
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(".hero", {
      height: 0,

      stagger: {
        amount: 0.5,
      },
      scrollTrigger: {
        trigger: ".lol",
        start: "top 50%",
        end: "top -150%",
        scrub: 1,
      },
    });

    gsap.from(".hero", {
      y: 200,
      opacity: 0,
      scale: 0.9,
      duration: 1.2,
      stagger: 0.25,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".lol",
        start: "top 80%",
        end: "top 30%",
        scrub: 1,
      },
    });
  }, []);

  return (
    <>
      <div className="w-full relative flex">
        <div>
          <img
            src="src\assets\logo2.png"
            className="relative top-3 left-6 h-12 w-42"
            alt=""
          />
        </div>
        <div className="right-80 justify-start absolute">
          <NavMenuBlackTheem setMenuOpen={setMenuOpen}></NavMenuBlackTheem>
        </div>
        <div className="overflow-hidden">
          <NavMenuInnerContent menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>
      </div>

      <div className=" projectsTitle  relative left-6 w-1/2 flex">
        <h1 className=" font-[font2] text-9xl uppercase">Projects </h1>{" "}
        <p>@VM-2.0</p>
      </div>
      <div className="lol ">
        {imgArray.map((elem, idx) => {
          return (
            <div
              key={idx}
              className=" hero will-change-[height] flex project1 flex-1"
            >
              <ImgCard img1={elem.img1} img2={elem.img2} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Projects;

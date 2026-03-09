import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const MiddelText = () => {
  const ImgAarray = [
    "src/assets/img.png",
    "src/assets/img2.png",
    "src/assets/img3.png",
  ];

  const ImgDivRef = useRef(null);
  const ImgRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(ImgDivRef.current, {
      x: 0,
      
      scrollTrigger: {
        trigger: ImgDivRef.current,
        start: "top 17.5%",
        end: "top -8%",
        pin: true,
        scrub: true,


        onUpdate: (self) => {
          const totalImages = ImgAarray.length;

          const index = Math.min(
            totalImages - 1,
            Math.floor(self.progress * totalImages),
          );

          ImgRef.current.src = ImgAarray[index];
        },
      },
    });
  }, []);

  return (
    <>
      <div className="section1 relative">
        <div className="text-black font-[font1] h-screen z-1 w-screen text-2xl text-center justify-center text-[8vh] flex-nowrap bg-white items-center flex">
          <div
            ref={ImgDivRef}
            className="bg-black lg:w-[37vh] w-[20vh] lg:h-[52vh] h-[32vh] rounded-4xl absolute lg:left-150 left-5 lg:top-32 top-20 "
          >
            <img
              ref={ImgRef}
              className="lg:h-85  z-0 w-60 flex lg:top-10  rounded-4xl"
              src="src/assets/img.png"
              alt=""
            />
          </div>
          <div className=" z-50 text-7xl h-full mt-35 lg:mt-0  font-[font2] lg:h-50 lg:text-[30vh] text-lime-200">
            <p><span className="text-black">Vraj</span> Mandaliya</p>
          </div>
        </div>

        <div className="lg:w-[70vh] w-1/2 font-[font1] lg:text-justify text-justify lg:right-7 right-5 lg:text-2xl text-[2.2vh] leading-tight absolute bottom-10">
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp; VM is an brand that builds brands from
            every angle. We think the best sparksfly when comfort zones get left
            behind & friction infuses our strategies, brands and communications
            with real feeling. We’re transparent, honest and say what we mean,
            and when we believe in something, we’re all in.
          </p>
        </div>
      </div>
    </>
  );
};

export default MiddelText;

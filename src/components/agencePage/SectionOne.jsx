import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const MiddelText = () => {

  const ImgAarray = [
    "src/assets/img.png",
    "src/assets/img2.png",
    "src/assets/img3.png",
  ]

  const ImgDivRef = useRef(null);
  const ImgRef = useRef(null);

 useGSAP(() => {

  gsap.registerPlugin(ScrollTrigger);

  gsap.to(ImgDivRef.current, {

    x:400,
    scrollTrigger: {
      
      trigger: ImgDivRef.current,
      start: "top 17.5%",
      end: "top -15%",
      pin: true,
      scrub: true,

      onUpdate: (self) => {
        const totalImages = ImgAarray.length;

        // progress 0 → 1
        const index = Math.min(
          totalImages - 1,
          Math.floor(self.progress * totalImages)
        );

        ImgRef.current.src = ImgAarray[index];
      }
    }
  });

}, []);
  
  return (
    <>
    <div className='section1'>
      
    <div className='text-black font-[font1]  h-screen z-1 w-screen text-2xl text-center justify-center text-[32vh] flex-nowrap bg-white items-center flex'>
      <div ref={ImgDivRef} className='bg-black rounded-4xl absolute left-56 top-32 '>
        <img ref={ImgRef} className="h-85 z-0 w-60 flex top-10 rounded-4xl" src="src/assets/img.png" alt="" />
      </div>
    <div className='z-50'>
      Vraj
    </div>
       <div className='text-lime-200 z-50'>
        Mandaliya
    </div>
    </div>

    <div className='w-[70vh] font-[font1 text-justify right-7 text-2xl leading-tight absolute bottom-0'>
      <p> &nbsp;&nbsp;&nbsp;&nbsp; VM is an brand that builds brands from every angle. 
        We think the best sparksfly when comfort zones get left behind & 
        friction infuses our 
        strategies, brands and communications with real feeling. We’re 
        transparent, honest and say what we mean, and when we believe in 
        something, we’re all in.</p>
    </div>
    </div>
   </>
  )
}

export default MiddelText

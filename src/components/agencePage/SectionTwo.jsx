import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SectionTwo = () => {

    const imgDivRef = useRef(null)

    useGSAP(() => {
    
      gsap.registerPlugin(ScrollTrigger);

      gsap.to(imgDivRef.current,{
            y: -1300,
        scrollTrigger:{
            markers:true,

            
            pin: true,  
            scrub:true

        }
      })
    }, []);


  return (

    <>
    

      
     <div ref={imgDivRef} className=' bg-yellow-800 relative flex h-screen w-screen'>

      <div className='bg-lime-200 left-0  flex '>
        <img className="h-85 z-0 w-60 flex top-10 rounded-4xl" src="src/assets/img.png" alt="" />
      </div>

      </div>
    </>
  )
}

export default SectionTwo

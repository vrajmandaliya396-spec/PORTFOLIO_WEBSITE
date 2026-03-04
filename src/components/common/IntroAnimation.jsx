import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Loader = (props) => {


        console.log(props.children);
              
       const Loader = useRef(null)


  useGSAP(() => {

    const tl = gsap.timeline();

    tl.from(".loader-text", {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    })
    .to(".loader", {
      y: "-100%",
      duration: 1,
      delay: 0.5,
      ease: "power4.inOut"
    })
    .set(".loader", {
      display: "none"   // 👈 removes it visually
    });

  }, []);


  return (
<>
      <div ref={Loader} className="loader fixed top-0 left-0 w-full h-screen bg-black text-white flex items-center justify-center z-9999">
      <h1 className="loader-text text-5xl">Welcome Vraj</h1>
    
    </div>
    <div>{props.children}</div>

</>
    
  );
};

export default Loader;
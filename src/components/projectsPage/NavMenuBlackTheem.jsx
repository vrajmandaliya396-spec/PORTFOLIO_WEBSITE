import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const NavMenuBlackTheem = ({setMenuOpen}) => {

      console.log(setMenuOpen);


  const whiteDiv = useRef(null);
  const line1 = useRef(null);
  const linerast2 = useRef(null);
  const line3 = useRef(null);


  useGSAP(() => {
    // Hide lime div initially (no flicker)
    gsap.set(whiteDiv.current, { y: "-100%" });
  }, []);

  const handleMouseEnter = () => {
    gsap.to(whiteDiv.current, {
      y: 0,
      duration: 0.4,
      ease: "power2.out",
      force3D: true
    });
  };

  const handleMouseLeave = () => {
    gsap.to(whiteDiv.current, {
      y: "-100%",
      duration: 0.4,
      ease: "power2.in",
      force3D: true
    });
  };
  


  return (
    <>
    <div onClick={()=>{
                setMenuOpen(true)
          }} className="cursor-pointer right-0 "> 
      {/* MENU ICON */}
      

      {/* HOVER COVER DIV */}
      <div
        className="absolute z-40  w-80 h-15 bg-black"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >

        <div  className="absolute z-50 right-65 top-[0.5vh] flex items-center justify-center">
        <svg
          
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="cursor-pointer"
        >
          <line ref={line1} x1="3" y1="6" x2="21" y2="6" />
          <line ref={linerast2} x1="3" y1="12" x2="21" y2="12" />
          <line ref={line3} x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </div>

        <div
          ref={whiteDiv}
          className="absolute inset-0 bg-lime-200 will-change-transform"
        />
      </div>

      </div>
    </>
  );
};

export default NavMenuBlackTheem;
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const NavMenu = () => {
  const whiteDiv = useRef(null);
  const line1 = useRef(null);
  const linerast2 = useRef(null);
  const line3 = useRef(null);

  let menuOpen = false;

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

  const toggleMenu = () => {
    if (!menuOpen) {
      gsap.to(line1.current, {
        y: 6,
        rotate: 45,
        transformOrigin: "center",
        duration: 0.3
      });

      gsap.to(linerast2.current, {
        opacity: 0,
        duration: 0.2
      });

      gsap.to(line3.current, {
        y: -6,
        rotate: -45,
        transformOrigin: "center",
        duration: 0.3
      });

      menuOpen = true;
    } else {
      gsap.to([line1.current, line3.current], {
        y: 0,
        rotate: 0,
        duration: 0.3
      });

      gsap.to(linerast2.current, {
        opacity: 1,
        duration: 0.2
      });

      menuOpen = false;
    }
  };

  return (
    <>
      {/* MENU ICON */}
      <div className="absolute z-50 right-65 top-[0.5vh] flex items-center justify-center">
        <svg
          onClick={toggleMenu}
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

      {/* HOVER COVER DIV */}
      <div
        className="absolute z-40 right-0 w-80 h-15 bg-white overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          ref={whiteDiv}
          className="absolute inset-0 bg-lime-200 will-change-transform"
        />
      </div>
    </>
  );
};

export default NavMenu;
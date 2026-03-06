import { useRef} from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const NavMenuInnerContent = ({ menuOpen, setMenuOpen }) => {


    
  const cursorRef = useRef(null);

  // Refs for each menu overlay
  const projectRef = useRef(null);
  const agenceRef = useRef(null);
  const contactRef = useRef(null);

  /* ================= CURSOR GLOW ================= */
  useGSAP(() => {
    const xTo = gsap.quickTo(cursorRef.current, "x", {
      duration: 0.6,
      ease: "power3",
    });

    const yTo = gsap.quickTo(cursorRef.current, "y", {
      duration: 0.6,
      ease: "power3",
    });

    const moveCursor = (e) => {
      xTo(e.clientX - 80);
      yTo(e.clientY - 80);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  /* ================= REUSABLE HOVER FUNCTIONS ================= */
  const handleMouseEnter = (ref) => {
    gsap.to(ref.current, {
      y: 0,
      duration: 0.4,
      ease: "power2.out",
      force3D: true,
    });
  };

  const handleMouseLeave = (ref) => {
    gsap.to(ref.current, {
      y: "-100%",
      duration: 0.4,
      ease: "power2.in",
      force3D: true,
    });
  };

  return (
    <>
      <div
        className={`fixed z-99999 overflow-hidden inset-0 transition-transform duration-500 
            ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <img
          src="src\assets\logo.png"
          className="absolute z-9999 h-12 w-42 top-6 left-6 mx-auto"
          alt=""
        />
        <div className="absolute z-1002 right-0 ">
          <svg
            onClick={() => {
              setMenuOpen(false);
            }}
            width="100"
            height="100"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="cursor-pointer"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>

        {/* ================= FULL SCREEN MENU ================= */}
        <div className="absolute items-center justify-center inset-0 flex flex-col uppercase text-8xl text-white  bg-black z-1000">
          {/* ============ PROJECT ============ */}
          <div
            onMouseEnter={() => handleMouseEnter(projectRef)}
            onMouseLeave={() => handleMouseLeave(projectRef)}
            className="relative w-full py-12 border-t-2  border-white/30 flex justify-center overflow-hidden cursor-pointer"
          >
            {/* Base Text */}
            <span className="relative z-10">Project</span>

            {/* Lime Slide Overlay */}
            <div
              ref={projectRef}
              className="absolute inset-0 bg-lime-200 -translate-y-full"
            />
          </div>

          {/* ============ AGENCE ============ */}
          <div
            onMouseEnter={() => handleMouseEnter(agenceRef)}
            onMouseLeave={() => handleMouseLeave(agenceRef)}
            className="relative w-full py-12 border-t-2 border-white/30 flex justify-center overflow-hidden cursor-pointer"
          >
            <span className="relative z-10">Agence</span>

            <div
              ref={agenceRef}
              className="absolute inset-0 bg-lime-200 -translate-y-full"
            />
          </div>

          {/* ============ CONTACT ============ */}
          <div
            onMouseEnter={() => handleMouseEnter(contactRef)}
            onMouseLeave={() => handleMouseLeave(contactRef)}
            className="relative w-full py-12 border-t-2 border-b-2 border-white/30 flex justify-center overflow-hidden cursor-pointer"
          >
            <span className="relative z-10">Contact</span>

            <div
              ref={contactRef}
              className="absolute inset-0 bg-lime-200 -translate-y-full"
            />
          </div>
        </div>

        <div
          ref={cursorRef}
          className="fixed top-0 left-0 w-40 h-40 bg-lime-200 opacity-25 rounded-full pointer-events-none blur-3xl z-1001 will-change-transform"
        />
      </div>
    </>
  );
};

export default NavMenuInnerContent;

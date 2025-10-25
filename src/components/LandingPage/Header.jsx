import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";
gsap.registerPlugin(SplitText);

export default function Header() {
  const navRef = useRef(null);

  useGSAP(
    () => {
      const navItems = navRef.current.querySelectorAll(".navText");

      navItems.forEach((item) => {
        const split = SplitText.create(item, {
          type: "words, chars",
        });

        // Mouse enter animation
        item.addEventListener("mouseenter", () => {
          gsap.to(split.chars, {
            y: -10,
            stagger: 0.05,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        // Mouse leave animation (return to original position)
        item.addEventListener("mouseleave", () => {
          gsap.to(split.chars, {
            y: 0,
            stagger: 0.05,
            duration: 0.3,
            ease: "power2.inOut",
          });
        });
      });
    },
    { scope: navRef }
  );

  return (
    <header className="bg-[#f7f7f7]">
      <h2 className="font-semibold text-5xl md:hidden">
        JUTIN <br /> DIKONU
      </h2>
      <nav
        ref={navRef}
        className="p-10 font-medium  flex justify-center font-bitcount "
      >
        <ul className="flex justify-between gap-3 w-3/4 max-w-150 justify-self-end ">
          {nav.map((nav) => (
            <li className=" text-xl relative group  ">
              <span className=" absolute -left-4 group-hover:-left-6  duration-400 ease-in-out">
                {"["}
              </span>
              <span className=" navText peer transition ">{nav.section}</span>
              <span className=" relative navText  left-0  navText peer transition ">
                {nav.section}
              </span>
              <span className="  relative left-0 group-hover:left-2 duration-400 ease-in-out">
                {"]"}
              </span>
            </li>
          ))}
        </ul>
        <a
          href=""
          className="text-xl absolute right-6 underline underline-offset-4"
        >
          CONTACT ME
        </a>
      </nav>
    </header>
  );
}

const nav = [
  { section: "ABOUT" },
  { section: "WORKS" },
  { section: "SERVICE" },
  { section: "CONNECT" },
];

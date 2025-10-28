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
        const split = new SplitText(item, { type: "chars" });
        const chars = split.chars;

        const clones = [];

        // Wrap and clone each character
        chars.forEach((char) => {
          const parent = char.parentNode;
          const wrapper = document.createElement("span");

          // Wrapper styles
          wrapper.style.display = "inline-block";
          wrapper.style.overflow = "hidden";
          wrapper.style.position = "relative";

          // Insert wrapper
          parent.insertBefore(wrapper, char);
          wrapper.appendChild(char);

          // Original char styles
          char.style.display = "inline-block";
          char.style.position = "relative";

          // Clone
          const clone = char.cloneNode(true);
          clone.style.position = "absolute";
          clone.style.top = "0";
          clone.style.left = "0";
          gsap.set(clone, { yPercent: 100 });
          wrapper.appendChild(clone);

          clones.push(clone);
        });

        item.addEventListener("mouseenter", () => {
          // Move originals up and out
          gsap.to(chars, {
            yPercent: -100,
            duration: 0.5,
            stagger: 0.05,
            ease: "power2.inOut",
          });

          // Move clones up into view
          gsap.to(clones, {
            yPercent: 0,
            duration: 0.5,
            stagger: 0.05,
            ease: "power2.inOut",
          });
        });

        item.addEventListener("mouseleave", () => {
          // Move originals back to normal
          gsap.to(chars, {
            yPercent: 0,
            duration: 0.5,
            stagger: 0.05,
            ease: "power2.inOut",
          });

          // Move clones back down
          gsap.to(clones, {
            yPercent: 100,
            duration: 0.5,
            stagger: 0.05,
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

              <span className="  absolute -right-4 group-hover:-right-6 duration-400 ease-in-out">
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

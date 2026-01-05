import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";
import { nav } from "../../constants/data";
gsap.registerPlugin(SplitText);

export default function Header() {
  const navRef = useRef(null);
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

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
    { scope: navRef },
  );

  return (
    <header
      className="fixed top-0 right-0 left-0 z-50 py-5 pb-7"
      style={{ mixBlendMode: "difference", color: "white" }}
    >
      <div className="text-white mix-blend-difference">
        <div className="mx-10 flex justify-between text-xl md:absolute">
          <h2
            onClick={() => scrollToSection("header")}
            className="inline-block cursor-pointer text-3xl leading-6 font-extrabold tracking-tighter"
          >
            JUTIN <br /> DIKONU
          </h2>
          <span className="self-center md:hidden">MENU</span>
        </div>
        <nav
          ref={navRef}
          className="font-spline hidden justify-center p-5 font-normal md:flex"
        >
          <ul className="flex w-3/4 max-w-150 justify-between gap-3 justify-self-end">
            {nav.map((nav, i) => (
              <li
                onClick={() => scrollToSection(nav.id)}
                key={i}
                className="group relative cursor-pointer text-base"
              >
                <span className="absolute -left-4 duration-400 ease-in-out group-hover:-left-6">
                  {"["}
                </span>
                <span className="navText peer tracking-wider transition">
                  {nav.section}
                </span>

                <span className="absolute -right-4 duration-400 ease-in-out group-hover:-right-6">
                  {"]"}
                </span>
              </li>
            ))}
          </ul>

          <p
            onClick={() => scrollToSection("contact")}
            className="absolute right-6 text-xl underline underline-offset-4"
          >
            <span className="relative inline-block cursor-pointer after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-500 hover:after:scale-x-100">
              CONTACT ME
            </span>
          </p>
        </nav>
      </div>
    </header>
  );
}

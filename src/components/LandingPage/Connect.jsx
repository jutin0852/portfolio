import React, { useRef } from "react";
import Title from "../Title";
import { nav } from "../../constants/data";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText);

export default function Connect() {
  const connectRef = useRef(null);
  const navRef = useRef(null);

  useGSAP(
    () => {
      const navItems = navRef.current.querySelectorAll(".footerNav");

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
  useGSAP(
    () => {
      const navItems = navRef.current.querySelectorAll(".footer");

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
    <section id="connect" className="mx-2 mt-20 pb-5 md:mx-10">
      <p className="bm mb-6 overflow-y-hidden text-center text-2xl font-bold">
        LETS HAVE THAT MEETING
      </p>
      <Title
        ref={connectRef}
        className={
          "mb-6 p-1 whitespace-normal text-black md:text-[clamp(6rem,12vw,7rem)] lg:-tracking-[3px]"
        }
      >
        A GREAT <br className="md:hidden" /> PRODUCT
      </Title>
      <p className="bm mb-6 overflow-y-hidden text-center text-lg font-bold tracking-[1em]">
        STARTS WITH
      </p>
      <Title
        ref={connectRef}
        className={
          "p-1 whitespace-normal text-black md:text-[clamp(6rem,12vw,7rem)] lg:-tracking-[3px]"
        }
      >
        A GREAT <br className="md:hidden" /> HIRE
      </Title>
      <section
        id="contact"
        className="mb-5 flex flex-col text-2xl sm:mb-10"
        ref={navRef}
      >
        <div className="my-8 text-center text-3xl md:self-end">
          <p className="font-semibold tracking-wider md:text-5xl">
            <span>+234 70 1189 6023</span>
          </p>
          <p className="font-semibold md:text-5xl">
            <a
              href="mailto:utindikonu8@gmail.com"
              className="relative inline-block tracking-wider after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-500 hover:after:scale-x-100"
            >
              Jutindikonu8@gmail.com
            </a>
          </p>
        </div>
        <div className="mx-5">
          <ul className="flex justify-between gap-4 md:flex-col md:items-start">
            {nav.map((link, index) => (
              <li
                key={index}
                className="group footerNav font-spline relative inline cursor-pointer text-lg md:text-xl"
              >
                <span className="absolute -left-4 duration-400 ease-in-out group-hover:-left-6 md:hidden">
                  {"["}
                </span>
                <span className="footer peer tracking-wider transition">
                  {link.section}
                </span>

                <span className="absolute -right-4 duration-400 ease-in-out group-hover:-right-6 md:hidden">
                  {"]"}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <ul className="font-spline mx-5 flex justify-center gap-3 justify-self-end md:mt-10">
          {socialLinks.map((social, i) => (
            <li key={i} className="group relative text-lg md:text-xl">
              <span className="absolute -left-4 duration-400 ease-in-out group-hover:-left-6">
                {"["}
              </span>
              <span className="footer peer tracking-wider transition">
                {social.name}
              </span>

              <span className="absolute -right-4 duration-400 ease-in-out group-hover:-right-6">
                {"]"}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}

const socialLinks = [
  {
    name: "LINKEDIN",
    url: "https://www.linkedin.com/in/jutindikonu",
  },
];

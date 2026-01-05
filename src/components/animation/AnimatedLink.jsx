import { useRef } from "react";
import gsap from "gsap";
import { NavLink } from "react-router";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText);

const AnimatedLink = ({ text, to = "/", className = "", onClick, target }) => {
  const linkRef = useRef(null);
  useGSAP(
    () => {
      const item = linkRef.current;

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
    },
    { scope: linkRef },
  );

  if (target) {
    return (
      <a
        href={to}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={`link ${className}`}
        onClick={onClick}
      >
        <span className=" group relative text-base">
          <span className="absolute -left-4 duration-400 ease-in-out group-hover:-left-6">
            {"["}
          </span>
          <span
            ref={linkRef}
            className="navText peer tracking-wider transition"
          >
            {text}
          </span>
          <span className="absolute -right-4 duration-400 ease-in-out group-hover:-right-6">
            {"]"}
          </span>
        </span>
      </a>
    );
  }

  return (
    <NavLink to={to} className={`link ${className}`} onClick={onClick}>
      <span className="group relative text-base">
        <span className="absolute -left-4 duration-400 ease-in-out group-hover:-left-6">
          {"["}
        </span>
        <span ref={linkRef} className="navText peer tracking-wider transition">
          {text}
        </span>
        <span className="absolute -right-4 duration-400 ease-in-out group-hover:-right-6">
          {"]"}
        </span>
      </span>
    </NavLink>
  );
};

export default AnimatedLink;

import { useEffect, useRef, useState } from "react";
import { nav } from "../../constants/data";
import AnimatedLabel from "../animation/AnimatedLabel";

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setHidden(currentScrollY > lastScrollY.current && currentScrollY > 80);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 py-5 pb-7 transition-transform duration-300 ease-in-out ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
      style={{ mixBlendMode: "difference", color: "white" }}
    >
      <div className="text-white mix-blend-difference">
        <div className="mx-10 flex justify-between text-xl md:absolute">
          <a
            href="#header"
            className="inline-block text-3xl leading-6 font-extrabold tracking-tighter focus-visible:outline-2 focus-visible:outline-offset-4"
            aria-label="Back to the top"
          >
            JUTIN <br /> DIKONU
          </a>
        </div>
        <nav
          aria-label="Main navigation"
          className="font-spline hidden justify-center p-5 font-normal md:flex"
        >
          <ul className="flex w-3/4 max-w-150 justify-between gap-3 justify-self-end">
            {nav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="group relative inline-block text-base focus-visible:outline-2 focus-visible:outline-offset-4"
                >
                  <span className="absolute -left-4 transition-transform duration-300 ease-out group-hover:-translate-x-2 group-focus-visible:-translate-x-2">
                    [
                  </span>
                  <AnimatedLabel className="tracking-wider">
                    {item.section}
                  </AnimatedLabel>
                  <span className="absolute -right-4 transition-transform duration-300 ease-out group-hover:translate-x-2 group-focus-visible:translate-x-2">
                    ]
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="absolute right-6 text-xl underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            CONTACT ME
          </a>
        </nav>
      </div>
    </header>
  );
}

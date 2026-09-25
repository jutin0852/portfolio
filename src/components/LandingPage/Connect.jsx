import { useRef } from "react";
import Title from "../Title";
import { nav } from "../../constants/data";
import AnimatedLabel from "../animation/AnimatedLabel";

export default function Connect() {
  const productTitleRef = useRef(null);
  const hireTitleRef = useRef(null);

  return (
    <section id="connect" className="mx-2 mt-20 pb-5 md:mx-10">
      <p className="bm font-spline mb-6 overflow-y-hidden text-center text-xs font-normal tracking-[0.16em]">
        LET&apos;S HAVE THAT MEETING
      </p>
      <Title
        ref={productTitleRef}
        className="mb-6 p-1 whitespace-normal text-black md:text-[clamp(6rem,12vw,7rem)] lg:-tracking-[3px]"
      >
        A GREAT <br className="md:hidden" /> PRODUCT
      </Title>
      <p className="bm font-spline mb-6 overflow-y-hidden text-center text-xs font-normal tracking-[0.3em]">
        STARTS WITH
      </p>
      <Title
        ref={hireTitleRef}
        className="p-1 whitespace-normal text-black md:text-[clamp(6rem,12vw,7rem)] lg:-tracking-[3px]"
      >
        A GREAT <br className="md:hidden" /> HIRE
      </Title>
      <section id="contact" className="mb-5 flex flex-col text-2xl sm:mb-10">
        <div className="my-8 text-center text-3xl md:self-end">
          <p className="font-semibold tracking-wider md:text-5xl">
            <a href="tel:+2347011896023" className="focus-visible:outline-2 focus-visible:outline-offset-4">
              +234 70 1189 6023
            </a>
          </p>
          <p className="font-semibold md:text-5xl">
            <a
              href="mailto:jutindikonu8@gmail.com"
              className="relative inline-block tracking-wider after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-500 hover:after:scale-x-100 focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              Jutindikonu8@gmail.com
            </a>
          </p>
        </div>
        <nav aria-label="Footer navigation" className="mx-5">
          <ul className="flex justify-between gap-4 md:flex-col md:items-start">
            {nav.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="group font-spline relative inline-block text-lg focus-visible:outline-2 focus-visible:outline-offset-4 md:text-xl"
                >
                  <span className="absolute -left-4 transition-transform duration-300 ease-out group-hover:-translate-x-2 group-focus-visible:-translate-x-2 md:hidden">
                    [
                  </span>
                  <AnimatedLabel className="tracking-wider">
                    {link.section}
                  </AnimatedLabel>
                  <span className="absolute -right-4 transition-transform duration-300 ease-out group-hover:translate-x-2 group-focus-visible:translate-x-2 md:hidden">
                    ]
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="font-spline mx-5 flex justify-center gap-3 justify-self-end md:mt-10">
          {socialLinks.map((social) => (
            <li key={social.name}>
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-block text-lg focus-visible:outline-2 focus-visible:outline-offset-4 md:text-xl"
              >
                <span className="absolute -left-4 transition-transform duration-300 ease-out group-hover:-translate-x-2 group-focus-visible:-translate-x-2">
                  [
                </span>
                <AnimatedLabel className="tracking-wider">
                  {social.name}
                </AnimatedLabel>
                <span className="absolute -right-4 transition-transform duration-300 ease-out group-hover:translate-x-2 group-focus-visible:translate-x-2">
                  ]
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}

const socialLinks = [
  { name: "LINKEDIN", url: "https://www.linkedin.com/in/jutindikonu" },
];

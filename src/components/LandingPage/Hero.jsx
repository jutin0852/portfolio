import React, { useRef } from "react";
import SplitText from "gsap/SplitText";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowDownRight } from "lucide-react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const imgRef = useRef(null);
   const scrollToSection = (id) => {
     document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
   };


  useGSAP(() => {
    const split = SplitText.create(".fd", {
      type: "chars",
    });

    const imgText = SplitText.create(".imgText", {
      type: "chars words",
    });
    const splitAbout = SplitText.create(".am", {
      type: "chars",
    });

    const tl = gsap.timeline();

    tl.from(split.chars.flat(), {
      y: -400,
      autoAlpha: 0,
      opacity: 0,
      delay: 0.5,

      stagger: {
        from: "center",
        amount: 1,
      },
    });

    gsap.from(".imgBack", {
      delay: 1.2,
      opacity: 0,
    });

    gsap.from(imgText.words, {
      y: -200,
      delay: 1.4,
    });

    gsap.set(imgRef.current, {
      clipPath: "inset(0% 0% 100% 0%)",
    });

    tl.to(
      imgRef.current,
      {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.5,

        ease: "power2.inOut",
      },
      "-=1.1",
    );

    gsap.from(splitAbout.chars, {
      y: -400,
      scrollTrigger: {
        trigger: ".am",
        scrub: 1,
        start: "top bottom",
        end: "top center",
        
      },
      autoAlpha: 0,
      opacity: 0,
      stagger: {
        from: "center",
        each: 0.02,
      },
    });
  });

  return (
    <section
      id="header"
      className="w-full max-w-full bg-[#f7f7f7] p-8 md:pt-20 md:pb-4"
    >
      <p className="fd relative z-49 overflow-x-hidden overflow-y-hidden py-10 text-center text-[clamp(5.5rem,18vw,9rem)] leading-[clamp(5rem,14vw,6rem)] font-extrabold -tracking-[5px] md:text-[clamp(9rem,12vw,14rem)] md:-tracking-[9px] md:whitespace-nowrap lg:-tracking-[11px]">
        FRONTEND <br className="md:hidden" />
        DEVELOPER
      </p>

      <div className="z-10 my-10 md:my-15">
        <div className="imgBack relative mx-auto flex h-72 max-w-140 max-md:justify-center md:bg-[#F1F1F1]">
          <p className="my-2 self-end overflow-y-hidden text-2xl font-bold tracking-tighter max-md:order-2">
            <p className="imgText">/ FRONTEND DEVELOPMENT</p>
            <p className="imgText">/ MOBILE DEVELOPMENT</p>
            <p className="imgText">/ WEB DEVELOPMENT</p>
          </p>
          <div className="">
            <img
              src="/jutin.png"
              ref={imgRef}
              className="w-50 md:absolute md:right-7 md:bottom-7 md:w-62"
            />
          </div>
        </div>
        <p className="font-spline mx-auto my-5 mt-10 w-100 text-center text-sm font-light max-md:hidden">
          I'M A PASSIONATE FRONTEND DEVELOPER WITH A STRONG FOCUS ON CREATING
          BEAUITFUL, RESPONSIVE, AND USER-FREINDLY INTERFACE
        </p>
      </div>
      <section className="mb-10 flex flex-col text-2xl sm:mb-20">
        <div className="md:self-end">
          <p
            onClick={() => scrollToSection("works")}
            className="cursor-pointer font-light"
          >
            <span>RECENT WORK</span>
            <ArrowDownRight strokeWidth={1} className="inline" />
          </p>
          <p className="font-bold">JUTIN'S PROJECTS</p>
        </div>
        <div className="max-md:self-end">
          <p className="font-light">
            <span> AVAILABLE FOR WORK </span>
            <ArrowDownRight strokeWidth={1} className="inline" />
          </p>
          <p className="font-bold underline underline-offset-4">
            <a href="mailto:jutindikonu8@gmail.com">Jutindikonu8@gmail.com</a>
          </p>
        </div>
      </section>
      <section className="">
        <p className="am overflow-y-hidden p-10 text-center text-[clamp(6.5rem,18vw,9rem)] leading-[clamp(5rem,14vw,6rem)] font-extrabold -tracking-[5px] md:text-[clamp(9rem,12vw,14rem)] md:-tracking-[9px] md:whitespace-nowrap lg:-tracking-[11px]">
          ABOUT <br className="md:hidden" /> ME
        </p>
      </section>
    </section>
  );
}

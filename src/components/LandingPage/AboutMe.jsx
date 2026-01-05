"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { ArrowDownRight } from "lucide-react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function AboutMe() {
  const imgRef = useRef();
  const aboutRef = useRef();

  useGSAP(() => {
    const text = aboutRef.current.querySelectorAll("p");
    text.forEach((element) => {
      const split = new SplitText(element, { type: "words" });
      gsap.from(split.words, {
        y: -25,
        scrollTrigger: {
          trigger: ".pd",
          scrub: 1,
          start: "1400 top",
          end: "1500 top",
        },
      });
    });
    gsap.from('.experience', {
      opacity: 0,
      
      scrollTrigger: {
        trigger: ".pd",
        scrub: 1,
        start: "1450 top",
        end: "1500 top",
        
      },
    });

    gsap.set(imgRef.current, {
      clipPath: "inset(0% 0% 100% 0%)",
    });
    const tl = gsap.timeline();
    tl.fromTo(".pd", { yPercent: -230 }, { yPercent: -100 });
    tl.to(imgRef.current, {
      clipPath: "inset(0% 0% 0% 0%)",
      scrollTrigger: {
        trigger: ".pd",
        scrub: 1,
        start: "1200 top",
        end: "1500 top",
      },
    });

    ScrollTrigger.create({
      animation: tl,
      trigger: "#aboutme",
      pin: true,
      end: "bottom top",
      scrub: 0.5,
      anticipatePin: 1,
    });
  });

  return (
    <section id="aboutme" className="overflow-y-hidden bg-[#101010] text-white pb-20 h-screen ">
      <div className="flex flex-col px-10 lg:px-20 max-md:pt-15 ">
        <div className="max-w-300 lg:self-end overflow-visible md:p-10 text-[clamp(4rem,18vw,5rem)] leading-[clamp(5rem,14vw,6.5rem)] font-extrabold -tracking-[3px] text-[#f7f7f7] md:text-[clamp(6rem,12vw,8rem)] md:-tracking-[5px] md:whitespace-nowrap">
          <p className="font-spline my-10 md:my-5 text-xl font-normal tracking-normal text-white">
            FOR ME
          </p>
          <p>CODE IS NOT </p>
          <p className="text-gray-400">JUST FUNCTIONALITY,</p>
          <p> ITS THE GUIDE FOR HOW</p>
          <p> PEOPLE INTERACT </p>
          <p>WITH IDEAS.</p>
        </div>
      </div>
      <div className="pd h-screen bg-[#101010]  py-30"></div>

      <div
        ref={aboutRef}
        className="fm fixed top-22 right-0 left-10 flex max-w-200 justify-between max-md:flex-col max-md:gap-6 "
      >
        <p className="font-spline text-white font-light text-xl overflow-y-hidden">ABOUT ME</p>
        <div>
          <div className="inline-block">
            <img src="/jutin.png" ref={imgRef} className="w-50 md:w-62" />
            <div className="font-spline pt-4 text-center text-xl font-light text-white">
              <p className="hello overflow-y-hidden">HELLO!</p>
              <p className="overflow-y-hidden">I AM....WELL JUST A SEC</p>
            </div>
          </div>
          <p className="experience my-6 md:my-3 text-[#AAAAAA]">
            <span className="font-spline text-xl">MY EXPERIENCE</span>
            <ArrowDownRight className="inline-block " />
          </p>
          <p className="font-spline max-w-100 overflow-y-hidden text-center text-xl font-light text-white">
            A FRONTEND DEVELOPER WITH 3
          </p>
          <p className="font-spline max-w-100 overflow-y-hidden text-center text-xl font-light text-white">
            YEARS OF EXPERIENCE IN BUILDING
          </p>
          <p className="font-spline max-w-100 overflow-y-hidden text-center text-xl font-light text-white">
            DIGITAL PRODUCTS
          </p>
        </div>
      </div>
    </section>
  );
}

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function LayeredTextAnimator() {
  const text = "JUTIN";
  const textColor = "#101010";

  const mainTextRef = useRef(null);
  const top1Ref = useRef(null);
  const top2Ref = useRef(null);
  const top3Ref = useRef(null);
  const bottom1Ref = useRef(null);
  const bottom2Ref = useRef(null);
  const bottom3Ref = useRef(null);

  const animationsRef = useRef([]);

  useEffect(() => {
    // Kill any existing animations
    animationsRef.current.forEach((anim) => anim.kill());
    animationsRef.current = [];

    animationsRef.current = [
      gsap.to(mainTextRef.current, {
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: mainTextRef.current,
          start: "center center",
          scrub: 1,
        },
      }),
      gsap.to(top1Ref.current, {
        y: -90,
        scrollTrigger: {
          trigger: mainTextRef.current,
          start: "center center",
          scrub: 1,
        },
      }),
      gsap.to(top2Ref.current, {
        y: -170,
        scrollTrigger: {
          trigger: mainTextRef.current,
          start: "center center",
          scrub: 1,
        },
      }),
      gsap.to(top3Ref.current, {
        y: -250,
        scrollTrigger: {
          trigger: mainTextRef.current,
          start: "center center",
          scrub: 1,
        },
      }),
      gsap.to(bottom1Ref.current, {
        y: 70,
        scrollTrigger: {
          trigger: mainTextRef.current,
          start: "center center",
          scrub: 1,
        },
      }),
      gsap.to(bottom2Ref.current, {
        y: 150,
        scrollTrigger: {
          trigger: mainTextRef.current,
          start: "center center",
          scrub: 1,
        },
      }),
      gsap.to(bottom3Ref.current, {
        y: 230,
        scrollTrigger: {
          trigger: mainTextRef.current,
          start: "center center",
          scrub: 1,
        },
      }),
    ];

    return () => {
      animationsRef.current.forEach((anim) => anim.kill());
    };
  }, []);

  const textLayerClass =
    " text-[clamp(10rem,18vw,5rem)] pt-16 pb-16 md:py-35 md:pb-30 leading-0 font-extrabold -tracking-[3px] md:text-[clamp(20rem,24vw,50rem)] md:tracking-[15px]  absolute bg-[#f7f7f7] font-bold  pointer-events-none";

  return (
    <div className="relative flex h-screen flex-col items-center justify-center ">
      <div className="relative m-auto flex w-full items-center justify-center">
        <h1
          ref={top3Ref}
          className={textLayerClass}
          style={{ color: textColor }}
        >
          {text}
        </h1>
        <h1
          ref={top2Ref}
          className={textLayerClass}
          style={{ color: textColor }}
        >
          {text}
        </h1>
        <h1
          ref={top1Ref}
          className={textLayerClass}
          style={{ color: textColor }}
        >
          {text}
        </h1>
        <h1
          ref={mainTextRef}
          style={{ color: textColor, zIndex: 100 }}
          className="pointer-events-none absolute h-full bg-[#f7f7f7] pt-15 pb-16 md:pt-35 md:pb-30 text-[clamp(10rem,18vw,5rem)] leading-0 font-extrabold -tracking-[3px] md:text-[clamp(20rem,24vw,50rem)] md:tracking-[15px]"
        > 
          {text}
        </h1>
        <p
          style={{ zIndex: 101 }}
          className="font-spline absolute text-4xl md:text-[70px] font-bold text-[#ef5143]"
        >
          I <span className="ml-9">AM</span>
        </p>
        <h1
          ref={bottom1Ref}
          className={textLayerClass}
          style={{ color: textColor, zIndex: 3 }}
        >
          {text}
        </h1>
        <h1
          ref={bottom2Ref}
          className={textLayerClass}
          style={{ color: textColor, zIndex: 2 }}
        >
          {text}
        </h1>
        <h1
          ref={bottom3Ref}
          className={textLayerClass}
          style={{ color: textColor }}
        >
          {text}
        </h1>
      </div>
    </div>
  );
}

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import React from "react";
import { useRef } from "react";
import LayeredTextAnimator from "../LayeredText";
gsap.registerPlugin(ScrollTrigger, SplitText);

export default function AboutMe2() {
  const ContainerRef = useRef();

  useGSAP(() => {
    console.log(ContainerRef);
    // const tl = gsap.timeline();
    gsap.to(ContainerRef.current, {
      background: "#f7f7f7",
      duration: 6,
      scrollTrigger: {
        trigger: ContainerRef.current,
        start: "-60% top",
        end: "-50% top",
        scrub: 1,
      },
    });

    ScrollTrigger.create({
      trigger: ContainerRef.current,
      // animation: tl,
      scrub: 1,
      // markers: true,
      pin: true,
    });
  });
  return (
    <section ref={ContainerRef} className="bg-[#101010] lg:pt-20 lg:pb-40">
      <div>
        <LayeredTextAnimator container={ContainerRef} />
      </div>
    </section>
  );
}

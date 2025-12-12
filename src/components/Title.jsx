import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { twMerge } from "tailwind-merge";

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

export default function Title({ title, className }) {
  useGSAP(() => {
    const splitAbout = SplitText.create(".bm", {
      type: "chars",
    });

    gsap.from(splitAbout.chars, {
      y: -400,
      scrollTrigger: {
        trigger: ".bm",
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
    <div>
      <p
        className={twMerge(
          "bm overflow-y-hidden p-10 text-center text-[clamp(6.5rem,18vw,9rem)] leading-[clamp(5rem,14vw,6rem)] font-extrabold -tracking-[5px] md:text-[clamp(9rem,12vw,14rem)] md:-tracking-[9px] md:whitespace-nowrap lg:-tracking-[11px]",
          className,
        )}
      >
        {title}
      </p>
    </div>
  );
}

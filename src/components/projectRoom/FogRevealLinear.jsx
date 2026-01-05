import { useRef } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function FogRevealLinearCanvas({
  color = "#101010",
  startNear = 0.1,
  startFar = 0.1,
  endNear = 0.01,
  endFar = 3.0,
  sectionSelector,
  start = "top top",
  end = "+=50%",
}) {
  const { scene, gl } = useThree();
  const prevFogRef = useRef(null);

  useGSAP(() => {
    if (!scene || !gl) return;

    // 1️⃣ Resolve trigger element safely
    let triggerEl = null;

    if (sectionSelector) {
      triggerEl = document.querySelector(sectionSelector);
    }

    if (!triggerEl && gl.domElement) {
      triggerEl =
        gl.domElement.closest(".projects") ||
        gl.domElement.closest(".projects-canvas");
    }

    const scroller =
      window.innerWidth < 1100
        ? document.querySelector(".scroll-container")
        : undefined;

    if (!(triggerEl instanceof HTMLElement)) return; 
    if (window.innerWidth < 1100 && !scroller) return; 

    prevFogRef.current = scene.fog;

    const fog = new THREE.Fog(color, startNear, startFar);
    scene.fog = fog;

    const ctx = gsap.context(() => {
      gsap.to(fog, {
        near: endNear,
        far: endFar,
        ease: "none",
        scrollTrigger: {
          trigger: triggerEl,
          start,
          end,
          scrub: 2,
          invalidateOnRefresh: true,
          scroller,
        },
      });
    }, triggerEl);

    return () => {
      scene.fog = prevFogRef.current || null;
      ctx.revert();
    };
  }, [
    scene,
    gl,
    color,
    startNear,
    startFar,
    endNear,
    endFar,
    sectionSelector,
    start,
    end,
  ]);

  return null;
}

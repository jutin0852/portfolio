// import { useGSAP } from "@gsap/react";
import {
  AdaptiveEvents,
  Environment,
  OrbitControls,
  Preload,
  useGLTF,
} from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { Suspense, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import BeamCone from "./BeamCone";
import FogRevealLinearCanvas from "./FogRevealLinear";
import SlideSlider from "./SlideSlider";
import SwipeHint from "./SwipeHint";
import AnimatedLink from "../animation/AnimatedLink";
gsap.registerPlugin(ScrollTrigger);

// export function ProjectRoom1() {
//   const model = useGLTF("./assets/final-scene.glb");
//   const spotRef = useRef(null);
//   const modelRef = useRef();

//   useGSAP(() => {
//     gsap.from(modelRef.current.rotation, {
//       x: 1,
//       ease: "power1.inOut",

//       scrollTrigger: {
//         trigger: ".canva",
//         start: "20% bottom",
//         end: "bottom bottom",

//         markers: true,
//         scrub: 2,
//       },
//     });
//   });

//   return (
//     <group>
//       <hemisphereLight intensity={8} />
//       {/* <pointLight
//         intensity={1}
//         position={[0.02, 0.1, 2.68]}
//         color={"red"}
//       /> */}
//       <spotLight
//         position={[0.02, 0.1, 2.68]}
//         angle={0.4}
//         ref={spotRef}
//         castShadow
//         intensity={20}
//         penumbra={1}
//         color={"white"}
//       />
//       <mesh rotation={[9.4, 3.14, 0]} position={[0, 1, -2]}>
//         <planeGeometry args={[2, 4]} />
//         <meshStandardMaterial color="black" />
//       </mesh>

//       {/* <SpotLightDebug spotRef={spotRef} /> */}
//       {/* <primitive object={spotRef.current.target} /> */}
//       <primitive
//         object={model.scene}
//         ref={modelRef}
//         castShadow
//         scale={1}
//         position={[0, -0.33, 2.28]}
//       />
//     </group>
//   );
// }
function SimplePlaybackGate() {
  const set = useThree((s) => s.set);

  useEffect(() => {
    set({ frameloop: "demand" });

    const scroller =
      window.innerWidth < 1100
        ? document.querySelector(".scroll-container")
        : undefined;

    const about = document.querySelector(".about");
    const services = document.querySelector(".services");
    const triggerEl = about || document.querySelector(".projects");
    const endEl = services || triggerEl;

    if (!triggerEl) return; // на всякий случай

    const enable = () => set({ frameloop: "always" });
    const disable = () => set({ frameloop: "demand" });

    const st = ScrollTrigger.create({
      trigger: triggerEl,
      start: about ? "center center" : "top bottom",
      endTrigger: endEl,
      end: services ? "center top" : "center top",
      scroller,
      onEnter: enable,
      onEnterBack: enable,
      onLeave: disable,
      onLeaveBack: disable,
    });

    gsap.delayedCall(0, () => (st.isActive ? enable() : disable()));

    return () => {
      st.kill();
      disable();
    };
  }, [set]);

  return null;
}
export function Scene() {
  const { scene } = useGLTF("./assets/final-scene.glb");
  const { gl } = useThree();

  useEffect(() => {
    scene.traverse((child) => {
      if (!child.isMesh) return;

      const oldMat = child.material;
      const map = oldMat?.map ?? null;

      if (map) {
        map.encoding = THREE.sRGBEncoding;
        map.flipY = false;
      }

      const mat = new THREE.MeshStandardMaterial({
        map: map || null,
        emissiveMap: map || null,
        emissive: new THREE.Color(0xffffff),
        emissiveIntensity: 1.0,
        roughness: 1.0,
        metalness: 0.0,
      });

      if (oldMat?.normalMap) mat.normalMap = oldMat.normalMap;
      if (oldMat?.aoMap) mat.aoMap = oldMat.aoMap;
      if (oldMat?.roughnessMap) mat.roughnessMap = oldMat.roughnessMap;

      oldMat?.dispose?.();
      child.material = mat;
      child.material.needsUpdate = true;
    });
  }, [scene, gl]);

  return (
    <group position={[0, -0.25, 0]}>
      <primitive object={scene} />
    </group>
  );
}

function CameraRig() {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame(() => {
    camera.position.x += (mouse.current.x * 0.1 - camera.position.x) * 0.05;
    camera.position.y += (mouse.current.y * 0.1 - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export function IntroRise({ sectionRef, children }) {
  const stageRef = useRef();
  const { invalidate } = useThree();

  useEffect(() => {
    if (!stageRef.current || !sectionRef?.current) return;

    const scroller =
      window.innerWidth < 1100
        ? document.querySelector(".scroll-container")
        : undefined;

    // Link animation
    const link = document.querySelector(".projects-canvas .link");
    let linkCtx;
    if (link) {
      linkCtx = gsap.context(() => {
        gsap.fromTo(
          link,
          { opacity: 0, pointerEvents: "none" },
          {
            opacity: 1,
            pointerEvents: "auto",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top -100%",
              end: "bottom 100%",
              scrub: true,
              scroller,
            },
          },
        );
      }, link);
    }

    // Swipe hint for mobile
    let swipeCtx;
    if (window.innerWidth < 1100) {
      const swipeText = document.querySelector(".projects-canvas__swipe");
      if (swipeText) {
        swipeCtx = gsap.context(() => {
          gsap.fromTo(
            swipeText,
            { opacity: 0, pointerEvents: "none" },
            {
              opacity: 1,
              pointerEvents: "auto",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top -100%",
                end: "bottom 100%",
                scrub: true,
                scroller,
              },
            },
          );
        }, swipeText);
      }
    }

    // Stage rotation — no gsap.context
    const startX = 1.5;
    const endX = 0;
    stageRef.current.rotation.set(startX, 0, 0);

    const enterTween = gsap.to(stageRef.current.rotation, {
      x: endX,
      ease: "none",
      onUpdate: invalidate,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 40%",
        end: "+=200%",
        scrub: 2,
        invalidateOnRefresh: true,
        scroller: scroller, // optional, undefined on desktop
      },
    });

    // Cleanup on unmount
    return () => {
      enterTween.scrollTrigger?.kill();
      enterTween.kill();
      linkCtx?.revert();
      swipeCtx?.revert();
    };
  }, [sectionRef, invalidate]);

  return (
    <group ref={stageRef}>
      {children}
      <BeamCone
        position={[0.029, 0.177, 0.37]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.1, 0.03, 0.1]}
        length={2}
        radius={0.45}
        additive
      />
    </group>
  );
}

// export const MyCanvas = () => {
//   return (
//     <section className="canva">
//       <Canvas
//         style={{ height: "100vh" }}
//         frameloop="demand"
//         shadows
//         camera={{ position: [0, 0, 4.5], fov: 35 }}
//         gl={{ preserveDrawingBuffer: true }}
//       >
//         <Suspense>
//           <OrbitControls
//             enableZoom={true}
//             enableRotate={true}
//             // maxPolarAngle={Math.PI / 2}
//             // minPolarAngle={Math.PI / 2}
//           />
//           {/* <ProjectRoom /> */}
//           <Scene />
//         </Suspense>

//         <Preload all />
//       </Canvas>
//     </section>
//   );
// };

// function SpotLightDebug({ spotRef }) {
//   useEffect(() => {
//     if (!spotRef.current) return;
//     const helper = new THREE.SpotLightHelper(spotRef.current);
//     spotRef.current.parent?.add(helper);

//     // Update helper every frame
//     const update = () => helper.update();
//     spotRef.current.parent?.add(update); // optional if dynamic movement
//     // return () => {
//     //   spotRef.current.parent?.remove(helper);
//     // };
//   }, [spotRef]);

//   return null;
// }

export default function ProjectRoom() {
  const sectionRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [exposure] = useState(0.92);
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" ? window.innerWidth > 1100 : true,
  );
  useEffect(() => {
    const onResize = () => setIsDesktop(window.innerWidth > 1100);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const slides = [
    { img: "./assets/projects/itappp.jpg", link: "/" },
    { img: "./assets/projects/mon.jpeg", link: "/" },

    // { img: "./img/projects/art4.jpg", link: "/fashion-week" },
    // { img: "./img/projects/art1.jpg", link: "/press-play" },
    // { img: "./img/projects/art5.jpg", link: "/raine" },
    // { img: "./img/projects/art2.jpg", link: "/alex-monroe" },
    // { img: "./img/projects/art3.jpg", link: "/outside" },
  ];

  return (
    <section
      className="projects relative h-[400dvh]"
      id="works"
      ref={sectionRef}
    >
      <div className="projects-canvas sticky top-0 left-0 h-dvh w-full">
        <Canvas
          dpr={[
            1,
            Math.min(
              2,
              typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1,
            ),
          ]}
          gl={{
            antialias: true,
            powerPreference: "high-performance",
            outputEncoding: THREE.sRGBEncoding,
            toneMapping: THREE.ACESFilmicToneMapping,
            toneMappingExposure: exposure,
          }}
          camera={{ position: [0, 0, 1.5], fov: 45 }}
        >
          <color attach="background" args={["#101010"]} />
          <Environment preset="night" />

          <Suspense fallback={null}>
            <FogRevealLinearCanvas
              color="#101010"
              startNear={0.01}
              startFar={2.7}
              endNear={2.5}
              endFar={3}
              sectionSelector=".projects"
              start="top top"
              end="+=200%"
            />

            <IntroRise sectionRef={sectionRef}>
              <Scene />
              <SlideSlider
                slides={slides}
                onChange={setCurrentSlide}
                onHoverChange={setHovering}
              />
            </IntroRise>

            <SimplePlaybackGate />
          </Suspense>

          {isDesktop ? <CameraRig /> : null}

          <AdaptiveEvents />
        </Canvas>

        {isDesktop ? <SwipeHint show={hovering} /> : null}

        <div className="font-spline absolute bottom-30 left-1/2 -translate-x-1/2 transform text-white md:hidden">
          Swipe slider
        </div>
        <AnimatedLink
          text="VIEW PROJECT"
          className="font-spline absolute bottom-20 left-1/2 -translate-x-1/2 transform text-white"
          to={slides[currentSlide].link}
        />
      </div>
    </section>
  );
}

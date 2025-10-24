import { useGSAP } from "@gsap/react";
import { Cylinder, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import gsap from "gsap";
import React, { useMemo, useRef } from "react";
import * as THREE from "three";

gsap.registerPlugin(useGSAP);

function makeCanva(children, color, sub) {
  const fontSize = 210;
  const fontSizeSmall = 100;

  const canvas = document.createElement("canvas");
  canvas.width = 4506;
  canvas.height = 200;

  const context = canvas.getContext("2d");

  context.fillStyle = "transparent";

  context.fillRect(0, 0, canvas.width, canvas.height);

  context.font = `bold ${fontSize}px  "Bitcount Grid Single"`;

  context.fillStyle = color;

  if (sub) {
    context.font = `${fontSizeSmall}px monospace`;
  }

  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText(children, canvas.width / 2, canvas.height / 2);

  return canvas;
}

const CylinderText = ({ size, children, color, position = [0, 0, 0], sub }) => {
  const groupRef = useRef();
  console.log(groupRef.current);
  useGSAP(() => {
    console.log(groupRef.current);
  });

  const canvas = useMemo(
    () => makeCanva(children, color, sub),
    [children, color, sub]
  );
  const backCanvas = useMemo(
    () => makeCanva(children, color, sub),
    [children, color, sub]
  );

  const texture = useRef();
  const texture2 = useRef();
  // const meshRef = React.useRef();

  useFrame(({ clock }) => {
    texture.current.offset.x = clock.getElapsedTime() / 6;
    texture2.current.offset.x = clock.getElapsedTime() / 6;
  });

  const cylArgs = [1, 1, 2, 64, 1, true];
  return (
    <group
      rotation-y={Math.PI / 4}
      scale={[0.5, size, 1]}
      position={position}
      ref={groupRef}
    >
      <Cylinder args={cylArgs}>
        <meshBasicMaterial
          transparent
          attach={"material"}
          side={THREE.FrontSide}
        >
          <canvasTexture
            attach={"map"}
            image={canvas}
            repeat={[1, 1]}
            premultiplyAlpha
            ref={texture}
            wrapS={THREE.RepeatWrapping}
            wrapT={THREE.RepeatWrapping}
            minFilter={THREE.NearestFilter} // try THREE.NearestFilter for pixel sharpness
            magFilter={THREE.NearestFilter}
            onUpdate={(s) => (s.needsUpdate = true)}
          />
        </meshBasicMaterial>
      </Cylinder>
      <Cylinder args={cylArgs}>
        <meshBasicMaterial transparent attach="material" side={THREE.BackSide}>
          <canvasTexture
            attach={"map"}
            image={backCanvas}
            repeat={[1, 1]}
            premultiplyAlpha
            ref={texture2}
            wrapS={THREE.RepeatWrapping}
            wrapT={THREE.RepeatWrapping}
            minFilter={THREE.NearestFilter} // try THREE.NearestFilter for pixel sharpness
            magFilter={THREE.NearestFilter}
            onUpdate={(s) => (s.needsUpdate = true)}
          />
        </meshBasicMaterial>
      </Cylinder>
      {/* <meshStandardMaterial color="orange" emissive={"orange"} /> */}
      {/* </mesh> */}
    </group>
  );
};

const GroupText = () => {
  const groupRef = useRef();
  useGSAP(() => {
    gsap.to(groupRef.current.position, { y: -0.12, duration: 2 ,ease:"power2.inOut"});
  });
  return (
    <group scale={0.5} rotation-z={0.2} position={[0, -3, 0]} ref={groupRef}>
      <CylinderText size={0.1} color={"black"}>
        BUILDING YOUR EXPERIENCE ON THE WEB
      </CylinderText>
      <CylinderText
        size={0.07}
        color={"black"}
        position={[0, -0.12, 0]}
        sub={true}
      >
        FRONTEND --- DEVELOPER --- REACT --- NEXTJS --- TAILWIND --- CSS ---
        HTML ---
      </CylinderText>
    </group>
  );
};

export default function RingTextRotate() {
  return (
    <Canvas
      style={{
        height: "120vh",
        width: "100%",
        background: "lightgray",
      }}
      pixelRatio={window.devicePixelRatio}
      camera={{ position: [2, 1, 2], fov: 50 }}
    >
      <ambientLight intensity={0.5} />
      <GroupText />
    </Canvas>
  );
}

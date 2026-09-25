import { Cylinder } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function createTextCanvas(text, color, isSubtext) {
  const canvas = document.createElement("canvas");
  canvas.width = 4506;
  canvas.height = 200;

  const context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.font = isSubtext
    ? '100px monospace'
    : 'bold 210px "Bitcount Grid Single"';
  context.fillStyle = color;
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText(text, canvas.width / 2, canvas.height / 2);

  return canvas;
}

function CylinderText({ children, color, complete, isSubtext, size, y }) {
  const frontCanvas = useMemo(
    () => createTextCanvas(children, color, isSubtext),
    [children, color, isSubtext],
  );
  const backCanvas = useMemo(
    () => createTextCanvas(children, color, isSubtext),
    [children, color, isSubtext],
  );
  const group = useRef();
  const frontTexture = useRef();
  const backTexture = useRef();
  const reducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useFrame(({ clock }, delta) => {
    const textureOffset = reducedMotion ? 0 : clock.getElapsedTime() / 7;

    if (frontTexture.current) frontTexture.current.offset.x = textureOffset;
    if (backTexture.current) backTexture.current.offset.x = textureOffset;

    if (group.current) {
      const targetY = complete ? -5 : y;
      group.current.position.y = reducedMotion
        ? targetY
        : THREE.MathUtils.damp(group.current.position.y, targetY, 7, delta);
    }
  });

  return (
    <group
      ref={group}
      position={[0, -3, 0]}
      rotation-y={Math.PI / 4}
      scale={[0.5, size, 1]}
    >
      <Cylinder args={[1, 1, 2, 64, 1, true]}>
        <meshBasicMaterial transparent side={THREE.FrontSide}>
          <canvasTexture
            attach="map"
            ref={frontTexture}
            image={frontCanvas}
            magFilter={THREE.NearestFilter}
            minFilter={THREE.NearestFilter}
            needsUpdate
            premultiplyAlpha
            wrapS={THREE.RepeatWrapping}
            wrapT={THREE.RepeatWrapping}
          />
        </meshBasicMaterial>
      </Cylinder>
      <Cylinder args={[1, 1, 2, 64, 1, true]}>
        <meshBasicMaterial transparent side={THREE.BackSide}>
          <canvasTexture
            attach="map"
            ref={backTexture}
            image={backCanvas}
            magFilter={THREE.NearestFilter}
            minFilter={THREE.NearestFilter}
            needsUpdate
            premultiplyAlpha
            wrapS={THREE.RepeatWrapping}
            wrapT={THREE.RepeatWrapping}
          />
        </meshBasicMaterial>
      </Cylinder>
    </group>
  );
}

function LoadingText({ complete }) {
  return (
    <group scale={0.7} rotation-z={0.2}>
      <CylinderText color="#000" complete={complete} size={0.1} y={-0.12}>
        BUILDING YOUR EXPERIENCE ON THE WEB
      </CylinderText>
      <CylinderText color="#000" complete={complete} isSubtext size={0.07} y={-0.3}>
        FRONTEND - DEVELOPER - REACT - NEXTJS - TAILWIND - CSS - HTML -
      </CylinderText>
    </group>
  );
}

export default function RingTextRotate({ complete }) {
  return (
    <Canvas
      aria-hidden="true"
      camera={{ fov: 50, position: [2, 1, 2] }}
      dpr={[1, 2]}
      gl={{ antialias: true, powerPreference: "low-power" }}
    >
      <ambientLight intensity={0.5} />
      <LoadingText complete={complete} />
    </Canvas>
  );
}

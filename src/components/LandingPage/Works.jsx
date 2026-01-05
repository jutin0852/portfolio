import React, { useRef } from "react";
import Title from "../Title";
import { Canvas } from "@react-three/fiber";
import ProjectRoom from "../projectRoom/ProjectRoom";

export default function Works() {
  const titleRef = useRef(null);
  return (
    <section className="">
      <section className="bg-black">
        <Title
          ref={titleRef}
          className={
            "text-cream md:text-[clamp(6rem,12vw,7rem)] lg:-tracking-[3px]"
          }
        >
          RECENT <br className="md:hidden" /> WORKS
        </Title>
      </section>
      <ProjectRoom />
    </section>
  );
}

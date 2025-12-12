import React from "react";
import Title from "../Title";
import { Canvas } from "@react-three/fiber";
import ProjectRoom from "../projectRoom/ProjectRoom";

export default function Works() {
  return (
    <section className="">
      <section className="bg-black">
        <Title
          title={"RECENT  WORKS"}
          className={
            "text-cream md:text-[clamp(6rem,12vw,7rem)] lg:-tracking-[3px]"
          }
        />
      </section>
        <ProjectRoom />
    </section>
  );
}

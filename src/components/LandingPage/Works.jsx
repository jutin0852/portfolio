import { useEffect, useRef, useState } from "react";
import Title from "../Title";
import ProjectRoom from "../projectRoom/ProjectRoom";
import MobileProjectList from "./MobileProjectList";

export default function Works() {
  const titleRef = useRef(null);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(max-width: 767px)").matches
      : false,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mediaQuery.matches);

    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

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
      {isMobile ? <MobileProjectList /> : <ProjectRoom />}
    </section>
  );
}

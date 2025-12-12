import { useState } from "react";

import { useEffect, useRef,  } from "react";
import "./App.css";
import RingTextRotate from "./components/RingTextRotate";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Header from "./components/LandingPage/Header";
import Hero from "./components/LandingPage/Hero";
import AboutMe from "./components/LandingPage/AboutMe";
import AboutMe2 from "./components/LandingPage/AboutMe2";
import Works from "./components/LandingPage/Works";

function App() {
  const [loading, setLoading] = useState(true);
  const [percentage, setPercentage] = useState(0);
  const homeRef = useRef();

  useGSAP(
    () => {
      if (percentage === 97) {
        gsap.to(".count", { opacity: 0, duration: 0.4 });
      }
    },
    { scope: homeRef, dependencies: [percentage] },
  );

  useEffect(() => {
    const minLoadTime = 4000; 
    const startTime = Date.now();
    let pageLoaded = false;

    const loadTimer = setTimeout(() => {
      pageLoaded = true;
    }, 2000); 

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const loadProgress = pageLoaded ? 100 : 70;
      const timeProgress = Math.min((elapsed / minLoadTime) * 100, 100);

      const targetPercentage = Math.min(loadProgress, timeProgress);

      setPercentage((prev) => {
        const newPercentage = Math.min(prev + 1, targetPercentage);

        if (newPercentage >= 100 && elapsed >= minLoadTime && pageLoaded) {
          setTimeout(() => {
            setLoading(false);
          }, 700);
          return 100;
        }

        return newPercentage;
      });
    };
    const interval = setInterval(updateProgress, 70);
    return () => {
      clearInterval(interval);
      clearTimeout(loadTimer);
    };
  }, []);

  if (loading) {
    return (
      <div className="flex h-[80vh] items-center justify-center" ref={homeRef}>
        <RingTextRotate loading={percentage} />
        <div className="font-bitcount count absolute bottom-10 left-10 text-3xl">
          {percentage}%
        </div>
      </div>
    );
  }
  return (
    <div ref={homeRef} className="h-screen">
      <Header />
      <Hero />
      <AboutMe />
      <AboutMe2 />
      <Works />
      <div className="h-screen"></div>
    </div>
  );
}

export default App;

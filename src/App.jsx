// import { useState } from "react";

import { useEffect, useRef, useState } from "react";
import "./App.css";
import RingTextRotate from "./components/RingTextRotate";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Header from "./components/LandingPage/Header";

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
    { scope: homeRef,dependencies:[percentage] }
  );

  useEffect(() => {
    const minLoadTime = 4000; // 10 seconds minimum
    const startTime = Date.now();
    let pageLoaded = false;

    // Simulate page load complete
    const loadTimer = setTimeout(() => {
      pageLoaded = true;
    }, 2000); // Simulating page resources loading

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const loadProgress = pageLoaded ? 100 : 70;
      const timeProgress = Math.min((elapsed / minLoadTime) * 100, 100);

      const targetPercentage = Math.min(loadProgress, timeProgress);

      setPercentage((prev) => {
        const newPercentage = Math.min(prev + 1, targetPercentage);

        // Check if loading is complete
        if (newPercentage >= 100 && elapsed >= minLoadTime && pageLoaded) {
          setTimeout(() => {
            setLoading(false);
          }, 700);
          return 100;
        }

        return newPercentage;
      });
    };
    const interval = setInterval(updateProgress, 50);
    return () => {
      clearInterval(interval);
      clearTimeout(loadTimer);
    };
  }, []);

  if (loading) {
    return (
      <div className=" h-[80vh] flex justify-center items-center" ref={homeRef}>
        <RingTextRotate loading={percentage} />
        <div className="absolute left-10 bottom-10 font-bitcount text-3xl count">
          {percentage}%
        </div>
      </div>
    );
  }
  return (
    <div ref={homeRef}>
      <Header />
    </div>
  );
}

export default App;

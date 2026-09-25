import { useEffect, useState } from "react";
import "./App.css";
import RingTextRotate from "./components/RingTextRotate";
import Header from "./components/LandingPage/Header";
import Hero from "./components/LandingPage/Hero";
import AboutMe from "./components/LandingPage/AboutMe";
import AboutMe2 from "./components/LandingPage/AboutMe2";
import Works from "./components/LandingPage/Works";
import Connect from "./components/LandingPage/Connect";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [loaderFontReady, setLoaderFontReady] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const showLoader = () => {
      if (isMounted) setLoaderFontReady(true);
    };

    if (!document.fonts) {
      showLoader();
      return () => {
        isMounted = false;
      };
    }

    document.fonts
      .load('700 210px "Bitcount Grid Single"')
      .then(showLoader)
      .catch(showLoader);

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    const startedAt = performance.now();
    const minimumDuration = 2200;
    const maximumDuration = 6000;
    let pageReady = document.readyState === "complete";
    let closeTimer;

    const markReady = () => {
      pageReady = true;
    };

    const finish = () => {
      window.clearInterval(progressTimer);
      setProgress(100);
      closeTimer = window.setTimeout(() => setIsLoading(false), 500);
    };

    const progressTimer = window.setInterval(() => {
      const elapsed = performance.now() - startedAt;
      const target = pageReady
        ? Math.min(100, 60 + (elapsed / minimumDuration) * 40)
        : Math.min(92, (elapsed / minimumDuration) * 72);

      setProgress((current) => Math.min(target, current + 2));

      if (
        (pageReady && elapsed >= minimumDuration) ||
        elapsed >= maximumDuration
      ) {
        finish();
      }
    }, 60);

    window.addEventListener("load", markReady, { once: true });

    return () => {
      window.clearInterval(progressTimer);
      window.clearTimeout(closeTimer);
      window.removeEventListener("load", markReady);
    };
  }, []);

  if (isLoading) {
    return (
      <main
        aria-busy="true"
        aria-label="Loading portfolio"
        className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden bg-[#f7f7f7]"
      >
        {loaderFontReady ? (
          <>
            <div className="absolute inset-0">
              <RingTextRotate complete={progress === 100} />
            </div>
            <p
              aria-live="polite"
              className="font-bitcount absolute bottom-8 left-6 text-2xl text-black sm:bottom-10 sm:left-10 sm:text-3xl"
            >
              {Math.round(progress)}%
            </p>
          </>
        ) : null}
      </main>
    );
  }

  return (
    <div>
      <Header />
      <Hero />
      <AboutMe />
      <AboutMe2 />
      <Works />
      <Connect />
    </div>
  );
}

export default App;

import { useEffect } from "react";
import { ArrowUpRight, Play } from "lucide-react";
import { Link } from "react-router";
import { projects } from "../../constants/data";

const project = projects.find(({ slug }) => slug === "stride-circle");

const tags = [
  "React Native",
  "Expo",
  "TypeScript",
  "Firebase Auth",
  "Cloud Firestore",
  "Expo Location",
  "Expo Sensors",
  "React Native Maps",
];

const built = [
  "Phone pedometer step tracking with daily goals, streaks, milestones, and celebrations.",
  "GPS walk and run recording with route, distance, pace, pause, resume, and finish states.",
  "Personal movement history plus private walking and running circles with invite codes.",
  "Daily standings, previous-day results, leader treatment, and an open-ended visual race track.",
  "Firebase email/password and Google authentication with persistent sessions and Firestore security rules.",
  "Profile characters, skeleton loading, permission states, weak-GPS states, and circle management.",
];

const challenges = [
  ["Private data, shared momentum", "Personal movement stays private while the right daily total synchronizes to each circle for group standings."],
  ["A race without a finish line", "The track resets daily and always has room for more movement. The leading member earns the visual treatment without an arbitrary endpoint."],
  ["Honest device states", "Pedometer and GPS features can be unavailable or weak, so permissions, recovery, loading, empty, and weak-signal states are treated as real product flows."],
  ["Shared data with boundaries", "Firestore rules give owners and members only the access they need, including member management and safe circle deletion."],
];

const gallery = [
  { title: "Home", file: "home.png", alt: "Stride Circle home screen showing a daily movement goal, step progress, and streak" },
  { title: "Circles", file: "circles.png", alt: "Stride Circle circles screen showing private fitness groups" },
  { title: "Race Track", file: "circle-race.png", alt: "Stride Circle race track screen showing daily circle standings and member positions" },
  { title: "Activity Recording", file: "activity-recording.png", alt: "Stride Circle activity recording screen for a GPS walk or run" },
  { title: "History", file: "history.png", alt: "Stride Circle personal movement history screen" },
  { title: "Profile", file: "profile.png", alt: "Stride Circle profile screen with movement details" },
  { title: "Character Picker", file: "character-picker.png", alt: "Stride Circle character picker with grouped profile character options" },
];

export default function StrideCircleCaseStudy() {
  useEffect(() => {
    document.title = "Stride Circle | Jutin Dikonu";
    window.scrollTo({ top: 0, behavior: "auto" });

    return () => {
      document.title = "Jutin Dikonu | Frontend Developer";
    };
  }, []);

  return (
    <main className="min-h-dvh bg-cream text-black">
      <header className="flex items-center justify-between px-5 py-6 md:px-10 md:py-8">
        <Link
          to="/"
          className="font-spline text-xs tracking-wide underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4"
        >
          BACK TO PORTFOLIO
        </Link>
        <p className="text-right text-xl leading-4 font-extrabold tracking-tighter">
          JUTIN <br /> DIKONU
        </p>
      </header>

      <section className="px-5 pt-12 pb-16 md:px-10 md:pt-20 md:pb-24">
        <p className="font-spline text-xs tracking-[0.16em] text-[#2863e6]">CASE STUDY / 03</p>
        <h1 className="mt-5 text-[clamp(4.7rem,16vw,15rem)] leading-[0.76] font-extrabold tracking-[-0.1em] uppercase">
          Stride <br /> Circle
        </h1>
        <div className="mt-12 grid gap-8 border-t border-black/20 pt-6 md:grid-cols-[1.4fr_0.8fr] md:items-end">
          <p className="max-w-3xl text-2xl leading-tight md:text-4xl">
            Social fitness for friends. Track daily movement, record walks and runs, compete in private circles, and build consistency together.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-black px-5 py-3 font-spline text-xs tracking-wide text-cream transition-transform hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              VIEW CODE <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <span
              aria-disabled="true"
              className="inline-flex cursor-not-allowed items-center gap-3 border border-black/30 px-5 py-3 font-spline text-xs tracking-wide text-black/55"
              title="Demo video URL to be added"
            >
              <Play size={15} aria-hidden="true" /> WATCH DEMO (COMING SOON)
            </span>
          </div>
        </div>
        <p className="mt-4 font-spline text-xs text-black/55">Demo video URL placeholder. An Android build link will be added when a build is available.</p>
      </section>

      <figure className="border-y border-black/20 bg-[#061a47] p-3 md:p-6">
        <img
          src="/assets/projects/stride-circle-projector.png"
          alt="Stride Circle product visual showing the circle race-track screen inside a smartphone"
          className="w-full border border-white/15"
        />
        <figcaption className="font-spline mt-3 text-xs tracking-wide text-white/70">
          Product visual: Stride Circle turns individual movement into a shared daily race.
        </figcaption>
      </figure>

      <section className="grid gap-12 px-5 py-20 md:grid-cols-12 md:px-10 md:py-32">
        <div className="md:col-span-4">
          <p className="font-spline text-xs tracking-[0.16em] text-[#2863e6]">THE PROBLEM</p>
          <h2 className="mt-4 text-5xl leading-none font-extrabold tracking-tighter uppercase md:text-7xl">
            Fitness can feel solitary.
          </h2>
        </div>
        <div className="space-y-7 text-lg leading-relaxed md:col-span-6 md:col-start-7 md:text-2xl">
          <p>
            Most fitness trackers record movement individually. Stride Circle explores a social alternative: small private groups can see each other’s movement, build accountability, and return daily through a gentle competitive loop.
          </p>
          <p>
            The goal was not to make another leaderboard. It was to make daily movement feel shared, encouraging, and worth returning to.
          </p>
        </div>
      </section>

      <section className="bg-black px-5 py-20 text-cream md:px-10 md:py-32">
        <p className="font-spline text-xs tracking-[0.16em] text-[#82a7ff]">WHAT I BUILT</p>
        <div className="mt-10 grid gap-x-16 gap-y-12 md:grid-cols-2">
          <h2 className="text-[clamp(4rem,9vw,9rem)] leading-[0.82] font-extrabold tracking-[-0.08em] uppercase">
            Product to <br /> real device.
          </h2>
          <ul className="space-y-5 border-t border-white/25 pt-6 text-xl leading-snug md:text-2xl">
            {built.map((item, index) => (
              <li key={item} className="grid grid-cols-[2rem_1fr] gap-3">
                <span className="font-spline text-xs text-[#82a7ff]">0{index + 1}</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-5 py-20 md:px-10 md:py-32">
        <div className="max-w-3xl">
          <p className="font-spline text-xs tracking-[0.16em] text-[#2863e6]">MY ROLE</p>
          <h2 className="mt-4 text-[clamp(3.5rem,8vw,8rem)] leading-[0.84] font-extrabold tracking-[-0.08em] uppercase">
            End-to-end product ownership.
          </h2>
          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-black/70 md:text-3xl">
            I owned product definition, UX decisions, React Native implementation, Firebase integration, real-device testing, and iterative polish.
          </p>
        </div>
        <div className="mt-14 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="border border-black/25 px-3 py-2 font-spline text-xs tracking-wide">
              {tag}
            </span>
          ))}
        </div>
      </section>

      <section className="bg-[#e9f0ff] px-5 py-20 md:px-10 md:py-32">
        <p className="font-spline text-xs tracking-[0.16em] text-[#2863e6]">APP GALLERY</p>
        <h2 className="mt-4 max-w-4xl text-[clamp(3.5rem,8vw,8rem)] leading-[0.84] font-extrabold tracking-[-0.08em] uppercase">
          The product in motion.
        </h2>
        <div className="-mx-5 mt-12 overflow-x-auto px-5 pb-5 md:-mx-10 md:px-10">
          <div
            aria-label="Stride Circle app screens"
            className="flex w-max snap-x snap-mandatory gap-5 pr-5 md:gap-7 md:pr-10"
          >
            {gallery.map((screen) => (
              <figure key={screen.file} className="w-[10.5rem] shrink-0 snap-start sm:w-48 lg:w-56">
                <div className="overflow-hidden rounded-[1.85rem] border-[5px] border-black bg-black shadow-[0_14px_30px_rgb(6_26_71_/_0.18)]">
                  <img
                    src={`/assets/projects/stride-circle/${screen.file}`}
                    alt={screen.alt}
                    loading="lazy"
                    className="block aspect-[1179/2556] w-full object-cover"
                  />
                </div>
                <figcaption className="font-spline mt-3 text-xs tracking-wide text-black/70">
                  {screen.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-10 md:py-32">
        <div className="max-w-3xl">
          <p className="font-spline text-xs tracking-[0.16em] text-[#2863e6]">TECHNICAL CHALLENGES</p>
          <h2 className="mt-4 text-[clamp(3.5rem,8vw,8rem)] leading-[0.84] font-extrabold tracking-[-0.08em] uppercase">
            Real product constraints.
          </h2>
        </div>
        <div className="mt-16 grid gap-x-12 gap-y-10 md:grid-cols-2">
          {challenges.map(([title, description], index) => (
            <article key={title} className="border-t border-black/25 pt-5">
              <p className="font-spline text-xs text-[#2863e6]">0{index + 1}</p>
              <h3 className="mt-7 text-3xl leading-none font-bold tracking-tight">{title}</h3>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-black/70">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="bg-black px-5 py-16 text-cream md:px-10 md:py-24">
        <p className="font-spline text-xs tracking-[0.16em] text-[#82a7ff]">STRIDE CIRCLE</p>
        <div className="mt-7 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <h2 className="max-w-3xl text-[clamp(3.5rem,8vw,8rem)] leading-[0.84] font-extrabold tracking-[-0.08em] uppercase">
            Explore the code.
          </h2>
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-cream px-5 py-3 font-spline text-xs tracking-wide transition-colors hover:bg-cream hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            VIEW CODE <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </footer>
    </main>
  );
}

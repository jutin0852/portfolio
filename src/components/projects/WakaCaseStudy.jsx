import { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { projects } from "../../constants/data";

const project = projects.find(({ slug }) => slug === "waka");

const tags = [
  "React Native",
  "Expo",
  "TypeScript",
  "Expo Router",
  "Firebase Auth",
  "Cloud Firestore",
  "HealthKit & Health Connect",
  "Mapbox",
];

const built = [
  "Daily step tracking through HealthKit and Health Connect, with personal goals, streaks, and milestone celebrations.",
  "Walking circles, private or public and capped at 20 members, with live daily and weekly standings, cheers, and member chat.",
  "Find people by username, with friend requests and circle invitations.",
  "An Activity tab with GPS walk recording on a private map, route planning, and saved walks with shareable summaries.",
  "A History calendar that shows every day against your goal, alongside streaks and weekly progress.",
  "Firebase email and Google sign-in, Firestore Security Rules, opt-in daily walking reminders, and in-app account deletion.",
];

const principles = [
  ["Keep circles small", "Circles are capped at 20 people, so standings feel like friends cheering each other on rather than an anonymous leaderboard."],
  ["Share the total, keep the rest", "Each circle sees a member's daily steps and nothing more. Routes and personal history stay private."],
  ["Reward showing up", "Goals, streaks and small celebrations make the habit feel good on an average day, not only on a record one."],
];

const gallery = [
  { title: "Home", file: "home.webp", alt: "Waka home screen showing today's steps against a 6,000 step goal, a 13 day streak, and the featured circle's standings" },
  { title: "Circles", file: "circles.webp", alt: "Waka circles screen listing three walking circles with member avatars and a Find people search" },
  { title: "Activity", file: "activity.webp", alt: "Waka activity screen with a map, route and territory controls, and a Start button for recording a walk" },
  { title: "History", file: "history.webp", alt: "Waka history screen with a monthly calendar of daily step totals and a 13 day streak" },
  { title: "Profile", file: "profile.webp", alt: "Waka profile screen with today, weekly, and total step counts, Find people, and achievements" },
];

export default function WakaCaseStudy() {
  useEffect(() => {
    document.title = "Waka | Jutin Dikonu";
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
        <p className="font-spline text-xs tracking-[0.16em] text-[#1b7aa3]">CASE STUDY / 03</p>
        <h1 className="mt-5 text-[clamp(4.7rem,16vw,15rem)] leading-[0.76] font-extrabold tracking-[-0.1em] uppercase">
          Waka
        </h1>
        <div className="mt-12 grid gap-8 border-t border-black/20 pt-6 md:grid-cols-[1.4fr_0.8fr] md:items-end">
          <p className="max-w-3xl text-2xl leading-tight md:text-4xl">
            A social walking app. Track your steps, record walks, and keep each other going in small circles of friends.
          </p>
          <div className="flex flex-wrap gap-3">
            {project.codeUrl ? (
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-black px-5 py-3 font-spline text-xs tracking-wide text-cream transition-transform hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4"
              >
                VIEW CODE <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            ) : null}
            <span className="inline-flex items-center gap-3 border border-black/30 px-5 py-3 font-spline text-xs tracking-wide">
              <span aria-hidden="true" className="size-2 rounded-full bg-[#13b5e8]" />
              IN ACTIVE DEVELOPMENT / IOS + ANDROID
            </span>
          </div>
        </div>
      </section>

      <figure className="border-y border-black/20 bg-[#0a8cbf]">
        <img
          src="/assets/projects/waka-projector.webp"
          alt="Waka app screens: history calendar, circles, home with daily steps, activity map, and profile"
          width="2000"
          height="1250"
          className="block w-full"
        />
        <figcaption className="font-spline px-5 py-3 text-xs tracking-wide text-white/80 md:px-10">
          Product visual: Waka turns individual steps into a shared daily habit.
        </figcaption>
      </figure>

      <section className="grid gap-12 px-5 py-20 md:grid-cols-12 md:px-10 md:py-32">
        <div className="md:col-span-4">
          <p className="font-spline text-xs tracking-[0.16em] text-[#1b7aa3]">THE PROBLEM</p>
          <h2 className="mt-4 text-5xl leading-none font-extrabold tracking-tighter uppercase md:text-7xl">
            Fitness can feel solitary.
          </h2>
        </div>
        <div className="space-y-7 text-lg leading-relaxed md:col-span-6 md:col-start-7 md:text-2xl">
          <p>
            Most fitness trackers record movement individually. Waka explores a social alternative: small circles of friends can see each other’s progress, build accountability, and return daily through a gentle competitive loop.
          </p>
          <p>
            The goal was not to make another leaderboard. It was to make daily movement feel shared, encouraging, and worth returning to.
          </p>
        </div>
      </section>

      <section className="bg-black px-5 py-20 text-cream md:px-10 md:py-32">
        <p className="font-spline text-xs tracking-[0.16em] text-[#5cc8ee]">WHAT I BUILT</p>
        <div className="mt-10 grid gap-x-16 gap-y-12 md:grid-cols-2">
          <h2 className="text-[clamp(4rem,9vw,9rem)] leading-[0.82] font-extrabold tracking-[-0.08em] uppercase">
            Product to <br /> real device.
          </h2>
          <ul className="space-y-5 border-t border-white/25 pt-6 text-xl leading-snug md:text-2xl">
            {built.map((item, index) => (
              <li key={item} className="grid grid-cols-[2rem_1fr] gap-3">
                <span className="font-spline text-xs text-[#5cc8ee]">0{index + 1}</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-5 py-20 md:px-10 md:py-32">
        <div className="max-w-3xl">
          <p className="font-spline text-xs tracking-[0.16em] text-[#1b7aa3]">MY ROLE</p>
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

      <section className="bg-[#e8f6fc] px-5 py-20 md:px-10 md:py-32">
        <p className="font-spline text-xs tracking-[0.16em] text-[#1b7aa3]">APP GALLERY</p>
        <h2 className="mt-4 max-w-4xl text-[clamp(3.5rem,8vw,8rem)] leading-[0.84] font-extrabold tracking-[-0.08em] uppercase">
          The product in motion.
        </h2>
        <div className="-mx-5 mt-12 overflow-x-auto px-5 pb-5 md:-mx-10 md:px-10">
          <div
            aria-label="Waka app screens"
            className="flex w-max snap-x snap-mandatory gap-5 pr-5 md:gap-7 md:pr-10"
          >
            {gallery.map((screen) => (
              <figure key={screen.file} className="w-[10.5rem] shrink-0 snap-start sm:w-48 lg:w-56">
                <div className="overflow-hidden rounded-[1.85rem] border-[5px] border-black bg-black shadow-[0_14px_30px_rgb(10_70_100_/_0.18)]">
                  <img
                    src={`/assets/projects/waka/${screen.file}`}
                    width="720"
                    height="1559"
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
          <p className="font-spline text-xs tracking-[0.16em] text-[#1b7aa3]">APPROACH</p>
          <h2 className="mt-4 text-[clamp(3.5rem,8vw,8rem)] leading-[0.84] font-extrabold tracking-[-0.08em] uppercase">
            Small circles. Steady habits.
          </h2>
        </div>
        <div className="mt-16 grid gap-x-12 gap-y-10 md:grid-cols-3">
          {principles.map(([title, description], index) => (
            <article key={title} className="border-t border-black/25 pt-5">
              <p className="font-spline text-xs text-[#1b7aa3]">0{index + 1}</p>
              <h3 className="mt-7 text-3xl leading-none font-bold tracking-tight">{title}</h3>
              <p className="mt-4 max-w-sm text-lg leading-relaxed text-black/70">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="bg-black px-5 py-16 text-cream md:px-10 md:py-24">
        <p className="font-spline text-xs tracking-[0.16em] text-[#5cc8ee]">WAKA</p>
        <div className="mt-7 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <h2 className="max-w-3xl text-[clamp(3.5rem,8vw,8rem)] leading-[0.84] font-extrabold tracking-[-0.08em] uppercase">
            {project.codeUrl ? "Explore the code." : "See more work."}
          </h2>
          {project.codeUrl ? (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-cream px-5 py-3 font-spline text-xs tracking-wide transition-colors hover:bg-cream hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              VIEW CODE <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          ) : (
            <Link
              to="/"
              className="inline-flex items-center gap-3 border border-cream px-5 py-3 font-spline text-xs tracking-wide transition-colors hover:bg-cream hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              BACK TO PORTFOLIO <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          )}
        </div>
      </footer>
    </main>
  );
}

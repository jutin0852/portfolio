import { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { projects } from "../../constants/data";

const project = projects.find(({ slug }) => slug === "placeit");

const responsibilities = [
  "Built the student job-application and onboarding experience.",
  "Implemented the landing page that introduces PlaceIT's placement marketplace.",
  "Developed the about page to communicate the platform's purpose and trust signals.",
  "Built the contact page and its support-focused form experience.",
];

const decisions = [
  ["Start with clarity", "The landing page explains the audience, the placement problem, and the next action before introducing platform detail."],
  ["Reduce application friction", "The onboarding form groups student information into a clear sequence so applicants can provide the details needed for a placement match."],
  ["Design for trust", "Verified-company messaging, clear support routes, and direct language help users feel confident using a placement platform."],
];

export default function PlaceitCaseStudy() {
  useEffect(() => {
    document.title = "PlaceIT | Jutin Dikonu";
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
        <p className="font-spline text-xs tracking-[0.16em] text-[#4268d9]">CASE STUDY / 02</p>
        <h1 className="mt-5 text-[clamp(5.5rem,18vw,16rem)] leading-[0.74] font-extrabold tracking-[-0.1em] uppercase">
          PlaceIT
        </h1>
        <div className="mt-12 grid gap-8 border-t border-black/20 pt-6 md:grid-cols-[1.4fr_0.8fr] md:items-end">
          <p className="max-w-2xl text-2xl leading-tight md:text-4xl">
            A placement marketplace helping Nigerian students and corps members find verified SIWES and NYSC opportunities.
          </p>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-fit items-center gap-3 bg-black px-5 py-3 font-spline text-xs tracking-wide text-cream transition-transform hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            VISIT LIVE SITE <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </section>

      <figure className="border-y border-black/20 bg-[#e9edff] p-3 md:p-6">
        <img
          src="/assets/projects/placeit-projector.png"
          alt="PlaceIT landing page for finding industrial training placements"
          className="w-full border border-black/15"
        />
        <figcaption className="font-spline mt-3 text-xs tracking-wide text-black/65">
          Landing page: a direct route from placement problem to verified opportunities.
        </figcaption>
      </figure>

      <section className="grid gap-12 px-5 py-20 md:grid-cols-12 md:px-10 md:py-32">
        <div className="md:col-span-4">
          <p className="font-spline text-xs tracking-[0.16em] text-[#4268d9]">THE PROBLEM</p>
          <h2 className="mt-4 text-5xl leading-none font-extrabold tracking-tighter uppercase md:text-7xl">
            Placement searching was too fragmented.
          </h2>
        </div>
        <div className="space-y-7 text-lg leading-relaxed md:col-span-6 md:col-start-7 md:text-2xl">
          <p>
            PlaceIT brings SIWES and NYSC placement discovery, application, and progress tracking into one platform. It gives students and corps members a clearer alternative to searching through informal networks, outdated listings, and repeated cold outreach.
          </p>
          <p>
            As a front-end developer on the project, I worked on the public-facing experience and the application path that helps students begin a verified placement journey.
          </p>
        </div>
      </section>

      <section className="bg-black px-5 py-20 text-cream md:px-10 md:py-32">
        <p className="font-spline text-xs tracking-[0.16em] text-[#8aa4ff]">MY ROLE</p>
        <div className="mt-10 grid gap-x-16 gap-y-12 md:grid-cols-2">
          <h2 className="text-[clamp(4rem,9vw,9rem)] leading-[0.82] font-extrabold tracking-[-0.08em] uppercase">
            Front-end <br /> Developer
          </h2>
          <ul className="space-y-5 border-t border-white/25 pt-6 text-xl leading-snug md:text-2xl">
            {responsibilities.map((item, index) => (
              <li key={item} className="grid grid-cols-[2rem_1fr] gap-3">
                <span className="font-spline text-xs text-[#8aa4ff]">0{index + 1}</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-5 py-20 md:px-10 md:py-32">
        <div className="max-w-3xl">
          <p className="font-spline text-xs tracking-[0.16em] text-[#4268d9]">APPROACH</p>
          <h2 className="mt-4 text-[clamp(3.5rem,8vw,8rem)] leading-[0.84] font-extrabold tracking-[-0.08em] uppercase">
            Make the next step obvious.
          </h2>
        </div>
        <div className="mt-16 grid gap-x-12 gap-y-10 md:grid-cols-3">
          {decisions.map(([title, description], index) => (
            <article key={title} className="border-t border-black/25 pt-5">
              <p className="font-spline text-xs text-[#4268d9]">0{index + 1}</p>
              <h3 className="mt-7 text-3xl leading-none font-bold tracking-tight">{title}</h3>
              <p className="mt-4 max-w-sm text-lg leading-relaxed text-black/70">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-10 border-y border-black/20 bg-[#e9edff] px-5 py-12 md:grid-cols-[1.05fr_0.95fr] md:px-10 md:py-20">
        <div className="self-end">
          <p className="font-spline text-xs tracking-[0.16em] text-[#4268d9]">APPLICATION EXPERIENCE</p>
          <h2 className="mt-4 max-w-xl text-5xl leading-none font-extrabold tracking-tighter uppercase md:text-7xl">
            A better first step for students.
          </h2>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-black/70">
            I built the application area as an understandable onboarding moment: applicants enter contact details, school information, course of study, and preferred location in a form designed to support an accurate placement match.
          </p>
        </div>
        <figure>
          <img
            src="/assets/projects/placeit-application.png"
            alt="PlaceIT student onboarding form for industrial training placement"
            className="w-full border border-black/15"
          />
          <figcaption className="font-spline mt-3 text-xs tracking-wide text-black/65">
            Student onboarding: a focused intake flow for placement matching.
          </figcaption>
        </figure>
      </section>

      <section className="grid gap-12 px-5 py-20 md:grid-cols-12 md:px-10 md:py-32">
        <div className="md:col-span-4">
          <p className="font-spline text-xs tracking-[0.16em] text-[#4268d9]">FRONT-END FOCUS</p>
          <h2 className="mt-4 text-5xl leading-none font-extrabold tracking-tighter uppercase md:text-7xl">
            Built for real users.
          </h2>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <div className="grid border-y border-black/20 font-spline text-sm md:grid-cols-2">
            <p className="border-b border-black/20 py-5 md:border-r md:px-5">Public pages</p>
            <p className="border-b border-black/20 py-5 font-medium md:px-5">Landing, about, and contact</p>
            <p className="border-b border-black/20 py-5 md:border-r md:px-5">Core journey</p>
            <p className="border-b border-black/20 py-5 font-medium md:px-5">Student placement application and onboarding</p>
            <p className="border-b border-black/20 py-5 md:border-r md:px-5">Experience goals</p>
            <p className="border-b border-black/20 py-5 font-medium md:px-5">Responsive, accessible, and easy to understand</p>
            <p className="py-5 md:border-r md:px-5">Product domain</p>
            <p className="py-5 font-medium md:px-5">SIWES and NYSC placement marketplace</p>
          </div>
        </div>
      </section>

      <footer className="bg-black px-5 py-16 text-cream md:px-10 md:py-24">
        <p className="font-spline text-xs tracking-[0.16em] text-[#8aa4ff]">PLACEIT</p>
        <div className="mt-7 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <h2 className="max-w-3xl text-[clamp(3.5rem,8vw,8rem)] leading-[0.84] font-extrabold tracking-[-0.08em] uppercase">
            See the live platform.
          </h2>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-cream px-5 py-3 font-spline text-xs tracking-wide transition-colors hover:bg-cream hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            OPEN PLACEIT <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </footer>
    </main>
  );
}

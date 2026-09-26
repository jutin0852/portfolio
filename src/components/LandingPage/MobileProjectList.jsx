import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { projects } from "../../constants/data";

export default function MobileProjectList() {
  return (
    <section
      className="bg-cream px-5 pt-8 pb-24 text-black md:px-10 md:pt-12 md:pb-20 2xl:px-20"
      aria-labelledby="mobile-project-list-title"
    >
      <div className="font-spline flex items-center justify-between border-b border-black/25 pb-3 text-xs tracking-[0.16em] md:pb-4 md:text-sm">
        <h2 id="mobile-project-list-title">SELECTED PROJECTS</h2>
        <span>{String(projects.length).padStart(2, "0")}</span>
      </div>

      <div className="border-b border-black">
        {projects.map((project, index) => (
          <Link
            key={project.slug}
            to={`/projects/${project.slug}`}
            className="mobile-project-item group block border-t border-black py-6 first:border-t-0 focus-visible:outline-2 focus-visible:outline-offset-4 md:py-6"
            style={{ "--project-delay": `${index * 90}ms` }}
          >
            <div className="flex flex-wrap items-start gap-4 md:grid md:grid-cols-[2.5rem_minmax(0,1fr)_18rem] md:gap-8 lg:grid-cols-[3rem_minmax(0,1fr)_22rem] lg:gap-12">
              <span className="font-spline pt-1 text-xs text-black/55 md:pt-2 md:text-sm">
                0{index + 1}
              </span>
              <div className="flex min-w-0 flex-1 items-start justify-between gap-4">
                <h3 className="max-w-[14rem] text-[clamp(2.25rem,11vw,3.5rem)] leading-[0.86] font-extrabold tracking-[-0.07em] uppercase md:max-w-none md:text-[clamp(3rem,4vw,5.5rem)]">
                  {project.name}
                </h3>
                <ArrowUpRight
                  className="mt-1 shrink-0 transition-transform duration-300 ease-out group-active:translate-x-1 group-active:-translate-y-1 group-focus-visible:translate-x-1 group-focus-visible:-translate-y-1 md:mt-2 md:group-hover:translate-x-2 md:group-hover:-translate-y-2"
                  size={28}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </div>
            </div>

            <div className="mt-5 w-full overflow-hidden border border-black/15 bg-black md:mt-0 md:w-auto">
              <img
                src={project.image}
                alt={`${project.name} project preview`}
                className="block aspect-[16/10] w-full object-cover transition-transform duration-700 ease-out group-active:scale-[1.03] group-focus-visible:scale-[1.03] md:group-hover:scale-[1.03]"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

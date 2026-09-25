import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { projects } from "../../constants/data";

export default function MobileProjectList() {
  return (
    <section
      className="bg-cream px-5 pt-8 pb-24 text-black"
      aria-labelledby="mobile-project-list-title"
    >
      <div className="font-spline flex items-center justify-between border-b border-black/25 pb-3 text-xs tracking-[0.16em]">
        <h2 id="mobile-project-list-title">SELECTED PROJECTS</h2>
        <span>{String(projects.length).padStart(2, "0")}</span>
      </div>

      <div className="border-b border-black">
        {projects.map((project, index) => (
          <Link
            key={project.slug}
            to={`/projects/${project.slug}`}
            className="mobile-project-item group block border-t border-black py-6 first:border-t-0 focus-visible:outline-2 focus-visible:outline-offset-4"
            style={{ "--project-delay": `${index * 90}ms` }}
          >
            <div className="flex items-start gap-4">
              <span className="font-spline pt-1 text-xs text-black/55">
                0{index + 1}
              </span>
              <div className="flex min-w-0 flex-1 items-start justify-between gap-4">
                <h3 className="max-w-[14rem] text-[clamp(2.25rem,11vw,3.5rem)] leading-[0.86] font-extrabold tracking-[-0.07em] uppercase">
                  {project.name}
                </h3>
                <ArrowUpRight
                  className="mt-1 shrink-0 transition-transform duration-300 ease-out group-active:translate-x-1 group-active:-translate-y-1 group-focus-visible:translate-x-1 group-focus-visible:-translate-y-1"
                  size={22}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </div>
            </div>

            <div className="mt-5 overflow-hidden border border-black/15 bg-black">
              <img
                src={project.image}
                alt={`${project.name} project preview`}
                className="block aspect-[16/10] w-full object-cover transition-transform duration-700 ease-out group-active:scale-[1.03] group-focus-visible:scale-[1.03]"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

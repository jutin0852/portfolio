import { useEffect } from "react";
import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../../constants/data";

const project = projects.find(({ slug }) => slug === "glad-style-fashion");

const responsibilities = [
  "Designed and built the complete storefront experience.",
  "Created responsive collection, filtering, search, account, and shopping-bag flows.",
  "Built product-detail journeys that support choosing a size, adding order notes, and adding items to the bag.",
  "Prepared the project for deployment on Vercel.",
];

const principles = [
  ["Shop quickly", "Collection controls, filters, and sorting make browsing a small catalogue feel deliberate rather than overwhelming."],
  ["Keep product decisions clear", "The product page puts imagery, price, availability, size, quantity, and the add-to-bag action in one focused reading order."],
  ["Make the brand feel considered", "A restrained palette, generous product photography, fine borders, and a single pink accent let the clothing lead the experience."],
];

export default function ProjectCaseStudy() {
  useEffect(() => {
    document.title = "Glad Style Fashion | Jutin Dikonu";
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
        <p className="font-spline text-xs tracking-[0.16em] text-[#c71964]">CASE STUDY / 01</p>
        <h1 className="mt-5 max-w-6xl text-[clamp(4.8rem,15vw,14rem)] leading-[0.78] font-extrabold tracking-[-0.09em] uppercase">
          Glad Style <br /> Fashion
        </h1>
        <div className="mt-12 grid gap-8 border-t border-black/20 pt-6 md:grid-cols-[1.4fr_0.8fr] md:items-end">
          <p className="max-w-2xl text-2xl leading-tight md:text-4xl">
            A responsive e-commerce storefront for a Nigerian ready-to-wear fashion brand.
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

      <figure className="border-y border-black/20 bg-[#f8edf1] p-3 md:p-6">
        <img
          src="/assets/projects/glad-style-fashion-home.png"
          alt="Glad Style Fashion collection page with product categories and ready-to-wear pieces"
          className="w-full border border-black/15"
        />
        <figcaption className="font-spline mt-3 text-xs tracking-wide text-black/65">
          Collection page: discovery, filtering, sorting, and product browsing.
        </figcaption>
      </figure>

      <section className="grid gap-12 px-5 py-20 md:grid-cols-12 md:px-10 md:py-32">
        <div className="md:col-span-4">
          <p className="font-spline text-xs tracking-[0.16em] text-[#c71964]">THE BRIEF</p>
          <h2 className="mt-4 text-5xl leading-none font-extrabold tracking-tighter uppercase md:text-7xl">
            Fashion should be easy to shop.
          </h2>
        </div>
        <div className="space-y-7 text-lg leading-relaxed md:col-span-6 md:col-start-7 md:text-2xl">
          <p>
            Glad Style Fashion needed a digital storefront that gave its ready-to-wear and custom pieces the same sense of care as the garments themselves. The site needed to let shoppers move naturally from discovery to a confident product decision.
          </p>
          <p>
            I built the project end to end, shaping the storefront, the catalogue experience, product pages, account access, bag interactions, and the responsive behavior across screen sizes.
          </p>
        </div>
      </section>

      <section className="bg-black px-5 py-20 text-cream md:px-10 md:py-32">
        <p className="font-spline text-xs tracking-[0.16em] text-[#c71964]">MY ROLE</p>
        <div className="mt-10 grid gap-x-16 gap-y-12 md:grid-cols-2">
          <h2 className="text-[clamp(4rem,9vw,9rem)] leading-[0.82] font-extrabold tracking-[-0.08em] uppercase">
            Front-end <br /> Developer
          </h2>
          <ul className="space-y-5 border-t border-white/25 pt-6 text-xl leading-snug md:text-2xl">
            {responsibilities.map((item, index) => (
              <li key={item} className="grid grid-cols-[2rem_1fr] gap-3">
                <span className="font-spline text-xs text-[#f1488d]">0{index + 1}</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-5 py-20 md:px-10 md:py-32">
        <div className="max-w-3xl">
          <p className="font-spline text-xs tracking-[0.16em] text-[#c71964]">APPROACH</p>
          <h2 className="mt-4 text-[clamp(3.5rem,8vw,8rem)] leading-[0.84] font-extrabold tracking-[-0.08em] uppercase">
            Product first. Friction last.
          </h2>
        </div>
        <div className="mt-16 grid gap-x-12 gap-y-10 md:grid-cols-3">
          {principles.map(([title, description], index) => (
            <article key={title} className="border-t border-black/25 pt-5">
              <p className="font-spline text-xs text-[#c71964]">0{index + 1}</p>
              <h3 className="mt-7 text-3xl leading-none font-bold tracking-tight">{title}</h3>
              <p className="mt-4 max-w-sm text-lg leading-relaxed text-black/70">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-10 border-y border-black/20 bg-[#f8edf1] px-5 py-12 md:grid-cols-[1.05fr_0.95fr] md:px-10 md:py-20">
        <div className="self-end">
          <p className="font-spline text-xs tracking-[0.16em] text-[#c71964]">PRODUCT EXPERIENCE</p>
          <h2 className="mt-4 max-w-xl text-5xl leading-none font-extrabold tracking-tighter uppercase md:text-7xl">
            Clear choices at the point of purchase.
          </h2>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-black/70">
            The product page combines an image gallery with the details that matter when choosing a fashion piece: price, availability, size, quantity, a request field, and a direct add-to-bag action.
          </p>
        </div>
        <figure>
          <img
            src="/assets/projects/glad-style-fashion-product.png"
            alt="Glad Style Fashion product page for a magenta balloon-sleeve boubou"
            className="w-full border border-black/15"
          />
          <figcaption className="font-spline mt-3 text-xs tracking-wide text-black/65">
            Product detail page: visual confidence and a structured purchase flow.
          </figcaption>
        </figure>
      </section>

      <section className="grid gap-12 px-5 py-20 md:grid-cols-12 md:px-10 md:py-32">
        <div className="md:col-span-4">
          <p className="font-spline text-xs tracking-[0.16em] text-[#c71964]">BUILD</p>
          <h2 className="mt-4 text-5xl leading-none font-extrabold tracking-tighter uppercase md:text-7xl">
            Built for the web.
          </h2>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <div className="grid border-y border-black/20 font-spline text-sm md:grid-cols-2">
            <p className="border-b border-black/20 py-5 md:border-r md:px-5">Framework</p>
            <p className="border-b border-black/20 py-5 font-medium md:px-5">Next.js and React</p>
            <p className="border-b border-black/20 py-5 md:border-r md:px-5">Styling</p>
            <p className="border-b border-black/20 py-5 font-medium md:px-5">Tailwind CSS</p>
            <p className="border-b border-black/20 py-5 md:border-r md:px-5">Interface</p>
            <p className="border-b border-black/20 py-5 font-medium md:px-5">Responsive commerce flows and Lucide icons</p>
            <p className="py-5 md:border-r md:px-5">Deployment</p>
            <p className="py-5 font-medium md:px-5">Vercel</p>
          </div>
        </div>
      </section>

      <footer className="bg-black px-5 py-16 text-cream md:px-10 md:py-24">
        <p className="font-spline text-xs tracking-[0.16em] text-[#f1488d]">GLAD STYLE FASHION</p>
        <div className="mt-7 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <h2 className="max-w-3xl text-[clamp(3.5rem,8vw,8rem)] leading-[0.84] font-extrabold tracking-[-0.08em] uppercase">
            See the live project.
          </h2>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-cream px-5 py-3 font-spline text-xs tracking-wide transition-colors hover:bg-cream hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            OPEN GLAD STYLE FASHION <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </footer>
    </main>
  );
}

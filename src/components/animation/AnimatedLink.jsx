import AnimatedLabel from "./AnimatedLabel";
import { Link } from "react-router";

const AnimatedLink = ({ text, href, to, className = "" }) => {
  const content = (
    <>
      <span className="absolute -left-4 transition-transform duration-300 ease-out group-hover:-translate-x-2 group-focus-visible:-translate-x-2">
        [
      </span>
      <AnimatedLabel className="tracking-wider">{text}</AnimatedLabel>
      <span className="absolute -right-4 transition-transform duration-300 ease-out group-hover:translate-x-2 group-focus-visible:translate-x-2">
        ]
      </span>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`link group relative text-base ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`link group relative text-base ${className}`}
    >
      {content}
    </a>
  );
};

export default AnimatedLink;

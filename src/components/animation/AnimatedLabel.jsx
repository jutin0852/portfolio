export default function AnimatedLabel({ children, className = "" }) {
  return (
    <span className={`relative inline-grid overflow-hidden align-bottom leading-tight ${className}`}>
      <span className="col-start-1 row-start-1 transition-transform duration-300 ease-out group-hover:-translate-y-full group-focus-visible:-translate-y-full">
        {children}
      </span>
      <span
        aria-hidden="true"
        className="col-start-1 row-start-1 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0 group-focus-visible:translate-y-0"
      >
        {children}
      </span>
    </span>
  );
}

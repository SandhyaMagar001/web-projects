import { useEffect, useState } from "react";

export default function Reveal({ children, className = "", delay = 0 }) {
  const [node, setNode] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!node) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.16, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [node]);

  return (
    <div
      ref={setNode}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${visible ? "reveal-in" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

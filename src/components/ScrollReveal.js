import React from "react";
import { useInView } from "react-intersection-observer";
import "./style.css";

const ScrollReveal = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,  // Animate only once when the element comes into view
    threshold: 0.1,     // The element is considered in view when 10% of it is visible
  });

  return (
    <div ref={ref} className={`reveal ${inView ? "reveal-visible" : ""}`}>
      {children}
    </div>
  );
};

export default ScrollReveal;

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap-trial/SplitText";
import styles from "./TextReveal.module.css";

function TextReveal({ text }) {
  gsap.registerPlugin(SplitText);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      let splitText = new SplitText(containerRef.current.children, {
        type: "chars",
      });
      let chars = splitText.chars;

      gsap.from(chars, {
        yPercent: 130,
        stagger: 0.05,
        ease: "expot.out",
        duration: 1,
      });
    }
  }, [text]);

  return (
    <div className={styles.container} ref={containerRef}>
      {text.split("").map((letter, index) => (
        <span className={styles.split} key={index}>
          {letter}
        </span>
      ))}
    </div>
  );
}

export default TextReveal;

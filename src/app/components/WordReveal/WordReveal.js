import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap-trial/SplitText";
import styles from "./WordReveal.module.css";

function TextReveal({ text }) {
  gsap.registerPlugin(SplitText);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      let splitText = new SplitText(containerRef.current.children, {
        type: "words", 
      });
      let words = splitText.words; 
      gsap.from(words, {
        yPercent: 130,
        stagger: 0.05,
        ease: "expot.out",
        duration: 0.5,
        delay: 0.7,
      });
    }
  }, [text]);

  return (
    <div className={styles.container} ref={containerRef}>
      {text.split(" ").map((word, index) => (
        <span className={styles.split} key={index}>
          {word + " "}
        </span>
      ))}
    </div>
  );
}

export default TextReveal;

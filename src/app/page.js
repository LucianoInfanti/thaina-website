"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap-trial/SplitText";
import styles from "./page.module.css";
import TextReveal from "./components/TextReveal";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollContainer, GellyElement } from "react-nice-scroll";
import "react-nice-scroll/dist/styles.css";

export default function Home() {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const circleRef = useRef(null);
  const paragraphRef1 = useRef(null);
  const paragraphRef2 = useRef(null);
  const paragraphRef3 = useRef(null);
  const contactRef = useRef(null);
  const footerTextRef1 = useRef(null);
  const footerTextRef2 = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  // Avoid CSS flickering
  useEffect(() => {
    gsap.to(containerRef.current, { css: { visibility: "visible" } });
  }, []);

  const animateParagraph = (paragraphRef) => {
    if (paragraphRef.current) {
      gsap.registerPlugin(SplitText);
      let splitText = new SplitText(paragraphRef.current, {
        type: "lines",
        reduceWhiteSpace: false,
      });
      let lines = splitText.lines;

      lines.forEach((line) => {
        let wrapper = document.createElement("div");
        wrapper.style.overflow = "hidden";
        line.parentNode.insertBefore(wrapper, line);
        wrapper.appendChild(line);
      });

      gsap.from(lines, {
        yPercent: 130,
        stagger: 0.1,
        opacity: 0,
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: "top 90%",
        },
        ease: "power3.out",
        duration: 1,
      });
    }
  };

  useEffect(() => {
    gsap.from(circleRef.current, {
      scale: 0,
      duration: 1.5,
      ease: "power3.out",
    });
  }, []);

  useEffect(() => {
    animateParagraph(logoRef);
    animateParagraph(paragraphRef1);
    animateParagraph(paragraphRef2);
    animateParagraph(paragraphRef3);
    animateParagraph(contactRef);
    animateParagraph(footerTextRef1);
    animateParagraph(footerTextRef2);
  }, []);

  return (
    <main ref={containerRef} className={styles.main}>
      <section className={styles.logo}>
        <div ref={circleRef} className={styles.circle}></div>
        <p ref={logoRef}>Thaina Lima</p>
      </section>

      <section className={styles.content}>
        <p
          ref={paragraphRef1}
          className={`${styles.paragraph} ${styles.firstParagraph}`}
        >
          Boas-vindas, Glauber e Gustavo! Sou Thaina 👋. Sou uma educadora de
          paixão e formação atuando há alguns anos na intersecção entre educação
          e tecnologia. Tenho 26 anos, virginiana e mãe do Sebastian 🐶.
        </p>

        <p ref={paragraphRef2} className={styles.paragraph}>
          Já coordenei equipes de CX, onde criei processos e analisei de dados
          para entender melhor nossos usuários e melhorar suas experiências.
          Ajudei a encontrar as melhores maneiras de atender nossos clientes e
          fazer com que se sintam ouvidos e valorizados.
        </p>

        <p ref={paragraphRef3} className={styles.paragraph}>
          Seja na pesquisa de UX, design de serviços ou coordenação de CX, meu
          objetivo é sempre o mesmo: criar experiências que façam sentido para
          as pessoas. É isso que me move, é isso que me faz querer aprender e
          crescer mais todos os dias.
        </p>

        <div className={styles.resumeButton} data-text="Currículo completo">
          Currículo completo
          <div className={styles.iconWrapper}>
            <img
              className={styles.icon}
              src={"/Icons/arrow.svg"}
              width={40}
              height={40}
            />
          </div>
        </div>
      </section>

      <section className={styles.contact}>
        <h2 ref={contactRef} className={styles.h2}>
          Vamos conversar?
        </h2>
        <div className={styles.buttonWrapper}>
          <a href="https://www.linkedin.com/in/thainalima/" target="_blank">
            <div className={styles.contactButton} data-text="LinkedIn">
              LinkedIn
              <div className={styles.iconWrapper}>
                <img
                  className={styles.icon}
                  src={"/Icons/arrow-up-right.svg"}
                  width={40}
                  height={40}
                />
              </div>
            </div>
          </a>

          <a href="mailto:thainacmlima@gmail.com" target="_blank">
            <div className={styles.contactButton} data-text="Email">
              Email
              <div className={styles.iconWrapper}>
                <img
                  className={styles.icon}
                  src={"/Icons/arrow-up-right.svg"}
                  width={40}
                  height={40}
                />
              </div>
            </div>
          </a>

          <a
            href="https://api.whatsapp.com/send?phone=998929175"
            target="_blank"
          >
            <div className={styles.contactButton} data-text="WhatsApp">
              WhatsApp
              <div className={styles.iconWrapper}>
                <img
                  className={styles.icon}
                  src={"/Icons/arrow-up-right.svg"}
                  width={40}
                  height={40}
                />
              </div>
            </div>
          </a>
        </div>

        <div className={styles.footerWrapper}>
          <p ref={footerTextRef1} className={styles.footerText}>
            Feito com 💚
          </p>
          {/* <img src={"/Icons/heart.svg"} width={24} height={24} /> */}
          <p ref={footerTextRef2} className={styles.footerText}>
            por Thaina Lima
          </p>
        </div>
      </section>
    </main>
  );
}

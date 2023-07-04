"use client";

import styles from "./page.module.css";
import { ScrollContainer, GellyElement } from "react-nice-scroll";
import "react-nice-scroll/dist/styles.css";
import { motion, useScroll } from "framer-motion";

export default function Home() {
  const motionProps = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { duration: 1.5, ease: "easeInOut" },
  };

  const buttonWrapperProps = {
    ...motionProps,
    transition: {
      ...motionProps.transition,
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  };

  const yMotionProps = {
    ...motionProps,
    initial: { ...motionProps.initial, y: 50 }, // adjust the y value as needed
    whileInView: { ...motionProps.whileInView, y: 0 },
  };

  return (
    <ScrollContainer>
      <GellyElement intensity="-2000">
        <main className={styles.main}>
          <motion.section {...yMotionProps} className={styles.logo}>
            <motion.div whileHover={{scale: 1.2}} className={styles.circle}></motion.div>
            <p>Thaina Lima</p>
          </motion.section>

          <section className={styles.content}>
            <motion.p
             {...yMotionProps}
              className={`${styles.paragraph} ${styles.firstParagraph}`}
            >
              Boas-vindas, Glauber e Gustavo! Sou Thaina 👋. Sou uma{" "}
              <span className={styles.highlight}>educadora </span>
              de paixão e formação atuando há alguns anos na intersecção entre
              educação e tecnologia. Tenho 26 anos, virginiana e mãe do
              Sebastian 🐶.
            </motion.p>

            <motion.p {...yMotionProps}className={styles.paragraph}>
              Já coordenei equipes de CX, onde criei{" "}
              <span className={styles.highlight}>processos </span> e analisei de
              dados para entender melhor nossos usuários e melhorar suas
              experiências. Ajudei a encontrar as melhores maneiras de atender
              nossos clientes e fazer com que se sintam ouvidos e valorizados.
            </motion.p>

            <motion.p {...yMotionProps} className={styles.paragraph}>
              Seja na pesquisa de UX, design de serviços ou coordenação de CX,
              meu objetivo é sempre o mesmo: criar experiências que façam
              sentido para as pessoas. É isso que me move, é isso que me faz
              querer aprender e crescer mais todos os dias.
            </motion.p>

            <motion.div
              {...motionProps}
              className={styles.resumeButton}
              data-text="Currículo completo"
            >
              Currículo completo
              <div className={styles.iconWrapper}>
                <img
                  className={styles.icon}
                  src={"/Icons/arrow.svg"}
                  width={40}
                  height={40}
                />
              </div>
            </motion.div>
          </section>

          <section className={styles.contact}>
            <motion.h2 {...motionProps} className={styles.h2}>
              Vamos conversar?
            </motion.h2>
            <motion.div
              {...buttonWrapperProps}
              className={styles.buttonWrapper}
            >
              <motion.a
                {...motionProps}
                href="https://www.linkedin.com/in/thainalima/"
                target="_blank"
              >
                <div
                  className={`${styles.contactButton} ${styles.linkedin}`}
                  data-text="LinkedIn"
                >
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
              </motion.a>

              <motion.a
                {...motionProps}
                href="mailto:thainacmlima@gmail.com"
                target="_blank"
              >
                <div className={styles.contactButton} data-text="E-mail">
                  E-mail
                  <div className={styles.iconWrapper}>
                    <img
                      className={styles.icon}
                      src={"/Icons/arrow-up-right.svg"}
                      width={40}
                      height={40}
                    />
                  </div>
                </div>
              </motion.a>

              <motion.a
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
              </motion.a>
            </motion.div>

            <motion.div {...motionProps} className={styles.footerWrapper}>
              <p className={styles.footerText}>Feito com</p>
              <motion.img  whileHover={{scale: 1.2}} src={"/Icons/heart.svg"} width={24} height={24} />
              <p className={styles.footerText}>por Thaina Lima</p>
            </motion.div>
          </section>
        </main>
      </GellyElement>
    </ScrollContainer>
  );
}

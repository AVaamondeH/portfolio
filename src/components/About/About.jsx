import style from "./About.module.css";
import "../../utils/Reusable__Classes.css";
import "boxicons";
import { NavLink, } from "react-router-dom";
import { useSelector } from 'react-redux'
import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion';

function About() {
    const { theme } = useSelector(state => state.theme);
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();
    const { language } = useSelector(state => state.language)
    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isInView]);

    return (
        <div ref={ref}>
            <motion.main
                className="main"
                variants={{
                    hidden: { opacity: 0, y: -75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.25, }}
            >
                <section className={`${style.about} section ${theme ? style.light : ''}`} >
                    <span className={`section__subtitle`}>{language === "spanish" ? `Introduccion` : `My Intro`}</span>
                    <h2 className={`section__title`}>{language === "spanish" ? `Acerca de mi` : `About Me`}</h2>

                    <div className={`${style.about__container} container grid`}>
                        <img src="https://avatars.githubusercontent.com/u/128858520?v=4" alt="" className={style.about__img} />

                        <div className={style.about__data}>
                            <div className={style.about__info}>
                                <div className={style.about__box}>
                                    <a href="#" className={style.about__icon}>
                                        <box-icon size='md' name='award' color='#8057BF' className={style.about__icon}></box-icon>
                                    </a>
                                    <h3 className={style.about__title}>{language === "spanish" ? `Experciencia` : `Experience`}</h3>
                                    <span className={style.about__subtitle}>{language === "spanish" ? `Soporte Tecnico por mas de 2 años` : `2+ years Tech Support`}</span>
                                </div>

                                <div className={style.about__box}>
                                    <a href="#" className={style.about__icon}>
                                        <box-icon size='md' name='briefcase-alt-2' color='#8057BF' ></box-icon>

                                    </a>
                                    <h3 className={style.about__title}>{language === "spanish" ? `Completado` : `Completed`}</h3>
                                    <span className={style.about__subtitle}>{language === "spanish" ? `Mas de 8 Proyectos` : `8+ Projects`}</span>
                                </div>

                                <div className={style.about__box}>
                                    <a href="#" className={style.about__icon}>
                                        <box-icon size='md' name='support' color='#8057BF' className={style.about__icon}></box-icon>

                                    </a>
                                    <h3 className={style.about__title}>{language === "spanish" ? `Soporte` : `Support`}</h3>
                                    <span className={style.about__subtitle}>{language === "spanish" ? `En linea 24/7` : `Online 24/7`}</span>
                                </div>
                            </div>

                            <p className={style.about__description}>
                                {``}
                                {language === "spanish" ? `Hola, soy Alex Vaamonde, un apasionado desarrollador de software con una sólida formación académica en gestión de informática. Mi enfoque se centra en la creación de soluciones tecnológicas eficientes y seguras. Mis habilidades abarcan tecnologías como React, PostgreSQL, Redux, JavaScript, Node.js, Express y CSS. Me apasiona la resolución de problemas y la implementación de soluciones técnicas. Estoy comprometido con el aprendizaje continuo y el desarrollo de aplicaciones de alta calidad.`
                                    : `Hello, I'm Alex Vaamonde, a passionate software developer with a solid academic background in computer science management. My focus is on creating efficient and secure technological solutions. My skills span technologies such as React, PostgreSQL, Redux, JavaScript, Node.js, Express, and CSS. I'm passionate about problem-solving and implementing technical solutions. I am committed to continuous learning and the development of high-quality applications.`
                                }
                            </p>

                            <NavLink to={`/contact`} className={`button`}>    { language === "spanish" ? `Contactame` : `Contac me` }</NavLink>
                        </div>
                    </div>
                </section>
            </motion.main>
        </div>
    );
}

export default About;
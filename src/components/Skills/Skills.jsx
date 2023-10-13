import style from "./Skills.module.css"
import "../../utils/Reusable__Classes.css";
import "boxicons";
import { useSelector } from 'react-redux'
import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion';
import Skills__data__card from "./Skill__data__card";

function Skills() {
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
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.25, }}
            >
                <section className={`${style.skills} section ${theme ? style.light : ''}`} >
                    <span className={`section__subtitle`}>    { language === "spanish" ? `Mis Habilidades` : `My abilities` }</span>
                    <h2 className={`section__title`}>    { language === "spanish" ? `Mi Experiencia` : `My Experiences` }</h2>

                    <div className={`${style.skills__container} container grid`}>
                        <div className={style.skills__content}>
                            <h3 className={style.skills__title}>Frontend</h3>

                            <div className={style.skills__box}>
                                <div className={style.skills__group}>
                                    <Skills__data__card data={{ name: "HTML", level: language === "spanish" ? `Intermedio` : `Intermediate` , icon: "html5", type: "logo" }} />
                                    <Skills__data__card data={{ name: "CSS", level: language === "spanish" ? `Intermedio` : `Intermediate`, icon: "css3", type: "logo" }} />
                                    <Skills__data__card data={{ name: "Javascript", level: language === "spanish" ? `Intermedio` : `Intermediate`, icon: "javascript", type: "logo" }} />
                                </div>

                                <div className={style.skills__group}>
                                    <Skills__data__card data={{ name: "React", level: language === "spanish" ? `Intermedio` : `Intermediate`, icon: "react", type: "logo" }} />
                                    <Skills__data__card data={{ name: "Redux", level: language === "spanish" ? `Intermedio` : `Intermediate`, icon: "redux", type: "logo" }} />
                                    <Skills__data__card data={{ name: "Tailwind", level: language === "spanish" ? `Basico` : `Basic`, icon: "tailwind-css", type: "logo" }} />
                                </div>
                            </div>
                        </div>

                        <div className={style.skills__content}>
                            <h3 className={style.skills__title}>Backend</h3>

                            <div className={style.skills__box}>
                                <div className={style.skills__group}>
                                    <Skills__data__card data={{ name: "NodeJs", level: language === "spanish" ? `Intermedio` : `Intermediate`, icon: "nodejs", type: "logo" }} />
                                    <Skills__data__card data={{ name: "Express", level: language === "spanish" ? `Intermedio` : `Intermediate`, icon: "badge-check", type: "solid" }} />
                                    <Skills__data__card data={{ name: "Python", level: language === "spanish" ? `Basico` : `Basic`, icon: "python", type: "logo" }} />
                                </div>

                                <div className={style.skills__group}>
                                <Skills__data__card data={{ name: "PostgreSQL", level: language === "spanish" ? `Intermedio` : `Intermediate`, icon: "postgresql", type: "logo" }} />
                                    <Skills__data__card data={{ name: "Sequelize", level: language === "spanish" ? `Intermedio` : `Intermediate`, icon: "badge-check", type: "solid" }} />
                                    <Skills__data__card data={{ name: "MongoDB", level: language === "spanish" ? `Basico` : `Basic`, icon: "mongodb", type: "logo" }} />

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </motion.main>
        </div>
    );
}

export default Skills;
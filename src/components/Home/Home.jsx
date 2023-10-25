import style from "./Home.module.css";
import "../../utils/Reusable__Classes.css";
import "boxicons";
import { useSelector } from 'react-redux'
import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion';
import { NavLink } from "react-router-dom";

function Home() {
    const { theme, colors } = useSelector(state => state.theme);
    const { language } = useSelector(state => state.language)
    const { light, black, } = colors;
    const [color, setColor] = useState(light);
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isInView]);

    useEffect(() => {
        theme ? setColor(black) : setColor(light);
    }, [light, black, theme]);

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
                <section className={`${style.home} section ${theme ? style.light : ''}`} >
                    <div className={`${style.home__container} container grid`}>
                        <div className={style.home__data} >
                            <span className={style.home__greeting}>{language === "spanish" ? `Hola, me llamo` : `Hello I'm`}</span>
                            <h1 className={style.home__name}>Alex Vaamonde</h1>
                            <h3 className={style.home__education} >{language === "spanish" ? `Desarrollador Web` : `Web Developer`}</h3>

                            <div className={style.home__buttons}>
                                <a download="" href={language === "spanish" ? `/assets/Alex_Vaamonde_Developer_spa.pdf` : `/assets/Alex_Vaamonde_Developer.pdf`} className={`button button__ghost`} >
                                    {language === "spanish" ? `Descargar CV` : `Download CV`}
                                </a>
                                <NavLink to="/about" className={`button`}>{language === "spanish" ? `Acerca de mi` : `About me`} </NavLink>
                            </div>
                        </div>

                        <div className={style.home__handle}>
                            <img src="/assets/letterLogo.png" alt="" className={style.home__img} />
                        </div>

                        <div className={style.home__social}>
                            <a href="https://www.linkedin.com/in/alexxvaam/" target="_blank" className={style.home__social__link} rel="noreferrer" >
                                <box-icon size='md' name='linkedin-square' type='logo' color={color} animation="tada-hover" ></box-icon>
                            </a>
                            <a href="https://github.com/AVaamondeH" target="_blank" className={style.home__social__link} rel="noreferrer" >
                                <box-icon size='md' name='github' type='logo' color={color} animation="tada-hover" ></box-icon>
                            </a>
                        </div>

                    </div>
                </section>
            </motion.main>
        </div>
    );
}

export default Home;
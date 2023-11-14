import style from "./Work.module.css";
import "../../utils/Reusable__Classes.css";
import "boxicons";
import { useSelector } from 'react-redux'
import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion';
import Work__card from "./Work__card";

function Work() {
    const { theme } = useSelector(state => state.theme);
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();
    const [filter, setFilter] = useState("all");
    const { language } = useSelector(state => state.language)

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isInView]);

    const onClick = (data) => {
        setFilter(data)
    }

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
                <section className={`${style.work} section ${theme ? style.light : ''}`} >
                    <span className={`section__subtitle`}>{language === "spanish" ? `Mi Portafolio` : `My Portfolio`}</span>
                    <h2 className={`section__title`}>{language === "spanish" ? `Trabajos Recientes` : `Recent Works`}</h2>

                    <div className={style.work__filters}>
                        <span id="all" onClick={() => onClick("all")} className={`${style.work__item} ${filter === 'all' ? style.active__work : ''}`}>{language === "spanish" ? `Todo` : `All`}</span>
                        <span onClick={() => onClick("app")} className={`${style.work__item} ${filter === 'app' ? style.active__work : ''}`}>{language === "spanish" ? `Aplicacion Web` : `Web App`}</span>
                        <span onClick={() => onClick("temp")} className={`${style.work__item} ${filter === 'temp' ? style.active__work : ''}`}>{language === "spanish" ? `Plantilla Web` : `Web Template`}</span>
                    </div>

                    <div className={`${style.work__container} container grid`}>
                        {
                            filter === "all" &&
                            <>
                                <Work__card data={{ title: "EVOGYM", img: "/assets/evogym.png", demo: "https://gym-template.pages.dev", }} />
                                <Work__card data={{ title: "SELPRO Soluciones", img: "/assets/selpro.png", demo: "https://youtu.be/YxAw-3iM8s4", }} />
                                <Work__card data={{ title: "Countries", img: "/assets/countries.png", demo: "https://countries-alexiodev.netlify.app/", }} />
                                <Work__card data={{ title: "Rick and Morty", img: "/assets/R&M.png", demo: "https://youtu.be/tpbGX-p-fvY", }} />
                                <Work__card data={{ title: "Tindog", img: "/assets/tindog.png", demo: "https://thelordaa.github.io/tindog-landind-page-test/", }} />
                                <Work__card data={{ title: "Losangeles Mountains", img: "/assets/losangeles.png", demo: "https://github.com/AVaamondeH/LOSANGELES-MOUNTAINS", }} />
                                <Work__card data={{ title: "HOMELOAN GURUS Landing Page", img: "/assets/homeloan.png", demo: "https://thelordaa.github.io/Landing-Website-Test/", }} />
                            </>
                        }
                        {filter === "app" &&
                            <>
                                <Work__card data={{ title: "SELPRO Soluciones", img: "/assets/selpro.png", demo: "https://youtu.be/YxAw-3iM8s4", }} />
                                <Work__card data={{ title: "Countries", img: "/assets/countries.png", demo: "https://countries-alexiodev.netlify.app/", }} />
                                <Work__card data={{ title: "Rick and Morty", img: "/assets/R&M.png", demo: "https://youtu.be/tpbGX-p-fvY", }} />
                            </>
                        }
                        {filter === "temp" &&
                            <>
                                <Work__card data={{ title: "EVOGYM", img: "/assets/evogym.png", demo: "https://gym-template.pages.dev", }} />
                                <Work__card data={{ title: "Tindog", img: "/assets/tindog.png", demo: "https://thelordaa.github.io/tindog-landind-page-test/", }} />
                                <Work__card data={{ title: "Losangeles Mountains", img: "/assets/losangeles.png", demo: "https://github.com/AVaamondeH/LOSANGELES-MOUNTAINS", }} />
                                <Work__card data={{ title: "HOMELOAN GURUS Landing Page", img: "/assets/homeloan.png", demo: "https://thelordaa.github.io/Landing-Website-Test/", }} />
                            </>}
                    </div>
                </section>
            </motion.main>
        </div>
    );
}

export default Work;
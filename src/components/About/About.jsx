import style from "./About.module.css";
import "../../utils/Reusable__Classes.css";
import "boxicons";
import { NavLink, } from "react-router-dom";

function About() {
    return (
        <main className="main">
            <section className={`${style.about} section`} >
                <span className={`section__subtitle`}>My Intro</span>
                <h2 className={`section__title`}>About Me</h2>

                <div className={`${style.about__container} container grid`}>
                    <img src="/assets/Tbg1.png" alt="" className={style.about__img} />

                    <div className={style.about__data}>
                        <div className={style.about__info}>
                            <div className={style.about__box}>
                                <a href="#" className={style.about__icon}>
                                    <box-icon size='md' name='award' color='#8057BF' className={style.about__icon}></box-icon>
                                </a>
                                <h3 className={style.about__title}>Experience</h3>
                                <span className={style.about__subtitle}>3 years working</span>
                            </div>

                            <div className={style.about__box}>
                                <a href="#" className={style.about__icon}>
                                <box-icon size='md' name='briefcase-alt-2' color='#8057BF' ></box-icon>

                                </a>
                                <h3 className={style.about__title}>Completed</h3>
                                <span className={style.about__subtitle}>48+ Projects</span>
                            </div>

                            <div className={style.about__box}>
                                <a href="#" className={style.about__icon}>
                                <box-icon size='md' name='support' color='#8057BF' className={style.about__icon}></box-icon>

                                </a>
                                <h3 className={style.about__title}>Support</h3>
                                <span className={style.about__subtitle}>Online 27/7</span>
                            </div>
                        </div>

                        <p className={style.about__description}>
                            {`Hello, I'm Alex Vaamonde, a passionate software developer with a solid academic background in computer science management. My focus is on creating efficient and secure technological solutions. My skills span technologies such as React, PostgreSQL, Redux, JavaScript, Node.js, Express, and CSS. I'm passionate about problem-solving and implementing technical solutions. I am committed to continuous learning and the development of high-quality applications.`}
                        </p>

                        <NavLink to={`/contact`} className={`button`}>Contac me</NavLink>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default About;
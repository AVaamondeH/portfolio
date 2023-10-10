import style from "./Skills.module.css"
import "../../utils/Reusable__Classes.css";
import "boxicons";

function Skills() {
    return (
        <main className="main">
            <section className={`${style.skills} section`} >
                <span className={`section__subtitle`}>My abilities</span>
                <h2 className={`section__title`}>My Experiences</h2>

                <div className={`${style.skills__container} container grid`}>
                    <div className={style.skills__content}>
                        <h3 className={style.skills__title}>Frontend</h3>

                        <div className={style.skills__box}>
                            <div className={style.skills__group}>
                                <div className={style.skills__data}>
                                    <box-icon type='solid' name='badge-check' color='#fff'></box-icon>

                                    <div>
                                        <h3 className={style.skills__name}>HTML</h3>
                                        <span className={style.skills__level}>Basic</span>
                                    </div>
                                </div>

                                <div className={style.skills__data}>
                                    <box-icon type='solid' name='badge-check' color='#fff'></box-icon>

                                    <div>
                                        <h3 className={style.skills__name}>CSS</h3>
                                        <span className={style.skills__level}>Intermediate</span>
                                    </div>
                                </div>

                                <div className={style.skills__data}>
                                    <box-icon type='solid' name='badge-check' color='#fff'></box-icon>

                                    <div>
                                        <h3 className={style.skills__name}>JavaScript</h3>
                                        <span className={style.skills__level}>Intermediate</span>
                                    </div>
                                </div>


                            </div>

                            <div className={style.skills__group}>
                                <div className={style.skills__data}>
                                    <box-icon type='solid' name='badge-check' color='#fff'></box-icon>

                                    <div>
                                        <h3 className={style.skills__name}>React</h3>
                                        <span className={style.skills__level}>Intermediate</span>
                                    </div>
                                </div>

                                <div className={style.skills__data}>
                                    <box-icon type='solid' name='badge-check' color='#fff'></box-icon>

                                    <div>
                                        <h3 className={style.skills__name}>Redux</h3>
                                        <span className={style.skills__level}>Intermediate</span>
                                    </div>
                                </div>

                                <div className={style.skills__data}>
                                    <box-icon type='solid' name='badge-check' color='#fff'></box-icon>

                                    <div>
                                        <h3 className={style.skills__name}>Tailwind</h3>
                                        <span className={style.skills__level}>Basic</span>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                    <div className={style.skills__content}>
                        <h3 className={style.skills__title}>Backend</h3>

                        <div className={style.skills__box}>
                            <div className={style.skills__group}>
                                <div className={style.skills__data}>
                                    <box-icon type='solid' name='badge-check' color='#fff'></box-icon>

                                    <div>
                                        <h3 className={style.skills__name}>NodeJs</h3>
                                        <span className={style.skills__level}>Intermediate</span>
                                    </div>
                                </div>

                                <div className={style.skills__data}>
                                    <box-icon type='solid' name='badge-check' color='#fff'></box-icon>

                                    <div>
                                        <h3 className={style.skills__name}>Express</h3>
                                        <span className={style.skills__level}>Intermediate</span>
                                    </div>
                                </div>

                                <div className={style.skills__data}>
                                    <box-icon type='solid' name='badge-check' color='#fff'></box-icon>

                                    <div>
                                        <h3 className={style.skills__name}>Phyton</h3>
                                        <span className={style.skills__level}>Basic</span>
                                    </div>
                                </div>


                            </div>

                            <div className={style.skills__group}>
                                <div className={style.skills__data}>
                                    <box-icon type='solid' name='badge-check' color='#fff'></box-icon>

                                    <div>
                                        <h3 className={style.skills__name}>PostgreSQL</h3>
                                        <span className={style.skills__level}>Intermediate</span>
                                    </div>
                                </div>

                                <div className={style.skills__data}>
                                    <box-icon type='solid' name='badge-check' color='#fff'></box-icon>

                                    <div>
                                        <h3 className={style.skills__name}>Sequelize</h3>
                                        <span className={style.skills__level}>Intermediate</span>
                                    </div>
                                </div>

                                <div className={style.skills__data}>
                                    <box-icon type='solid' name='badge-check' color='#fff'></box-icon>

                                    <div>
                                        <h3 className={style.skills__name}>MongoDB</h3>
                                        <span className={style.skills__level}>Basic</span>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Skills;
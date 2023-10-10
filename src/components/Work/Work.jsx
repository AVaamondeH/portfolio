import style from "./Work.module.css";
import "../../utils/Reusable__Classes.css";
import "boxicons";


function Work() {
    return (
        <main className="main">
            <section className={`${style.work} section`} >
                <span className={`section__subtitle`}>My Portfolio</span>
                <h2 className={`section__title`}>Recent Works</h2>

                <div className={style.work__filters}>
                    <span className={`${style.work__item} ${style.active__work}`}>All</span>
                    <span className={style.work__item}>Web App</span>
                    <span className={style.work__item}>Web Template</span>
                </div>

                <div className={`${style.work__container} container grid`}>
                    <div className={style.work__card}>
                        <img src="/assets/R&M.png" alt="" />

                        <h3 className={style.work__title}>Countries Web App</h3>

                        <a href="#" className={style.work__button}>
                        Demo <box-icon name='right-arrow-alt' size='sm' animation='fade-right' color='#ffffff'></box-icon>
                        </a>
                    </div>

                    <div className={style.work__card}>
                        <img src="/assets/R&M.png" alt="" />

                        <h3 className={style.work__title}>Rick and Morty Web App</h3>

                        <a href="#" className={style.work__button}>
                        Demo<box-icon name='right-arrow-alt' size='sm' animation='fade-right' color='#ffffff' ></box-icon>
                        </a>
                    </div>

                    <div className={style.work__card}>
                        <img src="/assets/R&M.png" alt="" />

                        <h3 className={style.work__title}>Tindog Web Template</h3>

                        <a href="#" className={style.work__button}>
                        Demo<box-icon name='right-arrow-alt' size='sm' animation='fade-right' color='#ffffff' ></box-icon>
                        </a>
                    </div>

                    <div className={style.work__card}>
                        <img src="/assets/R&M.png" alt="" />

                        <h3 className={style.work__title}>Losangeles Mountains Web Template</h3>

                        <a href="#" className={style.work__button}>
                        Demo<box-icon name='right-arrow-alt' size='sm' animation='fade-right' color='#ffffff' ></box-icon>
                        </a>
                    </div>

                    <div className={style.work__card}>
                        <img src="/assets/R&M.png" alt="" />

                        <h3 className={style.work__title}>Bank Landing Page</h3>

                        <a href="#" className={style.work__button}>
                        Demo<box-icon name='right-arrow-alt' size='sm' animation='fade-right' color='#ffffff' ></box-icon>
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Work;
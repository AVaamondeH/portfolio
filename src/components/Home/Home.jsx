import style from "./Home.module.css";
import "../../utils/Reusable__Classes.css";
import "boxicons";

function Home() {
    return (
        <main className="main">
            <section className={`${style.home} section`} >
                <div className={`${style.home__container} container grid`}>
                    <div className={style.home__data} >
                        <span className={style.home__greeting}>{`Hello I'm`}</span>
                        <h1 className={style.home__name}>Alex Vaamonde</h1>
                        <h3 className={style.home__education} >Web Developer</h3>

                        <div className={style.home__buttons}>
                            <a download="" href="../../assets/CV.pdf" className={`button button__ghost`} >
                                Download CV
                            </a>
                            <a href="#about" className={`button`}>About me</a>
                        </div>
                    </div>

                    <div className={style.home__handle}>
                        <img src="/assets/Tbg2.png" alt="" className={style.home__img} />
                    </div>

                    <div className={style.home__social}>
                        <a href="https://www.linkedin.com/in/alexxvaam/" className={style.home__social__link} >
                            <box-icon size='md' name='linkedin-square' type='logo' color='#8057BF' animation="tada-hover" ></box-icon>
                        </a>
                        <a href="https://github.com/AVaamondeH" className={style.home__social__link} >
                            <box-icon size='md' name='github' type='logo' color='#8057BF' animation="tada-hover" ></box-icon>
                        </a>
                    </div>


                </div>
            </section>
        </main>
    );
}

export default Home;
import style from "./Contact.module.css";
import "../../utils/Reusable__Classes.css";
import "boxicons";


function Contact() {
    return (
        <main className="main">
            <section className={`${style.contact} section`} >
                <span className={`section__subtitle`}>Get in touch</span>
                <h2 className={`section__title`}>Contact Me</h2>

                <div className={`${style.contact__container} container grid`}>
                    <div className={style.contact__content}>
                        <h3 className={style.contact__title}>Talk to me</h3>

                        <div className={style.contact__info}>
                            <div className={style.contact__card}>
                                <box-icon name='mail-send' color='#ffffff'></box-icon>
                                <h3 className={style.contact__card__title}>Email</h3>
                                <span className={style.contact__card__data}>Alexxherrera2772@gmail.com</span>
                                <a href="mailto:alexxherrera2772@gmail.com" target="_blank" className={style.contact__button} rel="noreferrer">
                                    Write me
                                    <box-icon name='right-arrow-alt' size='sm' animation='fade-right' color='#ffffff'></box-icon>
                                </a>
                            </div>

                            <div className={style.contact__card}>
                                <box-icon name='whatsapp' type='logo' color='#ffffff' ></box-icon>
                                <h3 className={style.contact__card__title}>Whatsapp</h3>
                                <span className={style.contact__card__data}>+593-98-295-4571</span>
                                <a href="https://api.whatsapp.com/send?phone=+593982954571&text=Hello, more information!" target="_blank" className={style.contact__button} rel="noreferrer">
                                    Write me
                                    <box-icon name='right-arrow-alt' size='sm' animation='fade-right' color='#ffffff'></box-icon>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className={style.contact__content}>
                        <h3 className={style.contact__title}>Write me your project</h3>

                        <form action="" className={style.contact__form}>
                            <div className={style.contact__form__div}>
                                <label htmlFor="" className={style.contact__form__tag}>Names</label>
                                <input type="text" placeholder="Insert your name" className={style.contact__form__input} />
                            </div>

                            <div className={style.contact__form__div}>
                                <label htmlFor="" className={style.contact__form__tag}>Mail</label>
                                <input type="email" placeholder="Insert your email" className={style.contact__form__input} />
                            </div>

                            <div className={`${style.contact__form__div} ${style.contact__form__area }`}>
                                <label htmlFor="" className={style.contact__form__tag}>Project</label>
                                <textarea cols={"30"} rows={"10"} placeholder="Write me" className={style.contact__form__input} />
                            </div>

                            <button className={`button`}>Send Message</button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Contact;
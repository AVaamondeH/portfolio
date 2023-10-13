/* eslint-disable react/no-unknown-property */
import style from "./Contact.module.css";
import "../../utils/Reusable__Classes.css";
import "boxicons";
import { useSelector } from 'react-redux'
import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion';
import Swal from 'sweetalert2'
import axios from "axios"


function Contact() {
    const { theme, colors } = useSelector(state => state.theme);
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();
    const { white, black,dark_bg, } = colors
    const [color, setColor] = useState(white);
    const { language } = useSelector(state => state.language)
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const { name, email, message } = form;

    useEffect(() => {
        theme ? setColor(black) : setColor(white);
    }, [white, black, theme]);

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isInView]);

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setForm({
            ...form,
            [name]: value,
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if( name === "" || !email || !message) {
            language === "spanish" ? (
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Verifica que todos los campos requeridos esten llenos',
                    background: theme ? white : dark_bg,
                    color: theme ? black : white,
                })
            ) : (
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: "You can't have empty fields",
                    background: theme ? white : dark_bg,
                    color: theme ? black : white,
                })
            )
            return;
        }
        const formData = {
            "form-name": "contact",
            name,
            email,
            message
        };
        const encodedData = encode(formData);
        try {
            await axios.post("/", encodedData, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            });
            language === "spanish" ? (
                Swal.fire({
                    title: "Gracias!",
                    html: "Tu mensaje fue enviado con exito!",
                    icon: 'success',
                    background: theme ? white : dark_bg,
                    color: theme ? black : white,
                }).then(function () {

                    setForm({
                        name: "",
                        email: "",
                        message:"",
                    });
                })
            ) : (
                Swal.fire({
                    title: "Thank You!",
                    html: "Your message was send successfully!",
                    icon: 'success',
                    background: theme ? white : dark_bg,
                    color: theme ? black : white,
                }).then(function () {

                    setForm({
                        name: "",
                        email: "",
                        message:"",
                    });
                })
            )

        } catch (error) {
            language === "spanish" ? (
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Algo paso enviando tu mensaje, intentalo mas tarde',
                    background: theme ? white : dark_bg,
                    color: theme ? black : white,
                })
            ) : (
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong, try again later',
                    background: theme ? white : dark_bg,
                    color: theme ? black : white,
                })
            )

            console.error("Error al enviar el formulario:", error);
        }
    }

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
                <section className={`${style.contact} section ${theme ? style.light : ''}`} >
                    <span className={`section__subtitle`}> {language === "spanish" ? `Ponte en contacto conmigo` : `Get in touch`}</span>
                    <h2 className={`section__title`}>    {language === "spanish" ? `Contactame` : `Contact Me`}</h2>

                    <div className={`${style.contact__container} container grid`}>
                        <div className={style.contact__content}>
                            <h3 className={style.contact__title}>    {language === "spanish" ? `Hablame` : `Talk to me`}</h3>

                            <div className={style.contact__info}>
                                <div className={style.contact__card}>
                                    <box-icon name='mail-send' color={color}></box-icon>
                                    <h3 className={style.contact__card__title}>Email</h3>
                                    <span className={style.contact__card__data}>Alexxherrera2772@gmail.com</span>
                                    <a href="mailto:alexxherrera2772@gmail.com" target="_blank" className={style.contact__button} rel="noreferrer">
                                        {language === "spanish" ? `Escribeme` : `Write me`}
                                        <box-icon name='left-arrow-alt' size='sm' animation='fade-right' color={color}></box-icon>
                                    </a>
                                </div>

                                <div className={style.contact__card}>
                                    <box-icon name='whatsapp' type='logo' color={color} ></box-icon>
                                    <h3 className={style.contact__card__title}>Whatsapp</h3>
                                    <span className={style.contact__card__data}>+593-98-295-4571</span>
                                    <a href="https://api.whatsapp.com/send?phone=+593982954571&text=Hello, more information!" target="_blank" className={style.contact__button} rel="noreferrer">
                                        {language === "spanish" ? `Escribeme` : `Write me`}
                                        <box-icon name='left-arrow-alt' size='sm' animation='fade-right' color={color}></box-icon>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className={style.contact__content}>
                            <h3 className={style.contact__title}>{language === "spanish" ? `Cuentame lo que deseas realizar` : `Write me your project`}</h3>

                            <form className={style.contact__form} name="contact" onSubmit={handleSubmit} netlify>
                                <div className={style.contact__form__div}>
                                    <label htmlFor="" className={style.contact__form__tag}>{language === "spanish" ? `Nombres` : `Names`}</label>
                                    <input name="name" type="text" value={name} onChange={handleChange} placeholder={language === "spanish" ? `Escribe tu nombre` : `Insert your name`} className={style.contact__form__input} />
                                </div>

                                <div className={style.contact__form__div}>
                                    <label htmlFor="" className={style.contact__form__tag}>{language === "spanish" ? `Correo` : `Mail`}</label>
                                    <input name="email" type="email" value={email} onChange={handleChange} placeholder={language === "spanish" ? `Escribe tu correo` : `Insert your email`} className={style.contact__form__input} />
                                </div>

                                <div className={`${style.contact__form__div} ${style.contact__form__area}`}>
                                    <label htmlFor="" className={style.contact__form__tag}>Project</label>
                                    <textarea name="message" cols={"30"} rows={"10"} value={message} onChange={handleChange} placeholder={language === "spanish" ? `Cuentame tu proyecto` : `Write me`} className={style.contact__form__input} />
                                </div>

                                <button type="submit" className={`button`}>{language === "spanish" ? `Enviar Mensaje` : `Send Message`}</button>
                            </form>
                        </div>
                    </div>
                </section>
            </motion.main>
        </div>
    );
}

export default Contact;
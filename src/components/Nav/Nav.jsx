import style from "./Nav.module.css";
import "../../utils/Reusable__Classes.css";
import { NavLink, useLocation } from "react-router-dom";
import "boxicons";
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeTheme } from "../../Redux/themeSlice";
import { US, MX } from 'country-flag-icons/react/3x2'
import { changeLanguage } from "../../Redux/languageSlice";

function Nav() {
    const location = useLocation()
    const dispatch = useDispatch()
    const { theme, colors } = useSelector(state => state.theme);
    const { white, black, } = colors
    const [color, setColor] = useState(white);
    const [icon, setIcon] = useState("sun");
    const { language } = useSelector(state => state.language)

    useEffect(() => {
        theme ? setColor(black) : setColor(white);
    }, [white, black, theme]);

    useEffect(() => {
        const setTheme = localStorage.getItem("theme");
        const setLanguage = localStorage.getItem("language");
        if (setTheme) {
            dispatch(changeTheme(setTheme))
            document.body.className = "light"
        }

        if (setLanguage) {
            dispatch(changeLanguage(setLanguage))
        }
        setIcon(setTheme === '' ? 'moon' : 'sun');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const toggleTheme = () => {
        theme === "" ? (
            document.body.className = "light",
            dispatch(changeTheme('light'))
        ) : (
            document.body.className = '',
            dispatch(changeTheme(''))
        );
        setIcon(theme === '' ? 'sun' : 'moon');
    }

    const onClick__en_US = () => {
        if (language != "english") {
            dispatch(changeLanguage("english"))
        }

    }
    const onClick__es_MX = () => {
        if (language != "spanish") {
            console.log("aja");
            dispatch(changeLanguage("spanish"))
        }
    }


    return (
        <header className={style.header}>
            <nav className={`${style.nav} container ${theme ? style.light : ''}`} >
                <NavLink to="/" >
                    <img src="/assets/logo.png" alt="" className={style.nav__logo} />
                </NavLink>

                <div className={style.nav__menu}>
                    <ul className={style.nav__list}>
                        <li className={style.nav__item}>
                            <NavLink to="/" className={`${style.nav__link} ${location.pathname === "/" ? style.active__link : ""}`}>
                                <box-icon name='home' color={color}></box-icon>
                            </NavLink>
                        </li>

                        <li className={style.nav__item}>
                            <NavLink to="/about" className={`${style.nav__link} ${location.pathname === "/about" ? style.active__link : ""}`}>
                                <box-icon name='user' color={color} ></box-icon>
                            </NavLink>
                        </li>

                        <li className={style.nav__item}>
                            <NavLink to="/skills" className={`${style.nav__link} ${location.pathname === "/skills" ? style.active__link : ""}`}>
                                <box-icon name='book' color={color} ></box-icon>
                            </NavLink>
                        </li>

                        <li className={style.nav__item}>
                            <NavLink to="/work" className={`${style.nav__link} ${location.pathname === "/work" ? style.active__link : ""}`}>
                                <box-icon name='briefcase-alt-2' color={color} ></box-icon>
                            </NavLink>
                        </li>

                        <li className={style.nav__item}>
                            <NavLink to="/contact" className={`${style.nav__link} ${location.pathname === "/contact" ? style.active__link : ""}`}>
                                <box-icon name='message-square-detail' color={color} ></box-icon>
                            </NavLink>
                        </li>
                    </ul>
                </div>

                {/* Theme Change */}
                <div className={style.nav__change}>
                    <US onClick={onClick__en_US} title="United States" className={style.nav__change__icons} />
                    <MX onClick={onClick__es_MX} title="Mexico" className={style.nav__change__icons} />
                    <div onClick={toggleTheme}>
                        <box-icon name={icon} color={color} size="sm" ></box-icon>
                    </div>
                </div>

            </nav>
        </header>
    );
}

export default Nav;
import style from "./Nav.module.css";
import "../../utils/Reusable__Classes.css";
import { NavLink, useLocation } from "react-router-dom";
import "boxicons";
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeTheme } from "../../Redux/themeSlice";

function Nav() {
    const location = useLocation()
    const dispatch = useDispatch()
    const { theme } = useSelector(state => state.theme)
    const [icon, setIcon] = useState("sun");

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


    return (
        <header className={style.header}>
            <nav className={`${style.nav} container ${theme ? style.light : ''}`} >
                <a href="#" className={style.nav__logo}>Alex</a>

                <div className={style.nav__menu}>
                    <ul className={style.nav__list}>
                        <li className={style.nav__item}>
                            <NavLink to="/" className={`${style.nav__link} ${location.pathname === "/" ? style.active__link : ""}`}>
                                <box-icon name='home' color='#ffffff'></box-icon>
                            </NavLink>
                        </li>

                        <li className={style.nav__item}>
                            <NavLink to="/about" className={`${style.nav__link} ${location.pathname === "/about" ? style.active__link : ""}`}>
                                <box-icon name='user' color='#ffffff' ></box-icon>
                            </NavLink>
                        </li>

                        <li className={style.nav__item}>
                            <NavLink to="/skills" className={`${style.nav__link} ${location.pathname === "/skills" ? style.active__link : ""}`}>
                                <box-icon name='book' color='#ffffff' ></box-icon>
                            </NavLink>
                        </li>

                        <li className={style.nav__item}>
                            <NavLink to="/work" className={`${style.nav__link} ${location.pathname === "/work" ? style.active__link : ""}`}>
                                <box-icon name='briefcase-alt-2' color='#ffffff' ></box-icon>
                            </NavLink>
                        </li>

                        <li className={style.nav__item}>
                            <NavLink to="/contact" className={`${style.nav__link} ${location.pathname === "/contact" ? style.active__link : ""}`}>
                                <box-icon name='message-square-detail' color='#ffffff' ></box-icon>
                            </NavLink>
                        </li>
                    </ul>
                </div>

                {/* Theme Change */}
                <div onClick={toggleTheme}>
                    <box-icon name={icon} color='#ffffff' ></box-icon>
                </div>

            </nav>
        </header>
    );
}

export default Nav;
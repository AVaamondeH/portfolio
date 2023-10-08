import style from "./Nav.module.css";
import "../../utils/Reusable__Classes.css";
import "boxicons";

function Nav() {
    return ( 
        <header className={style.header}>
            <nav className={`${style.nav} container`} >
                <a href="#" className={style.nav__logo}>Alex</a>

                <div className={style.nav__menu}>
                    <ul className={style.nav__list}>
                        <li className={style.nav__item}>
                            <a href="#home" className={`${style.nav__link} ${style.active__link}`}>
                                <box-icon name='home' color='#ffffff'></box-icon>
                            </a>
                        </li>

                        <li className={style.nav__item}>
                            <a href="#about" className={style.nav__link}>
                                <box-icon name='user' color='#ffffff' ></box-icon>
                            </a>
                        </li>

                        <li className={style.nav__item}>
                            <a href="#skills" className={style.nav__link}>
                                <box-icon name='book' color='#ffffff' ></box-icon>
                            </a>
                        </li>

                        <li className={style.nav__item}>
                            <a href="#work" className={style.nav__link}>
                                <box-icon name='briefcase-alt-2' color='#ffffff' ></box-icon>
                            </a>
                        </li>

                        <li className={style.nav__item}>
                            <a href="#contact" className={style.nav__link}>
                                <box-icon name='message-square-detail' color='#ffffff' ></box-icon>
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Theme Change */}
                <box-icon name='moon' color='#ffffff' ></box-icon>

            </nav>
        </header>
     );
}

export default Nav;
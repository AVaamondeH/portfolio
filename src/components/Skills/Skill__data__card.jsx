/* eslint-disable react/prop-types */
import style from "./Skills.module.css"
import "../../utils/Reusable__Classes.css";
import "boxicons";
import { useSelector } from 'react-redux'
import { useEffect, useState } from "react";


function Skills__data__card({data}) {
    const { theme, colors } = useSelector(state => state.theme);
    const {purple, light, } = colors
    const [color, setColor] = useState(purple);

    useEffect(() => {
        theme ? setColor(light) : setColor(purple);
    }, [light, purple, theme]);

    const {name, level, icon, type } = data

    return (
        <>
            <div className={style.skills__data}>
                <box-icon type={type} name={icon} color={color}></box-icon>

                <div>
                    <h3 className={style.skills__name}>{name}</h3>
                    <span className={style.skills__level}>{level}</span>
                </div>
            </div>
        </>
    );
}

export default Skills__data__card;
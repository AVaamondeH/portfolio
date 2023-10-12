/* eslint-disable react/prop-types */
import style from "./Work.module.css";
import "../../utils/Reusable__Classes.css";
import "boxicons";
import { useState, useEffect } from 'react'
import { useSelector } from "react-redux";

function Work__card({data}) {
    const { title, img, demo } = data
    const { theme, colors } = useSelector(state => state.theme);
    const {white, black, } = colors
    const [color, setColor] = useState(white);
    
    useEffect(() => {
        theme ? setColor(black) : setColor(white);
    }, [white, black, theme]);

    return (
        <>
            <div className={style.work__card}>
                <img src={img} alt="" className={style.work__img} />
                <h3 className={style.work__title}>{title} </h3>
                <a href={demo} className={style.work__button} target="_blank" rel="noreferrer">
                    Preview <box-icon name='left-arrow-alt' size='sm' animation='fade-right' color={color} ></box-icon>
                </a>
            </div>
        </>
    );
}

export default Work__card;
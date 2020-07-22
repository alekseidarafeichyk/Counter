import React from 'react';
import s from './Tabloid.module.css'

type TabloidPropsType = {
    value: number
    maxValue: number
}

 function Tabloid(props: TabloidPropsType) {
    let colorRed = props.value === props.maxValue ? `${s.colorRed}` : '';

    return (
        <div className={`${s.tabloid} ${colorRed}`}>
            {props.value}
        </div>
    )
}

export default Tabloid
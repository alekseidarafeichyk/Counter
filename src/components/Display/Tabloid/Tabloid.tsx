import React from 'react';
import s from './Tabloid.module.css'

type TabloidPropsType = {
    value: number
}

 function Tabloid(props: TabloidPropsType) {
    let colorRed = props.value === 5 ? `${s.colorRed}` : '';

    return (
        <div className={`${s.tabloid} ${colorRed}`}>
            {props.value}
        </div>
    )
}

export default Tabloid
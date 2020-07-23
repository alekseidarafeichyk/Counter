import React from 'react';
import s from './Tabloid.module.css'

type TabloidPropsType = {
    value: number
    maxValue: number
    mode: boolean
    error: boolean
}

 function Tabloid(props: TabloidPropsType) {
    let colorRed = (props.value === props.maxValue) ||  (!props.mode && props.error) ? `${s.colorRed}` : '';
    return (
        <div className={`${s.tabloid} ${colorRed}`}>
            {props.mode ? props.value : props.error ?  'inccorect value' : 'Enter value'  }
        </div>
    )
}

export default Tabloid
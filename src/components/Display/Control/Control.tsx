import React from 'react';
import s from './Control.module.css'
import Button from '../../Button/Button';

type ControlPropsType = {
    inc: () => void
    reset: () => void
    value: number
    maxValue: number
    disableCountBtn: boolean
}

 function Control(props: ControlPropsType) {
    return (
        <div className={s.control}>
            <div className={s.btn}>
                <Button
                    name={'inc'}
                    onClick={props.inc}
                    disabled={props.value === props.maxValue || props.disableCountBtn}
                />
            </div>
            <div className={s.btn}>
            <Button
                name={'reset'}
                onClick={props.reset}
                    disabled={props.value === 0 || props.disableCountBtn}
            />
            </div>
        </div>
    )
}

export default Control
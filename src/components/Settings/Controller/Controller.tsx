import React from 'react';
import s from './Controller.module.css'
import Input from '../../Input/Input';

type ControllerPropsType = {
    startValue: number
    setStartValue: (value: number)=>void
    maxValue: number
    setMaxValue: (value: number)=>void
    setDisableSetBtn: (value:boolean) => void
}

function Controller(props: ControllerPropsType) {
    return <div className={s.controller}>
        <Input
            name={'Max value:'}
            showValue={props.maxValue}
            changeValue={props.setMaxValue}
            setDisableSetBtn={props.setDisableSetBtn}
        />
        <Input name={'Start value:'}
               showValue={props.startValue}
               changeValue={props.setStartValue}
               setDisableSetBtn={props.setDisableSetBtn}
        />
    </div>
}

export default Controller
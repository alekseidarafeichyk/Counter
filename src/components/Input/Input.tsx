import React, {InputHTMLAttributes, DetailedHTMLProps, ChangeEvent, useState} from 'react';
import s from './Input.module.css'

type InputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
    & {
    name: string
    showValue: number
    changeValue: (value:number)=>void
    error : boolean
};


function Input(props: InputPropsType) {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeValue(+e.currentTarget.value)
    }

    return (<div>
            {props.name}
            <input
                className={props.error ? s.error : ''}
                type='number'
                value={props.showValue}
                onChange={onChangeHandler}
            /></div>
    )
}

export default Input
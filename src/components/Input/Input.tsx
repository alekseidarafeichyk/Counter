import React, {InputHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react';

type InputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
    & {
    name: string
    showValue: number
    changeValue: (value:number)=>void
};


function Input(props: InputPropsType) {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeValue(+e.currentTarget.value)
    }

    return (<div>
            {props.name}
            <input
                type='number'
                value={props.showValue}
                onChange={onChangeHandler}
            /></div>
    )
}

export default Input
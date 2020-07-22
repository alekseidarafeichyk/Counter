import React, {InputHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react';

type InputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
    & {
    name: string
    showValue: number
    changeValue: (value:number)=>void
    setDisableSetBtn: (value:boolean) => void
};


function Input(props: InputPropsType) {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeValue(+e.currentTarget.value)
        props.setDisableSetBtn(false)
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
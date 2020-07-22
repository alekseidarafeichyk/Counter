import React from 'react';

type ButtonPropsType = {
    name: string
    onClick: () => void
    disabled: boolean
}


function Button(props: ButtonPropsType) {

    const onClickHandler = () => {
        props.onClick()
    }

    return (
        <button onClick={onClickHandler}
                disabled={props.disabled}
        >
            {props.name}
        </button>
    )
}

export default Button
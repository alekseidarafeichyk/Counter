import React from 'react';
import s from './SetButton.module.css'
import Button from '../../Button/Button';

type SetButtonPropsType = {
    setSetting: () => void
    disableSetBtn: boolean
}

function SetButton(props: SetButtonPropsType) {
    return <div className={s.set}>
       <Button name='set'
               disabled={props.disableSetBtn}
               onClick={props.setSetting}/>
    </div>
}

export default SetButton
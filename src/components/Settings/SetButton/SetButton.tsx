import React from 'react';
import s from './SetButton.module.css'
import Button from '../../Button/Button';

function SetButton() {
    return <div className={s.set}>
       <Button name='set'
               disabled={false}
               onClick={()=> {}}/>
    </div>
}

export default SetButton
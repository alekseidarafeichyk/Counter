import React from 'react';
import s from './Settings.module.css'
import Controller from './Controller/Controller';
import SetButton from './SetButton/SetButton';

type SettingsPropsType = {
    startValue: number
    setStartValue: (value: number) => void
    maxValue: number
    setMaxValue: (value: number) => void
    setSetting: () => void
    disableSetBtn: boolean
    setDisableSetBtn: (value: boolean) => void
}

function Settings(props: SettingsPropsType) {
    return <div className={s.settings}>
        <Controller
            startValue={props.startValue}
            setStartValue={props.setStartValue}
            maxValue={props.maxValue}
            setMaxValue={props.setMaxValue}
            setDisableSetBtn={props.setDisableSetBtn}
        />
        <SetButton
            setSetting={props.setSetting}
            disableSetBtn={props.disableSetBtn}
        />
    </div>
}

export default Settings
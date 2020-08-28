import React from 'react';
import './App.css';
import Display from './components/Display/Display';
import Settings from './components/Settings/Settings';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from './components/redux/store';
import {
    incrementAC,
    InitialStateType,
    inputMaxValueAC,
    inputStartValueAC,
    resetAC,
    setSettingAC
} from './components/redux/counter-reducer';
import {saveState} from './components/LocalStorage/localstorage';

function AppWithRedux() {

    let state = useSelector<AppRootStateType, InitialStateType>(state => state.counter)
    let dispatch = useDispatch();

    const inc = () => {
        dispatch(incrementAC())
    }

    const reset = () => {
        dispatch(resetAC())
    }

    const inputMaxValue = (value: number) => {
        dispatch(inputMaxValueAC(value))
    }

    const inputStartValue = (value: number) => {
        dispatch(inputStartValueAC(value))
    }

    const setSetting = () => {
        dispatch(setSettingAC())

        saveState('startValue', state.startValue)
        saveState('maxValue', state.maxValue)
    }

    return (
        <div>
            <div className='container'>
                <Settings
                    startValue={state.startValue}
                    setStartValue={inputStartValue}
                    maxValue={state.maxValue}
                    setMaxValue={inputMaxValue}
                    setSetting={setSetting}
                    disableSetBtn={state.disableSetBtn}
                    startInputError={state.startInputError}
                    maxInputError={state.maxInputError}
                />
            </div>
            <div className='container'>
                <Display
                    value={state.value}
                    inc={inc}
                    reset={reset}
                    maxValue={state.maxValue}
                    disableCountBtn={state.disableCountBtn}
                    mode={state.mode}
                    error={state.error}
                />
            </div>
        </div>
    );
}

export default AppWithRedux;



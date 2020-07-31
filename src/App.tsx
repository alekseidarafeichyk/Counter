import React, {useState} from 'react';
import './App.css';
import Display from './components/Display/Display';
import Settings from './components/Settings/Settings';

function App() {
    let [value, setValue] = useState(0)
    let [startValue,setStartValue] = useState(0)
    let [maxValue,setMaxValue] = useState(5)
    let [disableSetBtn, setDisableSetBtn] = useState(true)
    let [disableCountBtn, setDisableCountBtn] = useState(false)
    let [mode, setMode] = useState(true)
    let [error, setError ] = useState(false)
    let [startInputError, setStartInputError] = useState(false)
    let [maxInputError, setMaxInputError] = useState(false)

    const inc = () => {
        setValue(value + 1)
    }

    const reset = () => {
        setValue(startValue)
    }

    const inputMaxValue = (value: number) => {
        if (value <= startValue || startValue < 0) {
            setDisableSetBtn(true)
            setMode(false)
            setError(true)
            setMaxInputError(true)
        } else {
            setDisableSetBtn(false)
            setMode(false)
            setError(false)
            setMaxInputError(false)
        }
        setDisableCountBtn(true)
        setMaxValue(value)
    }

    const inputStartValue = (value: number) => {
        if (value < 0 ) {
            setDisableSetBtn(true)
            setDisableCountBtn(true)
            setStartValue(value)
            setMode(false)
            setError(true)
            setStartInputError(true)
        } else if (value >= maxValue){
            setDisableSetBtn(true)
            setDisableCountBtn(true)
            setStartValue(value)
            setMode(false)
            setError(true)
            setStartInputError(true)
        } else {
            setDisableSetBtn(false)
            setStartValue(value)
            setDisableCountBtn(true)
            setError(false)
            setStartInputError(false)
        }
    }

    const setSetting = () => {
        setValue(startValue)
        setDisableSetBtn(true)
        setDisableCountBtn(false)
        setMode(true)
    }

    return (
        <div>
            <div className='container'>
                <Settings
                    startValue={startValue}
                    setStartValue={inputStartValue}
                    maxValue={maxValue}
                    setMaxValue={inputMaxValue}
                    setSetting={setSetting}
                    disableSetBtn={disableSetBtn}
                    startInputError={startInputError}
                    maxInputError={maxInputError}
                />
            </div>
            <div className='container'>
                <Display
                    value={value}
                    inc={inc}
                    reset={reset}
                    maxValue={maxValue}
                    disableCountBtn={disableCountBtn}
                    mode={mode}
                    error={error}
                />
            </div>
        </div>
    );
}

export default App;



import React, {useState} from 'react';
import './App.css';
import Display from './components/Display/Display';
import Settings from './components/Settings/Settings';

function App() {
    let [value, setValue] = useState(0)
    let [startValue,setStartValue] = useState(0)
    let [maxValue,setMaxValue] = useState(5)

    const inc = () => {
        setValue(value + 1)
    }

    const reset = () => {
        setValue(0)
    }

    return (
        <div>
            <div className='container'>
                <Settings
                    startValue={startValue}
                    setStartValue={setStartValue}
                    maxValue={maxValue}
                    setMaxValue={setMaxValue}
                />
            </div>
            <div className='container'>
                <Display
                    value={value}
                    inc={inc}
                    reset={reset}
                />
            </div>
        </div>
    );
}

export default App;



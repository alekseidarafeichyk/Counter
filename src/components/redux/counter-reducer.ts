import {restoreState} from '../LocalStorage/localstorage';

export type InitialStateType = {
    value: number
    startValue: number
    maxValue: number
    disableSetBtn: boolean
    disableCountBtn: boolean
    mode: boolean
    error: boolean
    startInputError: boolean
    maxInputError: boolean
}

let initialState: InitialStateType = {
    value: 0,
    startValue: restoreState('startValue', 0),
    maxValue: restoreState('maxValue', 5),
    disableSetBtn: true,
    disableCountBtn: false,
    mode: true,
    error: false,
    startInputError: false,
    maxInputError: false,
}

type ActionType = IncrementActionType | ResetActionType | InputMaxValueActionType | InputStartValueActionType
    | SetSettingActionType
    ;

type IncrementActionType = {
    type: 'INCREMENT',
}

type ResetActionType = {
    type: 'RESET',
}

type InputMaxValueActionType = {
    type: 'INPUT-MAX-VALUE',
    value: number,
}

type InputStartValueActionType = {
    type: 'INPUT-START-VALUE',
    value: number,
}

type SetSettingActionType = {
    type: 'SET_SETTING',
}

export const counterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    let stateCopy = {...state}
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                value: state.value + 1,
            }
        case 'RESET':
            return {
                ...state,
                value: state.startValue
            }
        case 'INPUT-MAX-VALUE':
            if (action.value === state.startValue) {
                return {
                    ...state,
                    maxInputError: true,
                    startInputError: true,
                    disableCountBtn: true,
                    maxValue: action.value,
                }
            } else if (action.value <= state.startValue || state.startValue < 0) {
                return {
                    ...state,
                    disableSetBtn: true,
                    mode: false,
                    error: true,
                    maxInputError: true,
                    disableCountBtn: true,
                    maxValue: action.value,
                }
            } else {
                return {
                    ...state,
                    disableSetBtn: false,
                    mode: false,
                    error: false,
                    maxInputError: false,
                    startInputError: false,
                    disableCountBtn: true,
                    maxValue: action.value,
                }
            }
        case 'INPUT-START-VALUE':
            if (action.value < 0) {
                return {
                    ...state,
                    disableSetBtn: true,
                    disableCountBtn: true,
                    startValue: action.value,
                    mode: false,
                    error: true,
                    startInputError: true,
                }
            } else if (action.value >= state.maxValue) {
                return {
                    ...state,
                    disableSetBtn: true,
                    disableCountBtn: true,
                    startValue: action.value,
                    mode: false,
                    error: true,
                    startInputError: true,
                    maxInputError: true
                }
            } else {
                return {
                    ...state,
                    disableSetBtn: false,
                    startValue: action.value,
                    disableCountBtn: true,
                    error: false,
                    startInputError: false,
                    maxInputError: false,
                }
            }
        case 'SET_SETTING':
            return {
                ...state,
                value: state.startValue,
                disableSetBtn: true,
                disableCountBtn: false,
                mode: true,
            }
        default:
            return state;
    }
}

export const incrementAC = (): IncrementActionType => {
    return {type: 'INCREMENT'}
}

export const resetAC = (): ResetActionType => {
    return {type: 'RESET'}
}

export const inputMaxValueAC = (value: number): InputMaxValueActionType => {
    return {type: 'INPUT-MAX-VALUE', value}
}

export const inputStartValueAC = (value: number): InputStartValueActionType => {
    return {type: 'INPUT-START-VALUE', value}
}

export const setSettingAC = (): SetSettingActionType => {
    return {type: 'SET_SETTING'}
}

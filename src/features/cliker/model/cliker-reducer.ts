import { click } from "@testing-library/user-event/dist/click";
import React, { act } from "react";

type IncrementActionType = ReturnType<typeof IncrementAC>
type ResetActionType = ReturnType<typeof ResetAC>
type InstallationActionType = ReturnType<typeof InstallationAC>

export type initialStateType = {
    click: number,
    maxValue: number,
    startValue: number
}

const initialState: initialStateType = {
    click: 0,
    maxValue: 0,
    startValue: 1,
}
export type ActionType = IncrementActionType | ResetActionType | InstallationActionType

export const clikerReducer = (state = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, click: state.click + 1 }
        case 'RESET':
            return { ...state, click: state.startValue }
        case 'INSTALLATION':
            return { click: action.startValue, maxValue: action.maxValue, startValue: action.startValue }
        default:
            return state;
    }
}

export const IncrementAC = () => {
    return { type: 'INCREMENT' } as const
}
export const ResetAC = () => {
    return { type: 'RESET' } as const
}
export const InstallationAC = (maxValue: number, startValue: number) => {
    return { type: 'INSTALLATION', maxValue, startValue } as const
}
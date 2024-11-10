import { click } from "@testing-library/user-event/dist/click";
import React from "react";
import { combineReducers, legacy_createStore } from "redux";
import { clikerReducer } from "../features/cliker/model/cliker-reducer";





const rootReducer = combineReducers({
    click: clikerReducer
})

export const store = legacy_createStore(rootReducer)


export type RootState = ReturnType<typeof store.getState>
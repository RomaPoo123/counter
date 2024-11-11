import React, { useState, ChangeEvent } from "react";
import "./Input.css"
import { error } from "console";

type InputType = {
    value: number
    title: string
    error?: boolean
    onChange: (value: number) => void

}

export const Input = React.memo((props: InputType) => {
    console.log("rerender Input")
    // локальный стейт компоненты Input
    const [newValue, setValue] = useState<string>(props.value.toString())
    // Отслеживание вводимого значения в input и передача его выше
    const ChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
        props.onChange(+e.currentTarget.value)
    }
    // UI
    return (
        <div className="inputValue">
            <label>{props.title}</label >
            <input type="number" value={newValue} onChange={ChangeHandler} style={{ backgroundColor: `${props.error ? 'red' : 'rgb(248, 248, 248)'}` }} />
        </div>
    )
})

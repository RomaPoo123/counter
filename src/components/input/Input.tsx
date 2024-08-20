import React, { useState, ChangeEvent } from "react";
import "./Input.css"

type InputType = {
    title: string
    onChange: (value: number) => void
}

export const Input = (props: InputType) => {
    // локальный стейт компоненты Input
    const [newValue, setValue] = useState<string>("0")

    // Отслеживание вводимого значения в input и передача его выше
    const ChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
        props.onChange(+e.currentTarget.value)
    }


    // UI
    return (
        <div className="inputValue">
            <label>{props.title}</label >
            <input type="number" value={newValue} onChange={ChangeHandler} />
        </div>
    )
}

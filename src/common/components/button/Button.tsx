import React from "react";
import { ButtonHTMLAttributes } from "react"
import "./Button.css"

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>


export const Button = React.memo(({ title, onClick, disabled }: ButtonType) => {
    console.log("rerender btn")
    return (
        <button onClick={onClick} disabled={disabled}>{title}</button>
    )
})
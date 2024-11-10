import React from "react";
import { ButtonHTMLAttributes } from "react"
import "./Button.css"

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>


export const Button = ({ title, onClick, disabled }: ButtonType) => {
    return (
        <button onClick={onClick} disabled={disabled}>{title}</button>
    )
}
import React, { useState } from "react";
import "../../App.css"
import "./CustomizationCliker.css"
import { Button } from "../button/Button";
import { Input } from "../input/Input";



type CustomizationClikerType = {
    addMaxValue: (max: number) => void
    addStartValue: (start: number) => void
    onClick: () => void
}

export function CustomizationCliker({ addMaxValue, addStartValue, onClick }: CustomizationClikerType) {

    // UI
    return (
        <div className="section">
            <fieldset className="panel">
                <Input title="max value:" onChange={(maxValue) => addMaxValue(maxValue)} />
                <Input title="start value:" onChange={(startValue) => addStartValue(startValue)} />
            </fieldset >
            <div className="panel">
                <Button title="set" onClick={onClick} />
            </div>
        </div >
    )
}
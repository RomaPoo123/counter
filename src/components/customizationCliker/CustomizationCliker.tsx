import React, { useState } from "react";
import "../../App.css"
import "./CustomizationCliker.css"
import { Button } from "../button/Button";
import { Input } from "../input/Input";



type CustomizationClikerType = {
    start: number
    max: number
    addMaxValue: (max: number) => void
    addStartValue: (start: number) => void
    onClick: () => void
}

export function CustomizationCliker({ max, start, addMaxValue, addStartValue, onClick }: CustomizationClikerType) {

    // disable кнопки set
    const disableSetButton = (start >= max)

    // UI
    return (
        <div className="section">
            <fieldset className="panel">
                <Input value={max} title="max value:" onChange={(maxValue) => addMaxValue(maxValue)} error={(disableSetButton || max < 0)} />
                <Input value={start} title="start value:" onChange={(startValue) => addStartValue(startValue)} error={(disableSetButton || start < 0)} />
            </fieldset >
            <div className="panel">
                {disableSetButton ? <span>exceeding the max value
                </span> : (max < 0 || start < 0) ? <span>negative values are not allowed</span> : <></>}
                <Button title="set" onClick={onClick} disabled={disableSetButton || max < 0 || start < 0} />
            </div>
        </div >
    )
}
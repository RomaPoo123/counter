import React, { useState } from "react";
import "../../App.css"
import "./CustomizationCliker.css"
import { Input } from "../../common/components/input/Input";
import { Button } from "../../common/components/button/Button";


type CustomizationClikerType = {
    start: number
    max: number
    settingValues: (max: number, start: number) => void
    onClick: () => void
}

export const CustomizationCliker = React.memo(({ max, start, settingValues, onClick }: CustomizationClikerType) => {
    console.log("rerender CustomizationCliker")
    // disable кнопки set
    const disableSetButton = (start >= max)

    const settingValuesHandler = (max: number, start: number) => {
        settingValues(max, start)
    }
    // UI
    return (
        <div className="section">
            <fieldset className="panel">
                <Input value={max} title="max value:" onChange={(maxValue) => settingValuesHandler(Math.trunc(maxValue), start)} error={(disableSetButton || max < 0)} />
                <Input value={start} title="start value:" onChange={(startValue) => settingValuesHandler(max, Math.trunc(startValue))} error={(disableSetButton || start < 0)} />
            </fieldset >
            <div className="panel">
                {disableSetButton ? <span>exceeding the max value
                </span> : (max < 0 || start < 0) ? <span>negative values are not allowed</span> : <></>}
                <Button title="Set" onClick={onClick} disabled={disableSetButton || max < 0 || start < 0} />
            </div>
        </div >
    )
})
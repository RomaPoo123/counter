import React from "react";
import "./Cliker.css"
import { Button } from "../../../../common/components/button/Button";
import { Line } from "../line/Line";



type ClikerType = {
    Clik: number
    maxCliks: number
    lineWidth: number
    setEditMode: () => void
    addClik: () => void
    resetClik: () => void

}

export const Cliker = React.memo(({ Clik, maxCliks, lineWidth, resetClik, addClik, setEditMode }: ClikerType) => {

    console.log("rerender Cliker")
    // disable кнопки reset
    const disableResetClik = Clik === 0;
    // disable кнопки inc
    const disableAddClik = Clik >= maxCliks;


    return (
        <div className="section ">
            <div className="screen">
                <h1 style={{ color: `${disableAddClik ? 'red' : 'rgb(39, 153, 166)'}` }}>{Clik}</h1>
            </div>
            <div className="panel">
                <div className="btnpanel">
                    <Button onClick={addClik} title={"Inc"} disabled={disableAddClik} />
                    <Button onClick={resetClik} title={"Res"} disabled={disableResetClik} />
                    <Button onClick={setEditMode} title={"Set"} />
                </div>
                <div className="soundbar">
                    <Line lineWidth={lineWidth}></Line>
                </div>
            </div>
        </div >
    )
})



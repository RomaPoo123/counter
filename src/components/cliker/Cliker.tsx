import React from "react";
import "./Cliker.css"
import { Button } from "../button/Button";
import { Line } from "../line/Line";

type ClikerType = {
    Clik: number
    addClik: () => void
    resetClik: () => void
    maxCliks: number
    lineWidth: number
}

export const Cliker = ({ addClik, Clik, resetClik, maxCliks, lineWidth }: ClikerType) => {

    // disable кнопки reset
    const disableResetClik = Clik === 0;
    // disable кнопки inc
    const disableAddClik = Clik === maxCliks;


    return (
        <div className="section ">
            <div className="screen">
                <h1 style={{ color: `${disableAddClik ? 'red' : 'rgb(39, 153, 166)'}` }}>{Clik}</h1>
            </div>
            <div className="panel">
                <div className="btnpanel">
                    <Button onClick={addClik} title={"inc"} disabled={disableAddClik} />
                    <Button onClick={resetClik} title={"reset"} disabled={disableResetClik} />
                </div>
                <div className="soundbar">
                    <Line lineWidth={lineWidth}></Line>
                </div>
            </div>
        </div >
    )
}



import React from "react";
import "./Line.css"
type LineType = {
    lineWidth: number
}

export const Line = ({ lineWidth }: LineType) => {
    return (
        <div className="line" style={{ width: `${lineWidth}%` }}></div>
    )
}
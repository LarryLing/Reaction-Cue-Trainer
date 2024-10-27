import React from "react";
import "./StartButton.css";
import { WhistleIcon } from "../Icons/Icons";

export default function StartButton() {
    return (
        <button className="Title-With-SVG Start-Button">
            <WhistleIcon height={ 34 } width={ 34 } fill="white" stroke="white"/>
            <span>Start</span>
        </button>
    );
};
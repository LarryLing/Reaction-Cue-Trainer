import React, { ReactElement } from "react";
import "./Category.css";

interface Props {
    title : string;
    svg : ReactElement;
    isActive : boolean;
    onShow : () => void;
}

export default function Category(props : Props) {
    return (
        <button 
            className="Title-With-SVG Category" 
            onClick={ props.onShow } 
            style={ {backgroundColor: props.isActive ? "var(--primary)" : "white", color: props.isActive ? "white" : "var(--primary)"} }>
                { props.svg }
                <span>{ props.title }</span>
        </button>
    );
}
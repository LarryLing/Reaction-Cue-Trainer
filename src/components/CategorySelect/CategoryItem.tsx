import { ReactElement } from "react";
import "./CategoryItem.css";

interface Props {
    title : string;
    svg : ReactElement;
    isActive : boolean;
    onShow : () => void;
}

export default function CategoryItem(props : Props) {
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
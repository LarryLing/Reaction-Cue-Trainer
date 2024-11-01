import { ReactElement } from "react";
import "./CategoryItem.css";

interface Props {
    title : string;
    svg : ReactElement;
    isSelected : boolean;
    onShow : () => void;
}

export default function CategoryItem(props : Props) {
    return (
        <button 
            className="Title-With-SVG Category" 
            onClick={ props.onShow } 
            style={ { backgroundColor : props.isSelected ? "var(--primary)" : "white", color: props.isSelected ? "white" : "var(--primary)" } }>
                { props.svg }
                <span>{ props.title }</span>
        </button>
    );
}
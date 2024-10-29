import { useState, ReactElement } from 'react'
import { ChevronIcon } from '../Icons/Icons';
import "./AccordionItem.css"

interface Props {
    id : number;
    title : string;
    content : ReactElement;
}

export default function AccordionItem(props : Props) {
    const [ toggled, setToggled ] = useState(false);

    return (
        <div className="Accordion-Item">
            <button className="Accordion-Item-Trigger" onClick={ () => setToggled(!toggled) }>
                <span>{ props.title }</span>
                <ChevronIcon className={ `Chevron ${ toggled ? "Rotate" : "" }` }/>
            </button>
            <div className={ `Accordion-Item-Content ${ toggled ? "Open" : "" }` }>
                { props.content }
            </div>
        </div>
    )
}

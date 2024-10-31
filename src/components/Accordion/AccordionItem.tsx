import { useState, ReactElement } from 'react'
import { ChevronIcon } from '../Icons/Icons';
import "./AccordionItem.css"

interface Props {
    id : number;
    title : string;
    content : ReactElement;
}

export default function AccordionItem(props : Props) {
    const [ isAccordionToggled, setIsAccordionToggled ] = useState(false);

    return (
        <div className="Accordion-Item">
            <button className="Accordion-Item-Trigger" onClick={ () => setIsAccordionToggled(!isAccordionToggled) }>
                <span>{ props.title }</span>
                <ChevronIcon className={ `Chevron ${ isAccordionToggled ? "Rotate" : "" }` }/>
            </button>
            <div className={ `Accordion-Item-Content ${ isAccordionToggled ? "Open" : "" }` }>
                { props.content }
            </div>
        </div>
    )
}

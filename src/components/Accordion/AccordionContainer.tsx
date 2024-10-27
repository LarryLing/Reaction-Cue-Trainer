import React, { ReactElement } from 'react'
import AccordionItem from './AccordionItem';
import './AccordionContainer.css';
import '../CueSettings/Settings.css';
import { visualContent, audioContent } from '../Definitions';

interface Props {
    displayCategory : string
}

export default function AccordionContainer(props : Props) {
    var currentContent = visualContent;

    if (props.displayCategory === "Audio") {
        currentContent = audioContent;
    }

    return (
        <div className="Outline">
            <div key={ props.displayCategory } className="Accordion-List">
                {
                    currentContent.map( (item, id) =>
                        <div key={ id }>
                            <AccordionItem id={ item.id } title={ item.title } content={ item.content }/>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

import AccordionItem from './AccordionItem';
import { VisualAccordionItemsList, AudioAccordionItemsList } from '../Definitions';
import './AccordionContainer.css';

interface Props {
    stimulusCategory : string
}

export default function AccordionContainer(props : Props) {
    var accordionItemsList = VisualAccordionItemsList;

    if (props.stimulusCategory === "Audio") {
        accordionItemsList = AudioAccordionItemsList;
    }

    return (
        <div className="Outline">
            <div key={ props.stimulusCategory } className="Accordion-List">
                {
                    accordionItemsList.map( (item, id) =>
                        <div key={ id }>
                            <AccordionItem id={ item.id } title={ item.title } content={ item.content }/>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

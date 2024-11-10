import AccordionItem from './AccordionItem';
import { AccordionItemsList } from '../Definitions';
import './AccordionContainer.css';

export default function AccordionContainer() {
    return (
        <div className="Outline">
            <div className="Accordion-List">
                {
                    AccordionItemsList.map( (item, id) =>
                        <div key={ id }>
                            <AccordionItem id={ item.id } title={ item.title } content={ item.content }/>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

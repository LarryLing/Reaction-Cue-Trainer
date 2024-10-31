import './SelectionsContainer.css'
import { ListIcon } from '../Icons/Icons';

interface Props {
    userSelectionsMap : Map<string, string[]>;
}

export default function SelectionsContainer(props : Props) {
    const cueHTMLList = [ ...props.userSelectionsMap.keys() ].map( (key, id) =>
                        <ul key={ id } className="Parent-List">
                            <li>
                                <span>{ key }</span>
                                <ul className="Child-List">
                                    <li>
                                        {
                                            props.userSelectionsMap.get(key)?.join(", ")
                                        }
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    )

    const isMapEmpty = props.userSelectionsMap.size === 0;

    return (
        <div className="Outline Selections-Container">
            <div className="Title-With-SVG">
                <ListIcon style={ {stroke: "var(--primary)"} } height={ 28 } width={ 28 } fill="none"/>
                <span>Selections</span>
            </div>
            <div className="Selections-Content" style={{alignItems : isMapEmpty ? "center" : "", fontStyle : isMapEmpty ? "italic" : ""}}>
                {
                    isMapEmpty ? `Select some cues!` : cueHTMLList
                }
            </div>
        </div>
    )
}

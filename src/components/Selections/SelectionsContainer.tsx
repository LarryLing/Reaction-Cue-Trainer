import { getUserSelectionValidity } from '../HelperFunctions';
import { ListIcon } from '../Icons/Icons';
import './SelectionsContainer.css'

interface Props {
    userSelectionsMap : Map<string, string[]>;
}

export default function SelectionsContainer(props : Props) {
    const stimulusHTMLList = <div className="Selections-Content">
                            {
                                [ ...props.userSelectionsMap.keys() ].map( (key, id) =>
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
                            }
                        </div>

    const headsUpText = <div className="Heads-Up-Text">
                            Please select at least 2 cues under any given category!
                        </div>

    const isMapNotEmpty = props.userSelectionsMap.size !== 0;
    const isMapInvalid = !getUserSelectionValidity(props.userSelectionsMap);

    return (
        <div className="Outline Selections-Container">
            <div className="Title-With-SVG">
                <ListIcon height={ 28 } width={ 28 } fill="none" stroke="var(--primary)"/>
                <span>Selections</span>
            </div>
            { isMapNotEmpty && stimulusHTMLList }
            { isMapInvalid && headsUpText }
        </div>
    )
}

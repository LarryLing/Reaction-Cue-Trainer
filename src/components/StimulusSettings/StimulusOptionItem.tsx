import { ReactElement, useContext, useState } from 'react'
import { UserSelectionsContext } from '../../App';
import './StimulusOptionItem.css'

interface Props {
    key : string;
    optionName : string;
    backgroundColor : string;
    outlineColor : string;
    userSelectionsMapKey : string;
    content? : ReactElement;
}

export default function StimulusOptionItem(props : Props) {
    const userSelectionsProvider = useContext(UserSelectionsContext);

    const userSelectionsMap : Map<string, string[]> | undefined = userSelectionsProvider?.userSelectionsMap;
    const stimulusList : string[] | undefined = userSelectionsMap?.get(props.userSelectionsMapKey);

    const [ isStimulusToggled, setIsStimulusToggled ] = useState(false);

    const clickHandler = () => {
        setIsStimulusToggled(!isStimulusToggled);

        //
        // If the userSelectionsMap does not contain the stimuli's associated category, add the category to the the userSelectionsMap
        // 
        if (!stimulusList) {
            userSelectionsProvider?.setUserSelectionsMap(new Map<string, string[]>(userSelectionsMap?.set(props.userSelectionsMapKey, [props.optionName])));
        }
        else {
            if (isStimulusToggled) {
                const updatedStimulusList = stimulusList.filter((stimulus) => stimulus !== props.optionName);

                userSelectionsProvider?.setUserSelectionsMap(
                    new Map<string, string[]>(userSelectionsMap?.set(props.userSelectionsMapKey, updatedStimulusList))
                );

                if (updatedStimulusList.length === 0) {
                    const updatedSelectedCuesMap = new Map<string, string[]>(userSelectionsProvider?.userSelectionsMap);

                    updatedSelectedCuesMap.delete(props.userSelectionsMapKey);

                    userSelectionsProvider?.setUserSelectionsMap(updatedSelectedCuesMap);
                }
            }
            else {
                userSelectionsProvider?.setUserSelectionsMap(
                    new Map<string, string[]>(userSelectionsMap?.set(props.userSelectionsMapKey, [ ...stimulusList, props.optionName ]))
                );
            }
        }
    }

    return (
        <div
            key={ props.key }
            className="Stimulus-Option-Item" 
            style={{
                backgroundColor: `${props.backgroundColor}`, 
                borderColor: `${props.outlineColor}`, 
                borderWidth: isStimulusToggled ? "var(--outlinewidth)" : "calc(var(--outlinewidth) * 0.5)" }}
            onClick={ clickHandler }>
                { props.content }
        </div>
    )
}
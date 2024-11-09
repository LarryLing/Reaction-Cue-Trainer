import { ReactElement, useContext, useState } from 'react'
import { UserSelectionsContext } from '../../App';
import './OptionItem.css'

interface Props {
    key : string;
    optionName : string;
    backgroundColor : string;
    outlineColor : string;
    userSelectionsMapKey : string;
    content? : ReactElement;
}

export default function OptionItem(props : Props) {
    const userSelectionsProvider = useContext(UserSelectionsContext);

    const userSelectionsMap : Map<string, string[]> | undefined = userSelectionsProvider?.userSelectionsMap;
    const indexedUserSelections : string[] | undefined = userSelectionsMap?.get(props.userSelectionsMapKey);

    const determineIfPreviouslyToggled = () => {
        if (!indexedUserSelections) {
            return false;
        }

        return indexedUserSelections.includes(props.optionName);
    }

    const [ isOptionItemToggled, setIsOptionItemToggled ] = useState(determineIfPreviouslyToggled);

    const updateUserSelectionsMap = () => {
        if (!indexedUserSelections) {
            userSelectionsProvider?.setUserSelectionsMap(new Map<string, string[]>(userSelectionsMap?.set(props.userSelectionsMapKey, [props.optionName])));
            setIsOptionItemToggled(true);
        }
        else {
            const indexOfOption = indexedUserSelections.indexOf(props.optionName)

            if (indexOfOption > -1) {
                userSelectionsProvider?.setUserSelectionsMap(
                    new Map<string, string[]>(userSelectionsMap?.set(props.userSelectionsMapKey, indexedUserSelections.filter(cue => cue !== props.optionName)))
                );
                setIsOptionItemToggled(false);

                if (userSelectionsProvider?.userSelectionsMap.get(props.userSelectionsMapKey)?.length === 0) {
                    const updatedSelectedCuesMap = new Map<string, string[]>(userSelectionsProvider?.userSelectionsMap);

                    updatedSelectedCuesMap.delete(props.userSelectionsMapKey);

                    userSelectionsProvider?.setUserSelectionsMap(updatedSelectedCuesMap);
                }
            }
            else {
                userSelectionsProvider?.setUserSelectionsMap(new Map<string, string[]>(userSelectionsMap?.set(props.userSelectionsMapKey, [ ...indexedUserSelections, props.optionName ])));
                setIsOptionItemToggled(true);
            }
        }
    }

    return (
        <div
            key={ props.key }
            className="Option-Item" 
            style={{
                backgroundColor: `${props.backgroundColor}`, 
                borderColor: `${props.outlineColor}`, 
                borderWidth: isOptionItemToggled ? "var(--outlinewidth)" : "calc(var(--outlinewidth) * 0.5)" }}
            onClick={ updateUserSelectionsMap }>
                { props.content }
        </div>
    )
}
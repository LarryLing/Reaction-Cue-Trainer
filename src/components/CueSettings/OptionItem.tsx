import { ReactElement, useContext, useState } from 'react'
import './OptionItem.css'
import { SelectedCuesContext } from '../../App';

interface Props {
    id : number;
    name : string;
    primary : string;
    secondary : string;
    mapKey : string;
    content? : ReactElement;
}

export default function OptionItem(props : Props) {
    const selectedCuesProvider = useContext(SelectedCuesContext);
    const selectedCuesMap : Map<string, string[]> | undefined = selectedCuesProvider?.selectedCuesMap;
    const selectedCues : string[] | undefined = selectedCuesMap?.get(props.mapKey);

    const determineIfToggled = () => {
        if (!selectedCues) {
            return false;
        }

        return selectedCues.includes(props.name);
    }

    const [ toggled, setToggled ] = useState(determineIfToggled);

    const updatedSelectedCues = () => {
        if (!selectedCues) {
            selectedCuesProvider?.setSelectedCuesMap(new Map<string, string[]>(selectedCuesMap?.set(props.mapKey, [props.name])));
            setToggled(true);
        }
        else {
            const index = selectedCues.indexOf(props.name)

            if (index > -1) {
                selectedCuesProvider?.setSelectedCuesMap(
                    new Map<string, string[]>(selectedCuesMap?.set(props.mapKey, selectedCues.filter(cue => cue !== props.name)))
                );
                setToggled(false);

                if (selectedCuesProvider?.selectedCuesMap.get(props.mapKey)?.length === 0) {
                    const newMap = new Map<string, string[]>(selectedCuesProvider?.selectedCuesMap);

                    newMap.delete(props.mapKey);

                    selectedCuesProvider?.setSelectedCuesMap(newMap);
                }
            }
            else {
                selectedCuesProvider?.setSelectedCuesMap(new Map<string, string[]>(selectedCuesMap?.set(props.mapKey, [ ...selectedCues, props.name ])));
                setToggled(true);
            }
        }
    }

    return (
        <div
            key={ props.id } 
            className="Option-Item" 
            style={ {
                backgroundColor: `${props.primary}`, 
                borderColor: `${props.secondary}`, 
                borderWidth: toggled ? "var(--outlinewidth)" : "calc(var(--outlinewidth) * 0.5)"} }
            onClick={ updatedSelectedCues }>
                { props.content }
        </div>
    )
}
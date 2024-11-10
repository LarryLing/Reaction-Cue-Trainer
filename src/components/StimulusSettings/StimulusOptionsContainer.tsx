import StimulusOptionItem from './StimulusOptionItem';
import { OptionItemRenderInfoType } from '../Definitions';
import { createClonedSVG } from '../HelperFunctions';
import { uid } from 'uid';
import './StimulusOptionsContainer.css';
import './Settings.css'

interface Props {
    prompt : string;
    userSelectionsMapKey : string;
    optionMap : Map<string, OptionItemRenderInfoType>;
}

type OptionsKVP = { id : string, optionName : string } & OptionItemRenderInfoType

export default function StimulusOptionsContainer(props : Props) {
    const optionMapKVPs : OptionsKVP[] = [];

    props.optionMap.forEach((value, key) => optionMapKVPs.push(
        {
            id : uid(),
            optionName : key,
            backgroundColor : value.backgroundColor,
            outlineColor : value.outlineColor,
            content : value.content,
        }
    ))

    return (
		<div className="Options-Container">
            <div className="Prompt">
                { props.prompt }
            </div>
            <div className="Options-List">
                {
                    optionMapKVPs.map((optionMapKVP) => (
                        <StimulusOptionItem
                            key={ optionMapKVP.id }
                            optionName={ optionMapKVP.optionName }
                            backgroundColor={ optionMapKVP.backgroundColor }
                            outlineColor={ optionMapKVP.outlineColor }
                            userSelectionsMapKey={ props.userSelectionsMapKey }
                            content={ createClonedSVG(optionMapKVP.content, "100%", "100%") }/>
                    ))
                }
            </div>
        </div>
    )
}
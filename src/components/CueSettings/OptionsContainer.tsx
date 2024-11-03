import OptionItem from './OptionItem';
import { OptionItemRenderInfoType } from '../Definitions';
import { uid } from 'uid';
import './OptionsContainer.css';
import './Settings.css'

interface Props {
    prompt : string;
    optionMap : Map<string, OptionItemRenderInfoType>;
}

type OptionsKVP = { id : string, optionName : string } & OptionItemRenderInfoType

export default function OptionsContainer(props : Props) {
    const optionMapKVPs : OptionsKVP[] = [];

    props.optionMap.forEach((value, key) => optionMapKVPs.push(
        {
            id : uid(),
            optionName : key,
            backgroundColor : value.backgroundColor,
            outlineColor : value.outlineColor,
            userSelectionsMapKey : value.userSelectionsMapKey,
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
                        <OptionItem
                            key={ optionMapKVP.id }
                            optionName={ optionMapKVP.optionName }
                            backgroundColor={ optionMapKVP.backgroundColor }
                            outlineColor={ optionMapKVP.outlineColor }
                            userSelectionsMapKey={ optionMapKVP.userSelectionsMapKey }
                            content={ optionMapKVP.content }/>
                    ))
                }
            </div>
        </div>
    )
}
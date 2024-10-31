import OptionItem from './OptionItem';
import { Option } from '../Definitions';
import './OptionsContainer.css';
import './Settings.css'

interface Props {
    prompt : string;
    optionsList : Option[];
}

export default function OptionsContainer(props : Props) {
    return (
		<div className="Options-Container">
            <div className="Prompt">
                { props.prompt }
            </div>
            <div className="Options-List">
                {
                    props.optionsList.map( (item, id) => (
                        <OptionItem 
                            id={ id }
                            optionName={ item.optionName }	
                            backgroundColor={ item.backgroundColor }
                            outlineColor={ item.outlineColor }
                            userSelectionsMapKey={ item.userSelectionsMapKey }
                            content={ item.content }/>
                    ))
                }
            </div>
        </div>
    )
}
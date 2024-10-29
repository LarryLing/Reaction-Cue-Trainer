import './Settings.css'
import OptionItem from './OptionItem';
import { Option } from '../Definitions';
import './OptionsContainer.css';

interface Props {
    prompt : string;
    optionList : Option[];
}

export default function OptionsContainer(props : Props) {
    return (
		<div className="Options-Container">
            <div className="Prompt">
                { props.prompt }
            </div>
            <div className="Options-List">
                {
                    props.optionList.map( (item, id) => (
                        <OptionItem 
                            id={ id }
                            name={ item.name }	
                            primary={ item.primary }
                            secondary={ item.secondary }
                            mapKey={ item.mapKey }
                            content={ item.content }/>
                    ))
                }
            </div>
        </div>
    )
}
import { ChangeEvent, useContext, useState } from 'react'
import './Settings.css'
import './TextInputContainer.css'
import { SelectedCuesContext } from '../../App';

interface Props {
	prompt : string;
	identifier : string;
	mapKey : string;
	placeholderText : string;
	defaultText : string;
}

export default function TextInputContainer(props : Props) {
	const selectedCuesProvider = useContext(SelectedCuesContext);
	const [ inputValue, setInputValue ] = useState(selectedCuesProvider?.selectedCuesMap.get(props.mapKey) ? selectedCuesProvider?.selectedCuesMap.get(props.mapKey)?.join(", ") : "");
	
	const onChange = (event : ChangeEvent<HTMLInputElement>) => {
		const value = (event.target as HTMLInputElement).value;

		setInputValue(value);
	}

	const onBlur = () => {
		if (inputValue == undefined) {
			throw new Error("Input value is undefined!");
		}

		let formattedValue = inputValue.replace(/\s/g, "");
		
		if (formattedValue == "") {
			const newMap = new Map<string, string[]>(selectedCuesProvider?.selectedCuesMap);

			newMap.delete(props.mapKey);

			selectedCuesProvider?.setSelectedCuesMap(newMap);
		}
		else {
			selectedCuesProvider?.setSelectedCuesMap(
				new Map<string, string[]>(selectedCuesProvider.selectedCuesMap).set(props.mapKey, formattedValue.split(","))
			);
		}
	}

	return (
		<div className="Text-Input-Container">
			<label className="Prompt" htmlFor={ props.identifier }>
				{ props.prompt }
			</label>
			<input
				className="Text-Input"
				type="text" 
				id={ props.identifier }
				name={ props.identifier }
				placeholder={ props.placeholderText }
				onChange={ (e) => onChange(e) }
				onBlur={ onBlur }
				value={ inputValue }/>
		</div>
    )
}
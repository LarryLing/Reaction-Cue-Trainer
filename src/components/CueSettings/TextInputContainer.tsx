import { ChangeEvent, useContext, useState } from 'react'
import { UserSelectionsContext } from '../../App';
import './Settings.css'
import './TextInputContainer.css'

interface Props {
	prompt : string;
	identifier : string;
	userSelectionsMapKey : string;
	placeholderText : string;
}

export default function TextInputContainer(props : Props) {
	const userSelectionsProvider = useContext(UserSelectionsContext);

	const [ inputValue, setInputValue ] = useState(userSelectionsProvider?.userSelectionsMap.get(props.userSelectionsMapKey) ? userSelectionsProvider?.userSelectionsMap.get(props.userSelectionsMapKey)?.join(", ") : "");
	
	const updateInputValue = (event : ChangeEvent<HTMLInputElement>) => {
		const currentTargetValue = (event.target as HTMLInputElement).value;

		setInputValue(currentTargetValue);
	}

	const updateUserSelectionsMap = () => {
		if (inputValue == undefined) {
			throw new Error("Input value is undefined!");
		}

		let formattedInputValue = inputValue.replace(/\s/g, "");
		
		if (formattedInputValue == "") {
			const updatedUserSelectionsMap = new Map<string, string[]>(userSelectionsProvider?.userSelectionsMap);

			updatedUserSelectionsMap.delete(props.userSelectionsMapKey);

			userSelectionsProvider?.setUserSelectionsMap(updatedUserSelectionsMap);
		}
		else {
			userSelectionsProvider?.setUserSelectionsMap(new Map<string, string[]>(userSelectionsProvider.userSelectionsMap).set(props.userSelectionsMapKey, formattedInputValue.split(",")));
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
				onChange={ (e) => updateInputValue(e) }
				onBlur={ updateUserSelectionsMap }
				value={ inputValue }/>
		</div>
    )
}
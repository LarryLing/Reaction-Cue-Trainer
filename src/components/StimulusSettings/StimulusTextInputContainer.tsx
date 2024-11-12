import { ChangeEvent, useContext, useState, useEffect } from 'react'
import { UserSelectionsContext } from '../../App';
import './Settings.css'
import './StimulusTextInputContainer.css'
import { formatInputValue, containsOnlyAlphanumericAndComma } from '../HelperFunctions';

interface Props {
	prompt : string;
	identifier : string;
	userSelectionsMapKey : string;
	placeholderText : string;
}

export default function StimulusTextInputContainer(props : Props) {
	const userSelectionsProvider = useContext(UserSelectionsContext);

	const [ inputValue, setInputValue ] = useState(userSelectionsProvider?.userSelectionsMap.get(props.userSelectionsMapKey) ? userSelectionsProvider?.userSelectionsMap.get(props.userSelectionsMapKey)?.join(", ") : "");
    const [ isAttemptedInputValid, setIsAttemptedInputValid ] = useState(true);
	
	const updateValue = (event : ChangeEvent<HTMLInputElement>) => {
		const currentTargetValue = (event.target as HTMLInputElement).value;

        setIsAttemptedInputValid(containsOnlyAlphanumericAndComma(currentTargetValue));

        if (isAttemptedInputValid) {
            setInputValue(currentTargetValue);
        }
	}

    useEffect(() => {
        if (inputValue === undefined) {
            throw new Error("Input value was undefined!");
        }

        const formattedInputValue = formatInputValue(inputValue);

        if (formattedInputValue === "") {
			const updatedUserSelectionsMap = new Map<string, string[]>(userSelectionsProvider?.userSelectionsMap);

			updatedUserSelectionsMap.delete(props.userSelectionsMapKey);

			userSelectionsProvider?.setUserSelectionsMap(updatedUserSelectionsMap);
		}
		else {
			userSelectionsProvider?.setUserSelectionsMap(new Map<string, string[]>(userSelectionsProvider.userSelectionsMap).set(props.userSelectionsMapKey, formattedInputValue.split(",")));
        }
    }, [inputValue]);

	return (
		<div className="Text-Input-Container">
			<label className="Prompt" htmlFor={ props.identifier }>
				{ props.prompt }
			</label>
			<input
				className="Text-Input-Box"
				type="text" 
				id={ props.identifier }
				name={ props.identifier }
				placeholder={ props.placeholderText }
				onChange={ (e) => updateValue(e) }
				value={ inputValue }/>
            {
                !isAttemptedInputValid && <p className="Heads-Up-Text">Only alphanumeric and comma characters are allowed!</p>
            }
            
		</div>
    )
}
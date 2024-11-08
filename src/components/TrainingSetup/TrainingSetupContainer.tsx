import { ChangeEvent, useState } from 'react'
import { GearIcon } from '../Icons/Icons'
import { getSecondsFromHHMMSS, toHHMMSS } from '../HelperFunctions'
import TextInputItem from './TextInputItem'
import CheckboxItem from './CheckboxItem'
import './TrainingSetupContainer.css'

interface Props {
    duration : number;
    setDuration : (arg0 : number) => void;
    frequency : number;
    setFrequency : (arg0 : number) => void;
    isDurationVisible : boolean;
    setIsDurationVisible : (arg0 : boolean) => void;
    isFrequencyVisible : boolean;
    setIsFrequencyVisible : (arg0 : boolean) => void;
    isUniqueEnabled : boolean;
    setIsUniqueEnabled : (arg0 : boolean) => void;
}

export default function TrainingSetupContainer(props : Props) {
    const [ durationTextValue, setDurationTextValue ] = useState(toHHMMSS(props.duration));
    const [ frequencyTextValue, setFrequencyTextValue ] = useState(toHHMMSS(props.frequency));

    const updateTextValue = (event : ChangeEvent<HTMLInputElement>) => {
        const currentTargetName = (event.target as HTMLInputElement).name;
        const currentTargetValue = (event.target as HTMLInputElement).value;

        if (currentTargetName === "Duration") {
            setDurationTextValue(currentTargetValue);
        }
        else {
            setFrequencyTextValue(currentTargetValue);
        }
    };

    const updateParentValues = (event : ChangeEvent<HTMLInputElement>) => {
        const currentTargetName = (event.target as HTMLInputElement).name;
        const currentTargetValue = (event.target as HTMLInputElement).value;
        const seconds = Math.max(0, getSecondsFromHHMMSS(currentTargetValue));

        const hhmmss = toHHMMSS(seconds);

        if (currentTargetName === "Duration") {
            setDurationTextValue(hhmmss);
            props.setDuration(seconds);
        }
        else {
            setFrequencyTextValue(hhmmss);
            props.setFrequency(seconds);
        }
    };

    return (
        <div className="Outline Timings-Container">
            <div className="Title-With-SVG">
                <GearIcon height={ 28 } width={ 28 } fill="var(--primary)" stroke="none"/>
                <span>Setup</span>
            </div>
            <div className="Timings-Content">
                <TextInputItem identifier="Duration" onChange={ updateTextValue } onBlur={ updateParentValues } textValue={ durationTextValue }/>
                <TextInputItem identifier="Frequency" onChange={ updateTextValue } onBlur={ updateParentValues } textValue={ frequencyTextValue }/>
                <CheckboxItem identifier="Show Unique" onChange={ props.setIsUniqueEnabled } booleanValue={ props.isUniqueEnabled }/>
                <CheckboxItem identifier="Show Duration" onChange={ props.setIsDurationVisible } booleanValue={ props.isDurationVisible }/>
                <CheckboxItem identifier="Show Frequency" onChange={ props.setIsFrequencyVisible } booleanValue={ props.isFrequencyVisible }/>
                <div className="Heads-Up-Text" style={{ display : (props.duration === 0 || props.frequency === 0) ? "block" : "none" }}>
                    Input value(s) for Duration and/or Frequency cannot be zero!
                </div>
            </div>
        </div>
    )
}

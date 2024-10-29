import { ChangeEvent, useContext, useState } from 'react'
import { StopwatchIcon } from '../Icons/Icons'
import './TimingsContainer.css'
import { getSecondsFromHHMMSS, toHHMMSS } from '../HelperFunctions';
import { TimingsContext } from '../../App'

export default function TimingsContainer() {
    const timingsContextProvider = useContext(TimingsContext);
    const [ durationInputValue, setDurationInputValue ] = useState(toHHMMSS(timingsContextProvider?.duration));
    const [ frequencyInputValue, setFrequencyInputValue ] = useState(toHHMMSS(timingsContextProvider?.frequency));

    const onChange = (event : ChangeEvent<HTMLInputElement>) => {
        const name = (event.target as HTMLInputElement).name;
        const value = (event.target as HTMLInputElement).value;

        if (name === "Duration") {
            setDurationInputValue(value);
        }
        else {
            setFrequencyInputValue(value);
        }
    };

    const onBlur = (event : ChangeEvent<HTMLInputElement>) => {
        const name = (event.target as HTMLInputElement).name;
        const value = (event.target as HTMLInputElement).value;
        const seconds = Math.max(0, getSecondsFromHHMMSS(value));

        const time = toHHMMSS(seconds);

        if (name === "Duration") {
            setDurationInputValue(time);
            timingsContextProvider?.setDuration(seconds);
        }
        else {
            setFrequencyInputValue(time);
            timingsContextProvider?.setFrequency(seconds);
        }
    };

    return (
        <div className="Outline Timings-Container">
            <div className="Title-With-SVG">
                <StopwatchIcon style={ {stroke: "var(--primary)"} } height={ 28 } width={ 28 } fill="none"/>
                <span>Timings</span>
            </div>
            <div className="Timings-Content">
                <div className="Timings-Subcontainer">
                    <label className="Timings-Title" htmlFor="Duration">Duration</label>
                    <input 
                        className="Timings-Input"
                        type="text" 
                        id="Duration"
                        name="Duration"
                        onChange={ (e) => onChange(e) }
                        onBlur={ (e) => onBlur(e) }
                        value={ durationInputValue }/>
                </div>
                <div className="Timings-Subcontainer">
                    <label className="Timings-Title" htmlFor="Frequency">Frequency</label>
                    <input 
                        className="Timings-Input"
                        type="text" 
                        id="Frequency"
                        name="Frequency"
                        onChange={(e) => onChange(e)}
                        onBlur={(e) => onBlur(e)}
                        value={ frequencyInputValue }/>
                </div>
            </div>
        </div>
    )
}

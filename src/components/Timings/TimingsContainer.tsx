import { ChangeEvent, useContext, useState } from 'react'
import { StopwatchIcon } from '../Icons/Icons'
import { getSecondsFromHHMMSS, toHHMMSS } from '../HelperFunctions';
import { TimingsContext } from '../../App'
import './TimingsContainer.css'

export default function TimingsContainer() {
    const timingsContextProvider = useContext(TimingsContext);

    const [ durationInputValue, setDurationInputValue ] = useState(toHHMMSS(timingsContextProvider?.duration));
    const [ frequencyInputValue, setFrequencyInputValue ] = useState(toHHMMSS(timingsContextProvider?.frequency));

    const updateInputValue = (event : ChangeEvent<HTMLInputElement>) => {
        const currentTargetName = (event.target as HTMLInputElement).name;
        const currentTargetValue = (event.target as HTMLInputElement).value;

        if (currentTargetName === "Duration") {
            setDurationInputValue(currentTargetValue);
        }
        else {
            setFrequencyInputValue(currentTargetValue);
        }
    };

    const updateTimings = (event : ChangeEvent<HTMLInputElement>) => {
        const currentTargetName = (event.target as HTMLInputElement).name;
        const currentTargetValue = (event.target as HTMLInputElement).value;
        const seconds = Math.max(0, getSecondsFromHHMMSS(currentTargetValue));

        const hhmmss = toHHMMSS(seconds);

        if (currentTargetName === "Duration") {
            setDurationInputValue(hhmmss);
            timingsContextProvider?.setDuration(seconds);
        }
        else {
            setFrequencyInputValue(hhmmss);
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
                        onChange={ (e) => updateInputValue(e) }
                        onBlur={ (e) => updateTimings(e) }
                        value={ durationInputValue }/>
                </div>
                <div className="Timings-Subcontainer">
                    <label className="Timings-Title" htmlFor="Frequency">Frequency</label>
                    <input 
                        className="Timings-Input"
                        type="text" 
                        id="Frequency"
                        name="Frequency"
                        onChange={(e) => updateInputValue(e)}
                        onBlur={(e) => updateTimings(e)}
                        value={ frequencyInputValue }/>
                </div>
                <div className="Warning-Text" style={{ display : (timingsContextProvider?.duration === 0 || timingsContextProvider?.frequency === 0) ? "block" : "none" }}>
                    Make sure your input value(s) is not zero before starting!
                </div>
            </div>
        </div>
    )
}

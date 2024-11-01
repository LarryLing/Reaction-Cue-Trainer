import { useState } from 'react'
import "./StartButton.css";
import { WhistleIcon } from "../Icons/Icons";

interface Props {
    duration : number;
    frequency : number;
    isUserSelectionsMapEmpty : boolean;
    isTrainingModeActive : boolean;
    setIsTrainingModeActive : (arg : boolean) => void;
}

export default function StartButton(props : Props) {
    const [ isButtonShaking, setIsButtonShaking ] = useState(false);

    const startTraining = () => {
        if ((props.duration === 0) || (props.frequency === 0) || props.isUserSelectionsMapEmpty) {
            setIsButtonShaking(true);
            setTimeout(() => setIsButtonShaking(false), 500);
        }
        else {
            props.setIsTrainingModeActive(true);
        }
    }

    return (
        <button onClick={ startTraining } className={ `Title-With-SVG Start-Button ${ isButtonShaking ? "Horizontal-Shake" : "" }` }>
            <WhistleIcon height={ 34 } width={ 34 } fill="white" stroke="white"/>
            <span>Start</span>
        </button>
    );
};
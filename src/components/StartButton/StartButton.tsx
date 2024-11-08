import { useState } from 'react'
import { WhistleIcon } from "../Icons/Icons";
import "./StartButton.css";

interface Props {
    isDurationZero : boolean;
    isFrequencyZero : boolean;
    isUserSelectionsMapInvalid : boolean;
    isTrainingModeActive : boolean;
    setIsTrainingModeActive : (arg : boolean) => void;
}

export default function StartButton(props : Props) {
    const [ isButtonShaking, setIsButtonShaking ] = useState(false);

    const startTraining = () => {
        if (props.isDurationZero || props.isFrequencyZero || props.isUserSelectionsMapInvalid) {
            setIsButtonShaking(true);
            setTimeout(() => setIsButtonShaking(false), 500);
        }
        else {
            window.scrollTo({ top: 0, left: 0} );
        
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
import { useEffect, useState } from 'react';
import { VisualObjType } from '../Definitions';
import { CrossIcon } from '../Icons/Icons';
import './TrainingModal.css';
import { getNewColor } from '../HelperFunctions';

interface Props {
    userSelectionsMap : Map<string, string[]>;
    duration : number;
    frequency : number;
    isTrainingModeActive : boolean;
    setIsTrainingModeActive : (arg0 : boolean) => void;
}

export default function TrainingModal(props : Props) {
    const [ timeRemaining, setTimeRemaining ] = useState(props.duration);
    const [ timeUntilNextStimulus, setTimeUntilNextStimulus ] = useState(props.frequency);
    const [ trainingModeState, setTrainingModeState ] = useState<VisualObjType>(
        {
            color : getNewColor(props.userSelectionsMap),
            shape : <></>,
            text : <></>,
        }
    )

    useEffect(() => {
        if (timeRemaining === 0) {
            props.setIsTrainingModeActive(false);
            return;
        }

        if (timeUntilNextStimulus === 0) {
            const [randomUserSelectionsMapKey, randomStimulus] = getNewStimulus();

            updateTrainingModeState(randomUserSelectionsMapKey, randomStimulus);

            setTimeUntilNextStimulus(props.frequency);
        }

        const interval = setInterval(() => {
            setTimeRemaining(timeRemaining - 1);
            setTimeUntilNextStimulus(timeUntilNextStimulus - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [timeRemaining, timeUntilNextStimulus]);

    const getNewStimulus = () => {
        const userSelectionsMapKeys = [...props.userSelectionsMap.keys()];
        const randomUserSelectionsMapKey = userSelectionsMapKeys[Math.floor(Math.random() * userSelectionsMapKeys.length)];

        const stimulusList = props.userSelectionsMap.get(randomUserSelectionsMapKey);
        const randomStimulus = stimulusList?.[Math.floor(Math.random() * stimulusList.length)];

        return [randomUserSelectionsMapKey, randomStimulus];
    }

    const updateTrainingModeState = (randomUserSelectionsMapKey : string | undefined, randomStimulus : string | undefined) => {
        if (randomUserSelectionsMapKey === undefined) {
            throw new Error("An invalid stimulus group name was randomly selected!");
        }

        if (randomStimulus === undefined) {
            throw new Error("An invalid stimulus was randomly selected!");
        }

        switch (randomUserSelectionsMapKey) {
            case "Colors":
                const newColor = getNewColor(props.userSelectionsMap);

                setTrainingModeState({
                    color : newColor,
                    shape : trainingModeState.shape,
                    text : trainingModeState.text
                })
                break;
        }      
    }

    return (
        <div className="Modal-Container" style={{ background : trainingModeState.color }}>
            <div>{ timeRemaining }</div>
            <div>{ timeUntilNextStimulus }</div>
            <CrossIcon 
                className="Exit-Modal-Button" 
                onClick={ () => props.setIsTrainingModeActive(false) }
                width={ 50 }
                height={ 50 }
                fill="var(--primary)"/>
        </div>
    )
}

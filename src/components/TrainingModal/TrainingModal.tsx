import { useEffect, useState } from 'react';
import { TrainingModeType } from '../Definitions';
import { CrossIcon } from '../Icons/Icons';
import { getColor, getShape, getText, startWithShapesOrText } from '../HelperFunctions';
import { useLockBodyScroll } from "@uidotdev/usehooks";
import './TrainingModal.css';

interface Props {
    userSelectionsMap : Map<string, string[]>;
    duration : number;
    frequency : number;
    isTrainingModeActive : boolean;
    setIsTrainingModeActive : (arg0 : boolean) => void;
}

export default function TrainingModal(props : Props) {
    useLockBodyScroll();
    
    const [ timeRemaining, setTimeRemaining ] = useState(props.duration);
    const [ timeUntilNextStimulus, setTimeUntilNextStimulus ] = useState(props.frequency);
    const [ displayShapesOrText, setDisplayShapesOrText ] = useState(startWithShapesOrText(props.userSelectionsMap));
    const [ trainingModeState, setTrainingModeState ] = useState<TrainingModeType>(
        {
            color : getColor(props.userSelectionsMap),
            shape : <div className="Shapes-Text-Div">{ getShape(props.userSelectionsMap) }</div>,
            text : <div className="Shapes-Text-Div">{ getText(props.userSelectionsMap) }</div>,
            speech : "",
            sfx : "",
        }
    )

    useEffect(() => {
        if (timeRemaining === 0) {
            props.setIsTrainingModeActive(false);
            return;
        }

        if (timeUntilNextStimulus === 0) {
            const nextStimulus = getNextStimulus();

            updateTrainingModeState(nextStimulus);

            setTimeUntilNextStimulus(props.frequency);
        }

        const interval = setInterval(() => {
            setTimeRemaining(timeRemaining - 1);
            setTimeUntilNextStimulus(timeUntilNextStimulus - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [timeRemaining, timeUntilNextStimulus]);

    const getNextStimulus = () => {
        const stimulusList = [...props.userSelectionsMap.keys()];
        const nextStimulus = stimulusList[Math.floor(Math.random() * stimulusList.length)];

        return nextStimulus;
    }

    const updateTrainingModeState = (nextStimulus : string) => {
        if (nextStimulus === undefined) {
            throw new Error("An invalid stimulus group name was randomly selected!");
        }

        switch (nextStimulus) {
            case "Colors":
                const newColor = getColor(props.userSelectionsMap);

                setTrainingModeState({
                    color : newColor,
                    shape : trainingModeState.shape,
                    text : trainingModeState.text,
                    speech : trainingModeState.speech,
                    sfx : trainingModeState.sfx,
                })
                break;

            case "Shapes":
                const newShape = <div className="Shapes-Text-Div">
                    { getShape(props.userSelectionsMap) }
                </div>

                setDisplayShapesOrText("Shapes");
                setTrainingModeState({
                    color : trainingModeState.color,
                    shape : newShape,
                    text : trainingModeState.text,
                    speech : trainingModeState.speech,
                    sfx : trainingModeState.sfx,
                })
                break;

            case "Text":
                const newText = <div className="Shapes-Text-Div">
                    { getText(props.userSelectionsMap) }
                </div>

                setDisplayShapesOrText("Text");
                setTrainingModeState({
                    color : trainingModeState.color,
                    shape : trainingModeState.shape,
                    text : newText,
                    speech : trainingModeState.speech,
                    sfx : trainingModeState.sfx,
                })
                break;
        }      
    }

    return (
        <div className="Modal-Container" style={{ background : trainingModeState.color }}>
            {/* <div>{timeRemaining}</div>
            <div>{timeUntilNextStimulus}</div> */}
            {
                displayShapesOrText === "Shapes" ? trainingModeState.shape : <></>
            }
            {
                displayShapesOrText === "Text" ? trainingModeState.text : <></>
            }
            <CrossIcon 
                className="Exit-Modal-Button" 
                onClick={ () => props.setIsTrainingModeActive(false) }
                width={ 50 }
                height={ 50 }
                fill="var(--primary)"/>
        </div>
    )
}

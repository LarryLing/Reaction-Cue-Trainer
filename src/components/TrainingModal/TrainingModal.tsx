import { useEffect, useState } from 'react';
import { TrainingModeType } from '../Definitions';
import { CrossIcon } from '../Icons/Icons';
import { getNextColorObj, getNextSFXObj, getNextShapeObj, getNextTextObj, startWithShapesOrText } from '../HelperFunctions';
import { useLockBodyScroll } from "@uidotdev/usehooks";
import { toHHMMSS } from '../HelperFunctions';
import './TrainingModal.css';

interface Props {
    userSelectionsMap : Map<string, string[]>;
    duration : number;
    frequency : number;
    isTrainingModeActive : boolean;
    setIsTrainingModeActive : (arg0 : boolean) => void;
    isDurationVisible : boolean;
    isFrequencyVisible : boolean;
    isUniqueEnabled : boolean;
}

export default function TrainingModal(props : Props) {
    useLockBodyScroll();
    
    const [ timeRemaining, setTimeRemaining ] = useState(props.duration);
    const [ timeUntilNextStimulus, setTimeUntilNextStimulus ] = useState(props.frequency);
    const [ displayShapesOrText, setDisplayShapesOrText ] = useState(startWithShapesOrText(props.userSelectionsMap));
    const [ trainingModeState, setTrainingModeState ] = useState<TrainingModeType>(
        {
            colorObj : getNextColorObj(props.userSelectionsMap, undefined, props.isUniqueEnabled),
            shapeObj : getNextShapeObj(props.userSelectionsMap, undefined, props.isUniqueEnabled),
            textObj :  getNextTextObj(props.userSelectionsMap, undefined, props.isUniqueEnabled),
            sfxObj : getNextSFXObj(props.userSelectionsMap, undefined, props.isUniqueEnabled),
        }
    )

    useEffect(() => {
        if (timeRemaining === 0) {
            props.setIsTrainingModeActive(false);
            return;
        }

        if (timeUntilNextStimulus === 0) {
            const nextStimulusCategory = getNextStimulusCategory();

            updateTrainingModeState(nextStimulusCategory);

            setTimeUntilNextStimulus(props.frequency);
        }

        const interval = setInterval(() => {
            setTimeRemaining(timeRemaining - 1);
            setTimeUntilNextStimulus(timeUntilNextStimulus - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [timeRemaining, timeUntilNextStimulus]);

    const getNextStimulusCategory = () => {
        const stimulusCategoryList = [...props.userSelectionsMap.keys()];
        const nextStimulusCategory = stimulusCategoryList[Math.floor(Math.random() * stimulusCategoryList.length)];

        return nextStimulusCategory;
    }

    const updateTrainingModeState = (nextStimulusCategory : string) => {
        if (nextStimulusCategory === undefined) {
            throw new Error("An invalid stimulus category was selected!");
        }

        switch (nextStimulusCategory) {
            case "Colors":
                const nextColorObj = getNextColorObj(props.userSelectionsMap, trainingModeState.colorObj.name, props.isUniqueEnabled);

                setTrainingModeState({
                    colorObj : nextColorObj,
                    shapeObj : trainingModeState.shapeObj,
                    textObj : trainingModeState.textObj,
                    sfxObj : trainingModeState.sfxObj,
                });
                break;

            case "Shapes":
                const nextShapeObj = getNextShapeObj(props.userSelectionsMap, trainingModeState.shapeObj.name, props.isUniqueEnabled)

                setDisplayShapesOrText("Shapes");
                setTrainingModeState({
                    colorObj : trainingModeState.colorObj,
                    shapeObj : nextShapeObj,
                    textObj : trainingModeState.textObj,
                    sfxObj : trainingModeState.sfxObj,
                });
                break;

            case "Text":
                const nextTextObj = getNextTextObj(props.userSelectionsMap, trainingModeState.textObj.name, props.isUniqueEnabled)

                setDisplayShapesOrText("Text");
                setTrainingModeState({
                    colorObj : trainingModeState.colorObj,
                    shapeObj : trainingModeState.shapeObj,
                    textObj : nextTextObj,
                    sfxObj : trainingModeState.sfxObj,
                });
                break;

            case "Sound Effects":
                const nextSFXObj = getNextSFXObj(props.userSelectionsMap, trainingModeState.sfxObj.name, props.isUniqueEnabled)

                setTrainingModeState({
                    colorObj : trainingModeState.colorObj,
                    shapeObj : trainingModeState.shapeObj,
                    textObj : trainingModeState.textObj,
                    sfxObj : nextSFXObj,
                });

                new Audio(trainingModeState.sfxObj.audioFileName).play();
                
                break;
        }      
    }

    return (
        <div className="Modal-Container" style={{ background : trainingModeState.colorObj.colorCode }}>
            <div className="Duration-Frequency-Container">
                { 
                    props.isDurationVisible && 
                        <div className="Duration-Frequency-Text">
                            Time Remaining: { toHHMMSS(timeRemaining) }
                        </div>
                }
                { 
                    props.isFrequencyVisible && 
                        <div className="Duration-Frequency-Text">
                            Time Until Next Stimulus: { toHHMMSS(timeUntilNextStimulus) }
                        </div>
                }
            </div>
            {
                (displayShapesOrText === "Shapes" && trainingModeState.shapeObj.shapeElement) || 
                (displayShapesOrText === "Text" && trainingModeState.textObj.textElement)
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

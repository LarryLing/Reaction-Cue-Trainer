import { CrossIcon } from '../Icons/Icons';
import './TrainingModal.css';

interface Props {
    userSelectionsMap : Map<string, string[]>;
    duration : number;
    frequency : number;
    isTrainingModeActive : boolean;
    setIsTrainingModeActive : (arg0 : boolean) => void;
}

export default function TrainingModal(props : Props) {
    return (
        <div className="Modal-Container">
            Test Modal
            <CrossIcon 
                className="Exit-Modal-Button" 
                onClick={ () => props.setIsTrainingModeActive(false) }
                width={ 50 }
                height={ 50 }
                fill="var(--primary)"/>
        </div>
    )
}

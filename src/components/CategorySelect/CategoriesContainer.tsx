import CategoryItem from './CategoryItem'
import { EyeIcon, SpeakerIcon } from '../Icons/Icons'
import './CategoriesContainer.css'

interface Props {
    stimulusCategory : string;
    setStimulusCategory : (arg0 : string) => void;
}

export default function CategoriesContainer(props : Props) {
    return (
        <div className="Categories-Container">
            <CategoryItem
                title="Visual" 
                svg={ <EyeIcon height={ 29 } width={ 29 } fill="none" stroke={ props.stimulusCategory === "Visual" ? "white" : "var(--primary)" }/> }
                isSelected={ props.stimulusCategory === "Visual" } 
                onShow={ () => props.setStimulusCategory("Visual") }/>
            <CategoryItem
                title="Audio" 
                svg={ <SpeakerIcon height={ 29 } width={ 29 } fill="none" stroke={ props.stimulusCategory === "Audio" ? "white" : "var(--primary)" }/> }
                isSelected={ props.stimulusCategory === "Audio" } 
                onShow={ () => props.setStimulusCategory("Audio") }/>
        </div>
    )
}

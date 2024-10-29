import './CategoriesContainer.css'
import Category from './Category'
import { EyeIcon, SpeakerIcon } from '../Icons/Icons'

interface Props {
    displayCategory : string;
    setDisplayCategory : (arg0 : string) => void;
}

export default function CategoriesContainer(props : Props) {
    return (
        <div className="Categories-Container">
            <Category
                title="Visual" 
                svg={ <EyeIcon style={ {stroke: props.displayCategory === "Visual" ? "white" : "var(--primary)"} } height={ 29 } width={ 29 } fill="none"/> }
                isActive={ props.displayCategory === "Visual" } 
                onShow={ () => props.setDisplayCategory("Visual") }/>
            <Category
                title="Audio" 
                svg={ <SpeakerIcon style={ {stroke: props.displayCategory === "Audio" ? "white" : "var(--primary)"} } height={ 29 } width={ 29 } fill="none"/> }
                isActive={ props.displayCategory === "Audio" } 
                onShow={ () => props.setDisplayCategory("Audio") }/>
        </div>
    )
}

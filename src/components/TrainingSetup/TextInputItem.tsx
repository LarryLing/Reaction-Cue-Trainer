import { ChangeEvent } from 'react'
import './TextInputItem.css'

interface Props {
    identifier : string;
    onChange : (arg0 : ChangeEvent<HTMLInputElement>) => void;
    onBlur : (arg0 : ChangeEvent<HTMLInputElement>) => void;
    textValue : string;
}

export default function TextInputItem(props : Props) {
    return (
        <div className="Text-Input-Subcontainer">
            <label className="Content-Title" htmlFor={ props.identifier }>{ props.identifier }</label>
            <input 
                className="Text-Input-Setup"
                type="text" 
                id={ props.identifier }
                name={ props.identifier }
                onChange={ (e) => props.onChange(e) }
                onBlur={ (e) => props.onBlur(e) }
                value={ props.textValue }/>
        </div>
    )
}

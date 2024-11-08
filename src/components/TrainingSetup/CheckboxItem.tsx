import './CheckboxItem.css'

interface Props {
    identifier : string;
    booleanValue : boolean;
    onChange : ((arg0 : boolean) => void);
}

export default function CheckboxItem(props : Props) {
    return (
        <div className="Checkbox-Subcontainer">
            <label className="Content-Title" htmlFor={ props.identifier }>{ props.identifier }</label>
            <input 
                className="Checkbox"
                type="checkbox" 
                id={ props.identifier }
                name={ props.identifier }
                onChange={ () => props.onChange(!props.booleanValue) }/>
        </div>
    )
}

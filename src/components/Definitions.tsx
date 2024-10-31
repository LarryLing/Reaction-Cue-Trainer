import { ReactElement }  from 'react'
import { Circle, Ellipse, Heart, Hexagon, Octagon, Pentagon, Rectangle, Square, Star } from './Icons/Shapes';
import OptionsContainer from './CueSettings/OptionsContainer';
import TextInputContainer from './CueSettings/TextInputContainer';

export type AccordionItemContent = {
    id : number;
    title : string;
    content : ReactElement;
}

export type Option = {
    optionName : string;
    backgroundColor : string;
    outlineColor : string;
    userSelectionsMapKey : string;
    content? : ReactElement;
}

export type UserSelectionsType = {
    userSelectionsMap : Map<string, string[]>;
    setUserSelectionsMap : (arg0 : Map<string, string[]>) => void;
}

export type TimingsType = {
    duration : number;
    setDuration : (arg0 : number) => void;
    frequency : number;
    setFrequency : (arg0 : number) => void;
}

export const ColorOptionsList : Option[] = [
    {
        optionName : "Red",
        backgroundColor : "red",
        outlineColor : "#AE0707",
        userSelectionsMapKey : "Colors",
    },
    {
        optionName : "Orange",
        backgroundColor : "orange",
        outlineColor : "#EC6F09",
        userSelectionsMapKey : "Colors",
    },
    {
        optionName : "Yellow",
        backgroundColor : "yellow",
        outlineColor : "#D1C215",
        userSelectionsMapKey : "Colors",
    },
    {
        optionName : "Green",
        backgroundColor : "green",
        outlineColor : "#1A5D01",
        userSelectionsMapKey : "Colors",
    },
    {
        optionName : "Blue",
        backgroundColor : "#0842FE",
        outlineColor : "#012AB2",
        userSelectionsMapKey : "Colors",
    },
    {
        optionName : "Pink",
        backgroundColor : "#F58CFF",
        outlineColor : "#F155FF",
        userSelectionsMapKey : "Colors",
    },
    {
        optionName : "Purple",
        backgroundColor : "#920DFF",
        outlineColor : "#6101B0",
        userSelectionsMapKey : "Colors",
    },
    {
        optionName : "White",
        backgroundColor : "white",
        outlineColor : "#DEDEDE",
        userSelectionsMapKey : "Colors",
    },
    {
        optionName : "Black",
        backgroundColor : "#3B3B3B",
        outlineColor : "black",
        userSelectionsMapKey : "Colors",
    },
]

export const ShapeOptionsList : Option[] = [
    {
        optionName : "Circle",
        backgroundColor : "white",
        outlineColor : "var(--primary)",
        userSelectionsMapKey : "Shapes",
        content : <Circle fill="var(--primary)" stroke="var(--primary)" width={ 60 } height={ 60 }/>,
    },
    {
        optionName : "Ellipse",
        backgroundColor : "white",
        outlineColor : "var(--primary)",
        userSelectionsMapKey : "Shapes",
        content : <Ellipse fill="var(--primary)" stroke="var(--primary)" width={ 60 } height={ 60 }/>,
    },
    {
        optionName : "Square",
        backgroundColor : "white",
        outlineColor : "var(--primary)",
        userSelectionsMapKey : "Shapes",
        content : <Square fill="var(--primary)" stroke="var(--primary)" width={ 60 } height={ 60 }/>,
    },
    {
        optionName : "Rectangle",
        backgroundColor : "white",
        outlineColor : "var(--primary)",
        userSelectionsMapKey : "Shapes",
        content : <Rectangle fill="var(--primary)" stroke="var(--primary)" width={ 60 } height={ 60 }/>,
    },
    {
        optionName : "Pentagon",
        backgroundColor : "white",
        outlineColor : "var(--primary)",
        userSelectionsMapKey : "Shapes",
        content : <Pentagon fill="var(--primary)" stroke="var(--primary)" width={ 60 } height={ 60 }/>,
    },
    {
        optionName : "Hexagon",
        backgroundColor : "white",
        outlineColor : "var(--primary)",
        userSelectionsMapKey : "Shapes",
        content : <Hexagon fill="var(--primary)" stroke="var(--primary)" width={ 60 } height={ 60 }/>,
    },
    {
        optionName : "Octagon",
        backgroundColor : "white",
        outlineColor : "var(--primary)",
        userSelectionsMapKey : "Shapes",
        content : <Octagon fill="var(--primary)" stroke="var(--primary)" width={ 60 } height={ 60 }/>,
    },
    {
        optionName : "Star",
        backgroundColor : "white",
        outlineColor : "var(--primary)",
        userSelectionsMapKey : "Shapes",
        content : <Star fill="var(--primary)" stroke="var(--primary)" width={ 60 } height={ 60 }/>,
    },
    {
        optionName : "Heart",
        backgroundColor : "white",
        outlineColor : "var(--primary)",
        userSelectionsMapKey : "Shapes",
        content : <Heart fill="var(--primary)" stroke="var(--primary)" width={ 60 } height={ 60 }/>,
    },
]

export const VisualAccordionItemsList : AccordionItemContent[] = [
    {
        id : 1,
        title : "Colors",
        content : 		
            <div className="Settings-Container">
                <OptionsContainer
                    prompt="Select Colors"
                    optionsList={ColorOptionsList}/>
		    </div>
    },
    {
        id : 2,
        title : "Shapes",
        content : 
            <div className="Settings-Container">
                <OptionsContainer
                    prompt="Select Shapes"
                    optionsList={ShapeOptionsList}/>
            </div>
    },
    {
        id : 3,
        title : "Text",
        content : 
            <div className="Settings-Container">
                <TextInputContainer 
                    prompt="Enter Text" 
                    identifier="Text"
                    userSelectionsMapKey="Text"
                    placeholderText="ie: example, text, 1, 2, 3 - 5"/>
            </div>
    },
];

export const AudioAccordionItemsList : AccordionItemContent[] = [
    {
        id : 1,
        title : "Speech",
        content :
            <div className="Settings-Container">
                Coming soon!
            </div>
    },
    {
        id : 2,
        title : "Sound Effects",
        content :
            <div className="Settings-Container">
                Coming soon!
            </div>
    },
];
import React, { ReactElement }  from 'react'
import { Circle, Ellipse, Heart, Hexagon, Octagon, Pentagon, Rectangle, Square, Star } from './Icons/Shapes';
import OptionsContainer from './CueSettings/OptionsContainer';
import UpdateSelectionsContainer from './CueSettings/UpdateSelectionsContainer';
import TextInputContainer from './CueSettings/TextInputContainer';

export type AccordionContent = {
    id : number;
    title : string;
    content : ReactElement;
}

export type Option = {
    name : string;
    primary : string;
    secondary : string;
    mapKey : string;
    content? : ReactElement;
}

export type SelectedCuesType = {
    selectedCuesMap : Map<string, string[]>;
    setSelectedCuesMap : (arg0: Map<string, string[]>) => void;
}

export type TimingsType = {
    duration : number;
    setDuration : (arg0 : number) => void;
    frequency : number;
    setFrequency : (arg0 : number) => void;
}

export const colors : Option[] = [
    {
        name : "Red",
        primary : "red",
        secondary : "#AE0707",
        mapKey : "Colors",
    },
    {
        name : "Orange",
        primary : "orange",
        secondary : "#EC6F09",
        mapKey : "Colors",
    },
    {
        name : "Yellow",
        primary : "yellow",
        secondary : "#D1C215",
        mapKey : "Colors",
    },
    {
        name : "Green",
        primary : "green",
        secondary : "#1A5D01",
        mapKey : "Colors",
    },
    {
        name : "Blue",
        primary : "#0842FE",
        secondary : "#012AB2",
        mapKey : "Colors",
    },
    {
        name : "Pink",
        primary : "#F58CFF",
        secondary : "#F155FF",
        mapKey : "Colors",
    },
    {
        name : "Purple",
        primary : "#920DFF",
        secondary : "#6101B0",
        mapKey : "Colors",
    },
    {
        name : "White",
        primary : "white",
        secondary : "#DEDEDE",
        mapKey : "Colors",
    },
    {
        name : "Black",
        primary : "#3B3B3B",
        secondary : "black",
        mapKey : "Colors",
    },
]

export const shapes : Option[] = [
    {
        name : "Circle",
        primary : "white",
        secondary : "var(--primary)",
        mapKey : "Shapes",
        content : <Circle fill="var(--primary)" stroke="var(--primary)" width={ 60 } height={ 60 }/>,
    },
    {
        name : "Ellipse",
        primary : "white",
        secondary : "var(--primary)",
        mapKey : "Shapes",
        content : <Ellipse fill="var(--primary)" stroke="var(--primary)" width={ 60 } height={ 60 }/>,
    },
    {
        name : "Square",
        primary : "white",
        secondary : "var(--primary)",
        mapKey : "Shapes",
        content : <Square fill="var(--primary)" stroke="var(--primary)" width={ 60 } height={ 60 }/>,
    },
    {
        name : "Rectangle",
        primary : "white",
        secondary : "var(--primary)",
        mapKey : "Shapes",
        content : <Rectangle fill="var(--primary)" stroke="var(--primary)" width={ 60 } height={ 60 }/>,
    },
    {
        name : "Pentagon",
        primary : "white",
        secondary : "var(--primary)",
        mapKey : "Shapes",
        content : <Pentagon fill="var(--primary)" stroke="var(--primary)" width={ 60 } height={ 60 }/>,
    },
    {
        name : "Hexagon",
        primary : "white",
        secondary : "var(--primary)",
        mapKey : "Shapes",
        content : <Hexagon fill="var(--primary)" stroke="var(--primary)" width={ 60 } height={ 60 }/>,
    },
    {
        name : "Octagon",
        primary : "white",
        secondary : "var(--primary)",
        mapKey : "Shapes",
        content : <Octagon fill="var(--primary)" stroke="var(--primary)" width={ 60 } height={ 60 }/>,
    },
    {
        name : "Star",
        primary : "white",
        secondary : "var(--primary)",
        mapKey : "Shapes",
        content : <Star fill="var(--primary)" stroke="var(--primary)" width={ 60 } height={ 60 }/>,
    },
    {
        name : "Heart",
        primary : "white",
        secondary : "var(--primary)",
        mapKey : "Shapes",
        content : <Heart fill="var(--primary)" stroke="var(--primary)" width={ 60 } height={ 60 }/>,
    },
]

export const visualContent : AccordionContent[] = [
    {
        id : 1,
        title : "Colors",
        content : 		
            <div className="Settings-Container">
                <OptionsContainer
                    prompt="Select Colors"
                    optionList={colors}/>
		    </div>
    },
    {
        id : 2,
        title : "Shapes",
        content : 
            <div className="Settings-Container">
                <OptionsContainer
                    prompt="Select Shapes"
                    optionList={shapes}/>
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
                    mapKey="Text"
                    placeholderText="ie: example, text, 1, 2, 3 - 5"
                    defaultText=""/>
            </div>
    },
];

export const audioContent : AccordionContent[] = [
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
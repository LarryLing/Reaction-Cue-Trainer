import { ReactElement }  from 'react'
import { Circle, Ellipse, Heart, Hexagon, Octagon, Pentagon, Rectangle, Square, Star } from './Icons/Shapes';
import OptionsContainer from './CueSettings/OptionsContainer';
import TextInputItem from './CueSettings/TextInputItem';

export type AccordionItemContentType = {
    id : number;
    title : string;
    content : ReactElement;
}

export type OptionItemRenderInfoType = {
    backgroundColor : string;
    outlineColor : string;
    userSelectionsMapKey : string;
    content? : ReactElement;
}

export type UserSelectionsContextType = {
    userSelectionsMap : Map<string, string[]>;
    setUserSelectionsMap : (arg0 : Map<string, string[]>) => void;
}

export type ColorObj = {
    name : string;
    colorCode : string;
}

export type ShapeObj = {
    name : string;
    shapeElement : ReactElement;
}

export type TextObj = {
    name : string;
    textElement : ReactElement;
}

export type TrainingModeType = {
    colorObj : ColorObj;
    shapeObj : ShapeObj;
    textObj : TextObj;
    speech : string;
    sfx : string;
}

export const ColorOptionsMap : Map<string, OptionItemRenderInfoType> = new Map([   
    [
        "Red", 
        {
            backgroundColor : "red",
            outlineColor : "#AE0707",
            userSelectionsMapKey : "Colors",
        },
    ],
    [
        "Orange",
        {
            backgroundColor : "orange",
            outlineColor : "#EC6F09",
            userSelectionsMapKey : "Colors",
        }
    ],
    [
        "Yellow",
        {
            backgroundColor : "yellow",
            outlineColor : "#D1C215",
            userSelectionsMapKey : "Colors",
        },
    ],
    [
        "Green",
        {
            backgroundColor : "green",
            outlineColor : "#1A5D01",
            userSelectionsMapKey : "Colors",
        },
    ], 
    [
        "Blue",
        {
            backgroundColor : "#0842FE",
            outlineColor : "#012AB2",
            userSelectionsMapKey : "Colors",
        },
    ],
    [
        "Pink",
        {
            backgroundColor : "#F58CFF",
            outlineColor : "#F155FF",
            userSelectionsMapKey : "Colors",
        },
    ],
    [   
        "Purple",
        {
            backgroundColor : "#920DFF",
            outlineColor : "#6101B0",
            userSelectionsMapKey : "Colors",
        },
    ],
    [
        "White",
        {
            backgroundColor : "white",
            outlineColor : "#DEDEDE",
            userSelectionsMapKey : "Colors",
        },
    ],
    [
        "Black",
        {
            backgroundColor : "#3B3B3B",
            outlineColor : "black",
            userSelectionsMapKey : "Colors",
        },
    ],
]);

export const ShapeOptionsMap : Map<string, OptionItemRenderInfoType> = new Map([
    [
        "Circle",
        {
            backgroundColor : "white",
            outlineColor : "var(--primary)",
            userSelectionsMapKey : "Shapes",
            content : <Circle fill="var(--primary)" stroke="var(--primary)"/>,
        },
    ],
    [
        "Ellipse",
        {
            backgroundColor : "white",
            outlineColor : "var(--primary)",
            userSelectionsMapKey : "Shapes",
            content : <Ellipse fill="var(--primary)" stroke="var(--primary)"/>,
        },
    ],
    [
        "Square",
        {
            backgroundColor : "white",
            outlineColor : "var(--primary)",
            userSelectionsMapKey : "Shapes",
            content : <Square fill="var(--primary)" stroke="var(--primary)"/>,
        },
    ],
    [
        "Rectangle",
        {
            backgroundColor : "white",
            outlineColor : "var(--primary)",
            userSelectionsMapKey : "Shapes",
            content : <Rectangle fill="var(--primary)" stroke="var(--primary)"/>,
        },
    ],
    [
        "Pentagon",
        {
            backgroundColor : "white",
            outlineColor : "var(--primary)",
            userSelectionsMapKey : "Shapes",
            content : <Pentagon fill="var(--primary)" stroke="var(--primary)"/>,
        },
    ],
    [
        "Hexagon",
        {
            backgroundColor : "white",
            outlineColor : "var(--primary)",
            userSelectionsMapKey : "Shapes",
            content : <Hexagon fill="var(--primary)" stroke="var(--primary)"/>,
        },
    ],
    [
        "Octagon",
        {
            backgroundColor : "white",
            outlineColor : "var(--primary)",
            userSelectionsMapKey : "Shapes",
            content : <Octagon fill="var(--primary)" stroke="var(--primary)"/>,
        },
    ],
    [
        "Star",
        {
            backgroundColor : "white",
            outlineColor : "var(--primary)",
            userSelectionsMapKey : "Shapes",
            content : <Star fill="var(--primary)" stroke="var(--primary)"/>,
        },
    ],
    [
        "Heart",
        {
            backgroundColor : "white",
            outlineColor : "var(--primary)",
            userSelectionsMapKey : "Shapes",
            content : <Heart fill="var(--primary)" stroke="var(--primary)"/>,
        },
    ]
]);

export const VisualAccordionItemsList : AccordionItemContentType[] = [
    {
        id : 1,
        title : "Colors",
        content : 		
            <div className="Settings-Container">
                <OptionsContainer
                    prompt="Select Colors"
                    optionMap={ColorOptionsMap}/>
		    </div>
    },
    {
        id : 2,
        title : "Shapes",
        content : 
            <div className="Settings-Container">
                <OptionsContainer
                    prompt="Select Shapes"
                    optionMap={ShapeOptionsMap}/>
            </div>
    },
    {
        id : 3,
        title : "Text",
        content : 
            <div className="Settings-Container">
                <TextInputItem 
                    prompt="Enter Text" 
                    identifier="Text"
                    userSelectionsMapKey="Text"
                    placeholderText="ie: example, text, 1, 2, 3, 4"/>
            </div>
    },
];

export const AudioAccordionItemsList : AccordionItemContentType[] = [
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
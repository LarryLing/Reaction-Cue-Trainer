import { ReactElement }  from 'react'
import { Circle, Ellipse, Heart, Hexagon, Octagon, Pentagon, Rectangle, Square, Star } from './Icons/Shapes';
import StimulusOptionsContainer from './StimulusSettings/StimulusOptionsContainer';
import StimulusTextInputContainer from './StimulusSettings/StimulusTextInputContainer';

export type AccordionItemContentType = {
    id : number;
    title : string;
    content : ReactElement;
}

export type OptionItemRenderInfoType = {
    backgroundColor : string;
    outlineColor : string;
    content? : ReactElement;
}

export type UserSelectionsContextType = {
    userSelectionsMap : Map<string, string[]>;
    setUserSelectionsMap : (arg0 : Map<string, string[]>) => void;
}

export type ColorObj = {
    name : string | undefined;
    colorCode : string;
}

export type ShapeObj = {
    name : string | undefined;
    shapeElement : ReactElement;
}

export type TextObj = {
    name : string | undefined;
    textElement : ReactElement;
}

export type SFXObj = {
    name : string | undefined;
    audioFileName : string | undefined;
}

export type TrainingModeType = {
    colorObj : ColorObj;
    shapeObj : ShapeObj;
    textObj : TextObj;
    sfxObj : SFXObj;
}

export const ColorOptionsMap : Map<string, OptionItemRenderInfoType> = new Map([   
    [
        "Red", 
        {
            backgroundColor : "red",
            outlineColor : "#AE0707",
        },
    ],
    [
        "Orange",
        {
            backgroundColor : "orange",
            outlineColor : "#EC6F09",
        }
    ],
    [
        "Yellow",
        {
            backgroundColor : "yellow",
            outlineColor : "#D1C215",
        },
    ],
    [
        "Green",
        {
            backgroundColor : "green",
            outlineColor : "#1A5D01",
        },
    ], 
    [
        "Blue",
        {
            backgroundColor : "#0842FE",
            outlineColor : "#012AB2",
        },
    ],
    [
        "Pink",
        {
            backgroundColor : "#F58CFF",
            outlineColor : "#F155FF",
        },
    ],
    [   
        "Purple",
        {
            backgroundColor : "#920DFF",
            outlineColor : "#6101B0",
        },
    ],
    [
        "White",
        {
            backgroundColor : "white",
            outlineColor : "#DEDEDE",
        },
    ],
    [
        "Black",
        {
            backgroundColor : "#3B3B3B",
            outlineColor : "black",
        },
    ],
]);

export const ShapeOptionsMap : Map<string, OptionItemRenderInfoType> = new Map([
    [
        "Circle",
        {
            backgroundColor : "white",
            outlineColor : "var(--primary)",
            content : <Circle fill="var(--primary)" stroke="var(--primary)"/>,
        },
    ],
    [
        "Ellipse",
        {
            backgroundColor : "white",
            outlineColor : "var(--primary)",
            content : <Ellipse fill="var(--primary)" stroke="var(--primary)"/>,
        },
    ],
    [
        "Square",
        {
            backgroundColor : "white",
            outlineColor : "var(--primary)",
            content : <Square fill="var(--primary)" stroke="var(--primary)"/>,
        },
    ],
    [
        "Rectangle",
        {
            backgroundColor : "white",
            outlineColor : "var(--primary)",
            content : <Rectangle fill="var(--primary)" stroke="var(--primary)"/>,
        },
    ],
    [
        "Pentagon",
        {
            backgroundColor : "white",
            outlineColor : "var(--primary)",
            content : <Pentagon fill="var(--primary)" stroke="var(--primary)"/>,
        },
    ],
    [
        "Hexagon",
        {
            backgroundColor : "white",
            outlineColor : "var(--primary)",
            content : <Hexagon fill="var(--primary)" stroke="var(--primary)"/>,
        },
    ],
    [
        "Octagon",
        {
            backgroundColor : "white",
            outlineColor : "var(--primary)",
            content : <Octagon fill="var(--primary)" stroke="var(--primary)"/>,
        },
    ],
    [
        "Star",
        {
            backgroundColor : "white",
            outlineColor : "var(--primary)",
            content : <Star fill="var(--primary)" stroke="var(--primary)"/>,
        },
    ],
    [
        "Heart",
        {
            backgroundColor : "white",
            outlineColor : "var(--primary)",
            content : <Heart fill="var(--primary)" stroke="var(--primary)"/>,
        },
    ]
]);

export const SFXOptionsMap : Map<string, OptionItemRenderInfoType> = new Map([
    [
        "Up",
        {
            backgroundColor : "white",
            outlineColor : "var(--primary)",
            content : <div style={{ fontWeight : "bold", color : "var(--primary)" }}>Up</div>
        },
    ],
    [
        "Down",
        {
            backgroundColor : "white",
            outlineColor : "var(--primary)",
            content : <div style={{ fontWeight : "bold", color : "var(--primary)" }}>Down</div>
        },
    ],
    [
        "Left",
        {
            backgroundColor : "white",
            outlineColor : "var(--primary)",
            content : <div style={{ fontWeight : "bold", color : "var(--primary)" }}>Left</div>
        },
    ],
    [
        "Right",
        {
            backgroundColor : "white",
            outlineColor : "var(--primary)",
            content : <div style={{ fontWeight : "bold", color : "var(--primary)" }}>Right</div>
        },
    ],
    [
        "Forward",
        {
            backgroundColor : "white",
            outlineColor : "var(--primary)",
            content : <div style={{ fontWeight : "bold", color : "var(--primary)" }}>Forward</div>
        },
    ],
    [
        "Backward",
        {
            backgroundColor : "white",
            outlineColor : "var(--primary)",
            content : <div style={{ fontWeight : "bold", color : "var(--primary)" }}>Backward</div>
        },
    ],
    [
        "Turn",
        {
            backgroundColor : "white",
            outlineColor : "var(--primary)",
            content : <div style={{ fontWeight : "bold", color : "var(--primary)" }}>Turn</div>
        },
    ],
    [
        "Beep",
        {
            backgroundColor : "white",
            outlineColor : "var(--primary)",
            content : <div style={{ fontWeight : "bold", color : "var(--primary)" }}>Beep</div>
        },
    ],
    [
        "Double Beep",
        {
            backgroundColor : "white",
            outlineColor : "var(--primary)",
            content : <div style={{ fontWeight : "bold", color : "var(--primary)" }}>Double Beep</div>
        },
    ],
]);

export const AccordionItemsList : AccordionItemContentType[] = [
    {
        id : 1,
        title : "Colors",
        content : 		
            <div className="Settings-Container">
                <StimulusOptionsContainer
                    prompt="Select Colors"
                    userSelectionsMapKey="Colors"
                    optionMap={ ColorOptionsMap }/>
		    </div>
    },
    {
        id : 2,
        title : "Shapes",
        content : 
            <div className="Settings-Container">
                <StimulusOptionsContainer
                    prompt="Select Shapes"
                    userSelectionsMapKey="Shapes"
                    optionMap={ ShapeOptionsMap }/>
            </div>
    },
    {
        id : 3,
        title : "Text",
        content : 
            <div className="Settings-Container">
                <StimulusTextInputContainer 
                    prompt="Enter Text" 
                    identifier="Text"
                    userSelectionsMapKey="Text"
                    placeholderText="ie: example, text, 1, 2, 3, 4"/>
            </div>
    },
    {
        id : 4,
        title : "Sound Effects",
        content :
            <div className="Settings-Container">
                <StimulusOptionsContainer
                    prompt="Select Sound Effects"
                    userSelectionsMapKey="Sound Effects"
                    optionMap={ SFXOptionsMap }/>
            </div>
    },
];
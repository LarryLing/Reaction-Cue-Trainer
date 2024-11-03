import { ColorOptionsMap } from './Definitions';

export function getSecondsFromHHMMSS(value : string) {
    const [ str1, str2, str3 ] = value.split(":");

    const val1 = Number(str1);
    const val2 = Number(str2);
    const val3 = Number(str3);

    if (!isNaN(val1) && isNaN(val2) && isNaN(val3)) {
        return val1;
    }

    if (!isNaN(val1) && !isNaN(val2) && isNaN(val3)) {
        return val1 * 60 + val2;
    }

    if (!isNaN(val1) && !isNaN(val2) && !isNaN(val3)) {
        return val1 * 60 * 60 + val2 * 60 + val3;
    }

    return 0;
}

export function toHHMMSS(secs : number | undefined) {
    if (secs == undefined) {
        throw Error("Input value is undefined!");
    }

    const secNum = parseInt(secs.toString(), 10);
    const hours = Math.floor(secNum / 3600);
    const minutes = Math.floor(secNum / 60) % 60;
    const seconds = secNum % 60;

    return [hours, minutes, seconds]
        .map((val) => (val < 10 ? `0${val}` : val))
        .filter((val, index) => val !== "00" || index > 0)
        .join(":")
        .replace(/^0/, "");
}

export function getNewColor(userSelectionsMap : Map<string, string[]>) {
    const userSelectionsMapKeys = [...userSelectionsMap.keys()];

    if (userSelectionsMapKeys.includes("Colors")) {
        const availableColors = userSelectionsMap.get("Colors");
        const randomSelectedColor =  availableColors?.[Math.floor(Math.random() * availableColors.length)]

        if (randomSelectedColor === undefined) {
            throw new Error("An invalid ColorOptionsMap key was randomly generated!")
        }

        const startingColor = ColorOptionsMap.get(randomSelectedColor)?.backgroundColor;

        if (startingColor === undefined) {
            throw new Error("An invalid starting color was selected!");
        }

        return startingColor;
        
    }
    
    return "white";
}
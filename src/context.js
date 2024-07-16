import { createContext } from "react";

export const myContext = createContext({
    isLight: false,
    setIsLight: ()=>{},
    hour: 0,
    setHour: ()=>{},
    minute: 0,
    setMinute: ()=>{},
    second: 0,
    setSecond: ()=>{},
    isStart: false,
    setIsStart: ()=>{},
    timeList: [],
    setTimeList: ()=>{},
});
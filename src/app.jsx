import React, { useState } from "react";
import Timer from "./timer";
import { myContext } from "./context";

const App = () => {
  const [isLight, setIsLight] = useState(true);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [isStart, setIsStart] = useState(false);
  const [timeList, setTimeList] = useState([]);
  const handleIsLight = () => {
    setIsLight(!isLight);
  };
  return (
    <>
      <myContext.Provider value={{isLight,setIsLight,hour,setHour,minute,setMinute,second,setSecond,isStart,setIsStart,timeList,setTimeList}}>
        <Timer handleDark={handleIsLight} />
      </myContext.Provider>
    </>
  );
};
export default App;

// import React, { useState, useEffect } from 'react';

// const Timer = ({ isLight, handleDark }) => {
//   const [hour, setHour] = useState(0);
//   const [minute, setMinute] = useState(0);
//   const [second, setSecond] = useState(0);
//   const [isStart, setIsStart] = useState(false);
//   const [timeList , setTimeList] = useState(["00:00:00"])
//   let intervalId = null;

//   const timeStart = () => {
//     if (!isStart) {
//       setIsStart(true);
//        intervalId = setInterval(() => {
//         setSecond(prevSecond => (prevSecond === 59 ? 0 : prevSecond + 1));
//         if (second === 59) {
//           setMinute(prevMinute => (prevMinute === 59 ? 0 : prevMinute + 1));
//         }
//         if (minute === 59) {
//           setHour(prevHour => prevHour + 1);
//         }
//       }, 1000);
//     }
//   };

//   const timeStop = () => {
//       clearInterval(intervalId);
//   };

//   const timeReset = () => {
//     setHour(0);
//     setMinute(0);
//     setSecond(0);
//     setIsStart(false);
//   };

//   const listTime = ()=>{
//     let fullTime = `${hour}:${minute}:${second}`
//     setTimeList([...timeList,fullTime]);
//     console.log(timeList);
//   }

//   useEffect(() => {
//     if(!isStart){
//       clearInterval(intervalId)
//     }
//     return () => clearInterval(intervalId);
//   }, [intervalId,isStart]);

//   return (
//     <>
//       <section className="bg" style={{ background: isLight ? "#57A6A1" : "#240750" }}>
//         <section className="timer-sec" style={{ background: isLight ? "#577B8D" : "#344C64" }}>
//           <div className="timer-container" onClick={listTime}>
//             <div style={{ background: isLight ? "#344C64" : "#577B8D" }} className="time-item">
//               <h1>{hour.toString().padStart(2, '0')}</h1>
//               <h4>Hour</h4>
//             </div>
//             <div style={{ background: isLight ? "#344C64" : "#577B8D" }} className="time-item">
//               <h1>{minute.toString().padStart(2, '0')}</h1>
//               <h4>Minute</h4>
//             </div>
//             <div style={{ background: isLight ? "#344C64" : "#577B8D" }} className="time-item">
//               <h1>{second.toString().padStart(2, '0')}</h1>
//               <h4>Second</h4>
//             </div>
//           </div>
//           <div className="time-btns">
//             <button onClick={timeStart}>Start</button>
//             <button onClick={timeStop}>Stop</button>
//             <button onClick={timeReset}>Reset</button>
//             <button onClick={handleDark}>{isLight ? "Dark" : "Light"}</button>
//           </div>
//         </section>
//         <section style={{ background: isLight ? "#577B8D" : "#344C64" }} className="timer-sec timer-list">
//           <TimerList timeList={timeList} isLight={isLight}/>
//         </section>
//       </section>
//     </>
//   );
// };
import { myContext } from "./context";
import TimerList from "./timerList";
import React from "react";

class Timer extends React.Component {
    constructor(){
        super();
        this.intervalId = null
    }
    static contextType = myContext;
    timeStart = ()=>{
        if(this.context.isStart === false){
            this.context.setIsStart(true)
            this.intervalId = setInterval(()=>{
                this.context.setSecond(this.context.second + 1)
                if(this.context.second === 59){
                    this.context.setSecond(0)
                    this.context.setMinute(this.context.minute + 1)
                }
                if(this.context.minute === 59){
                    this.context.setMinute(0)
                    this.context.setHour(this.context.hour + 1)
                }
            },1000)
        }
    }
    timeStop = ()=>{
        clearInterval(this.intervalId);
    }
    timeReset = ()=>{
        const {setSecond ,setMinute ,setHour ,setIsStart ,setTimeList} = this.context;
        setSecond(0)
        setMinute(0)
        setHour(0)
        setIsStart(false)
        setTimeList([])
        clearInterval(this.intervalId);
    }
    listTime = () => {
      const { hour, minute, second, timeList } = this.context;
      let fullTime = `${hour <= 9 ? "0" + hour : hour}:${minute <= 9 ? "0" + minute : minute}:${second <= 9 ? "0" + second : second}`;
      this.context.setTimeList([...timeList, fullTime]);
    };
    render(){
        return(
            <>
                <section className="bg" style={{background: this.context.isLight ? "#57A6A1" : "#240750"}}>
                    <section className="timer-sec" style={{background: this.context.isLight ? "#577B8D" : "#344C64"}}>
                        <div className="timer-container"  onClick={this.listTime }>
                            <div style={{background: this.context.isLight ? "#344C64" : "#577B8D"}} className="time-item">
                                <h1>{this.context.hour <= 9 ? "0" + this.context.hour : this.context.hour}</h1>
                                <h4>Hour</h4>
                            </div>
                            <div style={{background: this.context.isLight ? "#344C64" : "#577B8D"}} className="time-item">
                                <h1>{this.context.minute <= 9 ? "0" + this.context.minute : this.context.minute}</h1>
                                <h4>Minute</h4>
                            </div>
                            <div style={{background: this.context.isLight ? "#344C64" : "#577B8D"}} className="time-item">
                                <h1>{this.context.second <= 9 ? "0" + this.context.second : this.context.second}</h1>
                                <h4>Second</h4>
                            </div>
                        </div>
                        <div className="time-btns">
                            <button style={{background: this.context.isLight ? "#005B41" : "#008170"}} onClick={this.timeStart}>Start</button>
                            <button style={{background: this.context.isLight ? "#005B41" : "#008170"}} onClick={this.timeStop}>Stop</button>
                            <button style={{background: this.context.isLight ? "#005B41" : "#008170"}} onClick={this.timeReset}>Reset</button>
                            <button style={{background: this.context.isLight ? "#005B41" : "#008170"}} onClick={this.props.handleDark}>{this.context.isLight ? "Dark" : "Light"}</button>
                        </div>
                    </section>
                    <section style={{background: this.context.isLight ? "#577B8D" : "#344C64",display: this.context.timeList.length === 0 ? "none" : "block"}} className="timer-sec timer-list">
                      <TimerList timeList={this.context.timeList}/>
                    </section>
                </section>
            </>
        )
    }
}
export default Timer;
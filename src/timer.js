import React from "react";

class Timer extends React.Component {
    constructor(){
        super();
        this.state = {
            hour : 0,
            minute : 0,
            second : 0,
            isStart : false,
        }
        this.intervalId = null
    }
    timeStart = ()=>{
        if(this.state.isStart === false){
            this.setState({
                isStart : true
            })
            this.intervalId = setInterval(()=>{
                this.setState({
                    second : this.state.second + 1
                })
                if(this.state.second === 60){
                    this.setState({
                        second : 0,
                        minute : this.state.minute + 1
                    })
                }
                if(this.state.minute === 60){
                    this.setState({
                        minute : 0,
                        hour : this.state.hour + 1
                    })
                }
            },1000)
        }
    }
    timeStop = ()=>{
        clearInterval(this.intervalId);
    }
    timeReset = ()=>{
        this.setState({
            hour : 0,
            minute : 0,
            second : 0,
            isStart : false,
        })
    }
    render(){
        return(
            <>
                <section className="timer-sec">
                    <div className="timer-container">
                        <div className="time-item">
                            <h1>{this.state.hour <= 9 ? "0" + this.state.hour : this.state.hour}</h1>
                            <h4>Hour</h4>
                        </div>
                        <div className="time-item">
                            <h1>{this.state.minute <= 9 ? "0" + this.state.minute : this.state.minute}</h1>
                            <h4>Minute</h4>
                        </div>
                        <div className="time-item">
                            <h1>{this.state.second <= 9 ? "0" + this.state.second : this.state.second}</h1>
                            <h4>Second</h4>
                        </div>
                    </div>
                    <div className="time-btns">
                        <button onClick={this.timeStart}>Start</button>
                        <button onClick={this.timeStop}>Stop</button>
                        <button onClick={this.timeReset}>Reset</button>
                    </div>
                </section>
            </>
        )
    }
}
export default Timer;
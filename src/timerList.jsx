import { useContext } from "react";
import { myContext } from "./context";

const TimerList = (props) => {
  const context = useContext(myContext);
  const deleteTime = (e)=>{
    context.setTimeList(context.timeList.filter(item=> item !== e.target.innerHTML))
  }
  return (
    <>
      <section className="times-container">
        {props.timeList.map((item, index) => {
          return (
            <h4
              className="time-list-item"
              id={index}
              key={index}
              onClick={deleteTime}
            >
              {item}
            </h4>
          );
        })}
      </section>
    </>
  );
};
export default TimerList;

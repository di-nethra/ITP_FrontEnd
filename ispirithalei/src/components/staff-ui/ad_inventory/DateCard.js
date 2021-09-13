import React ,{ useState } from "react";
import "../ad_inventory/datecard.css"

function DateCard() {
   
var date = new Date();
var today = date.getDate() + " - " + (date.getMonth()+1) + " - " + date.getFullYear();

setInterval(updateTime, 1000);

  const now = new Date().toLocaleTimeString();

  const [time, setTime] = useState(now);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

    return (
        <div className = "cardFloat" >
            <div className = "card">
                <h1>{today}</h1>
                 <h3>{time}</h3> 
            </div>
        </div>
    );

}

export default DateCard
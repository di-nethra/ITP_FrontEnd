import React ,{ useState } from "react";
import "../ad_inventory/datecard.css"

function DateCard() {
   
var date = new Date();
var today = date.getDate() + " - " + (date.getMonth()+1) + " - " + date.getFullYear();
const newTime = new Date().toLocaleTimeString();

   return (
        <div className = "cardFloat" >
            <div className = "card">
                <h1>{today}</h1>
                 <h3>{newTime}</h3> 
            </div>
        </div>
    );

}

export default DateCard
import React from "react";
import "../ad_inventory/datecard.css"

var date = new Date();
var today = date.getDate() + " - " + (date.getMonth()+1) + " - " + date.getFullYear();
var time = date.getHours() + " : " + date.getMinutes();

function DateCard() {
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
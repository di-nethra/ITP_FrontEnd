import React from "react";
import paymentCreditService from "../../../services/paymentCredit.service";
import { useState } from "react";

function CreditCardPayments() {
  // const value = paymentCreditService.getAll().then((response) => {
  //   console.log(response.data[3].name);
  //   const name = response.data[3].name;
  //   return name;
  // });

  // var state = useState();
  // state = {
  //   credit: [],
  // };

  function showCredit() {
    paymentCreditService
      .getAll()
      .then((response) => {
        const data = response.data;

        // console.log(state);
      })
      .catch((err) => {
        alert("error is show credit");
      });
  }

  return (
    <div>
      <h1>hello credit</h1>
      <button onClick={showCredit}></button>
    </div>
  );
}

export default CreditCardPayments;

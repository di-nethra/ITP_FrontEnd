import React from "react";
import paymentCreditService from "../../../services/paymentCredit.service";
import { useState } from "react";

function CreditCardPayments() {
  // const value = paymentCreditService.getAll().then((response) => {
  //   console.log(response.data[3].name);
  //   const name = response.data[3].name;
  //   return name;
  // });

  // state = {
  //   credit: [],
  // };

  function showCredit() {
    paymentCreditService
      .getAll()
      .then((response) => {
        const data = response.data;
        this.setState({ credit: data });
        // console.log(state);
      })
      .catch((err) => {
        alert("error is show credit");
      });
  }
  return (
    <div>
      <h1>{showCredit}</h1>
    </div>
  );
}

export default CreditCardPayments;

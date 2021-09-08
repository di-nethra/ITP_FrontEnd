import React from "react";
import paymentCreditService from "../../../services/paymentCredit.service";

function CreditCardPayments() {
  paymentCreditService.getAll().then((response) => {
    console.log(response.data[3].name);
    const name = response.data[3].name;
    return name;
  });
  const value = CreditCardPayments();
  const name = "anjana";
  return (
    <div>
      <h1>{value}</h1>
    </div>
  );
}

export default CreditCardPayments;

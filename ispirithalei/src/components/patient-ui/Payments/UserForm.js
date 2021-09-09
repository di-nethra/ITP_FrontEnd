import React, { Component } from "react";
import Checkout from "../../../pages/patient-ui/Checkout";
import CreditCardPage from "../../../pages/patient-ui/CreditCardPage";

export class UserForm extends Component {
  state = {
    step: 1,
    email: "",
    cardNumber: "",
    yearMonth: "",
    CVC: "",
    nameOnTheCard: "",
    country: "",
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { email, cardNumber, yearMonth, nameOnTheCard, country, CVC } =
      this.state;
    const values = {
      email,
      cardNumber,
      yearMonth,
      nameOnTheCard,
      country,
      CVC,
    };
    switch (step) {
      case 1: {
        return (
          <CreditCardPage
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      }
      case 2: {
        return (
          <Checkout
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      }
    }
  }
}

export default UserForm;

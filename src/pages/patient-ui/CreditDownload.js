import { render } from "@testing-library/react";
import React, { Component } from "react";
import ReactToPrint from "react-to-print";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import invoice from "../../assets/images/invoice.svg";
import IspirithaleBlueLogo from "../../assets/2.png";
import "./CreditDownload.css";

export class Example extends React.PureComponent {
  render() {
    const sendData = {
      name: this.props.values.email,
    };
    // console.log("download eka:" + state);
    // console.log("props value tika " + this.props.values.email);
    const email = this.props.values.email;

    return (
      <div>
        <ReactToPrint
          trigger={() => {
            return (
              <div>
                <form noValidate className="text">
                  <img src={invoice} alt="invoiceimage" />

                  <Card>
                    <CardContent>
                      <Button
                        variant="contained"
                        color="primary"
                        className="Paybutton"
                      >
                        Download as PDF
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        className="Paybutton"
                      >
                        Download as JPG
                      </Button>
                      <h1>{email}</h1>
                      {/* <button
                        onClick={() => {
                          this.alertMessage();
                        }}
                      >
                        click
                      </button> */}
                      <ComponentToPrint
                        className="bill"
                        ref={(el) => (this.componentRef = el)}
                      />
                    </CardContent>
                  </Card>
                </form>
              </div>
            );
          }}
          content={() => this.componentRef}
        />
      </div>
    );
  }
}

export class ComponentToPrint extends React.PureComponent {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     value: this.props.location.state,
  //   };
  // }
  // alertMessage() {
  //   console.log(this.props.location.state);
  // }

  render() {
    // console.log("print tika " + this.props.values.email);

    return (
      <div>
        <Card className="bill">
          <CardContent>
            <img
              src={IspirithaleBlueLogo}
              alt="70"
              className="blueispirithale"
            />
            <h3 className="invoiceText">
              Invoice
              <hr></hr>
            </h3>

            <h1 className="price">Rs.0.00</h1>
          </CardContent>
        </Card>
      </div>
    );
  }
}

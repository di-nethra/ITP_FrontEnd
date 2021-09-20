import React from "react";
import CreditPdf from "./CreditPdf";

export class NewInvoice extends React.PureComponent {
  render() {
    // console.log(this.props.values);
    // const emai = this.props.values.email;
    // console.log("checkout:" + emai);

    // paymentCreditService
    //   .get("6143331afa82ae1d3c6da745")
    //   .then((Response) => {
    //     console.log("invoice responce eka", Response.data);
    //     const newData=Response.data;
    //   })
    //   .catch((e) => {
    //     console.log("new invoice error:", e);
    //   });
    //   <Example email={emai} />;

    return (
      <div>
        {/* <PDF
          title={this.state.title}
          content={this.state.content}
          image={this.state.image}
        /> */}
        <CreditPdf
          email={this.props.values.email}
          name={this.props.values.nameOnTheCard}
        />
      </div>
    );
  }
}

export default NewInvoice;

import React from "react";
import "./styles.css";
import mobilePay from "./Mobilepay.png";
import creditCard from "./CreditCard.png";
import stripePay from "./STRIPEPay.png";
function PaymentOptions() {
  return (
    <div>
      {/* navbar start */}
      <div className="container ">
        <nav className="navbar navbar-expand-sm bg-light navbar-light ">
          <ul className="navbar-nav">
            <div className="row">
              <div className="col-lg-3">
                <li className="nav-item">
                  <a className="nav-link text-nowrap font-weight-bold" href="#">
                    Payment options
                  </a>
                </li>
              </div>
              <div className="col-lg-3">
                <li className="nav-item">
                  <a className="nav-link text-nowrap font-weight-bold" href="#">
                    Customer Details
                  </a>
                </li>
              </div>
              <div className="col-lg-3">
                <li className="nav-item">
                  <a className="nav-link text-nowrap font-weight-bold" href="#">
                    Checkout
                  </a>
                </li>
              </div>
              <div className="col-lg-3">
                <li className="nav-item">
                  <a className="nav-link text-nowrap font-weight-bold" href="#">
                    Payment invoice
                  </a>
                </li>
              </div>
            </div>
          </ul>
        </nav>
        <br />
        <br />
        <br />
      </div>
      {/* navbar end */}

      {/* options titles start */}

      {/* options titles end */}
      {/* options start */}
      <div className="container text-center options">
        <div className="row">
          <div className="card-deck ">
            <div className="card col-lg-4">
              <div style={{ padding: "28px" }}>
                <img src={creditCard} alt="60" />
              </div>
              <img
                className="card-img-top"
                src="https://picsum.photos/200"
                alt="Card image cap"
              ></img>
              <div className="card-body">
                <p className="card-text">
                  use your visa,MasterCard,AmericanExpress, Discover,Diners Club
                  or JCB card
                </p>
              </div>
            </div>

            <div className="card col-lg-4">
              <div style={{ padding: "20px" }}>
                <img src={mobilePay} alt="60" />
              </div>
              <img
                className="card-img-top"
                src="https://picsum.photos/200"
                alt="Card image cap"
              ></img>
              <div className="card-body">
                <p className="card-text">
                  scan the QR code from Mobile Pay app and pay instantly
                </p>
              </div>
            </div>

            <div className="card col-lg-4">
              <div style={{ padding: "25px" }}>
                <img src={stripePay} alt="60" />
              </div>
              <img
                className="card-img-top"
                src="https://picsum.photos/200"
                alt="Card image cap"
              ></img>
              <div className="card-body">
                <p className="card-text">
                  with stripe you can accept payments with various domestic and
                  international credit or debit cards
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* options end */}

      <div style={{ marginTop: "500px" }}></div>
    </div>
  );
}

export default PaymentOptions;

{
  /* <div class="card-deck">
  <div class="card">
    <img class="card-img-top" src="..." alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="..." alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="..." alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
</div> */
}

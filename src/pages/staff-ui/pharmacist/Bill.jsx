import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import { Card } from '@material-ui/core';
import ISPIRITHALEI from "../../../assets/2.png";
import Pdf from "react-to-pdf";
import PrescriptionDataService from "../../../services/doctorPrescriptionService";

const ref = React.createRef();

function Bill() {

    const id = useParams();

    const [mdrequests, setmdRequests] = useState([]);
    //console.log(mdrequests.dPName)

    const getPurchaseRequest = (id) => {

        PrescriptionDataService
            .getOnePrescription(id)
            .then((response) => {
                setmdRequests(response.data);
                
            })
            .catch((e) => {
                console.log(e);
            });
    };

    useEffect(() => {
        console.log("drugid" + id.topicId);
        getPurchaseRequest(id.topicId);
    }, [id.topicId]);

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = dd + '/' + mm + '/' + yyyy;

    return (
        <div style={{ marginBottom: 10 }}>
            <Card>
                <CardContent>
                    <>
                        <Card style={{ width: "70%", margin: "auto" }}>
                            <div ref={ref}>
                                <CardContent>
                                    <div style={{ textAlign: "center" }}>
                                        <img src={ISPIRITHALEI} alt="ispirithaleiLogo" />
                                        <p style={{ fontSize: 15 }} >647, Utuwakanda, Mawanella.<br />TEL : +9411 2696 696 / +9411 269 696 <br />FAX : +9411 2696 969<br />EMAIL : reception@ispirithalei.lk</p>
                                    </div>
                                    <br />

                                    <p style={{ textAlign: "center" }}><strong>Medicine Bill</strong></p>

                                    <hr />
                                    <br />

                                    <p style={{ float: "right", fontSize: 15 }}><strong>Patient Name : </strong>{mdrequests.dPName}</p>
                                    <p style={{ fontSize: 15 }}><strong>Date of issue : </strong>{today}</p>
                                    <br />
                                    <br />
                                    <hr />
                                    <br />
                                    <p style={{ fontSize: 15 }}><strong>{}</strong></p>
                                    <br />
                                    <p style={{ textAlign: "right" }}><strong>Medicine Name</strong>
                                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                                        <strong>Dosage</strong>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<strong>Price</strong></p>
                                    <br />
                                    <p style={{ textAlign: "right" }}>{mdrequests.dMed1}
                                    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                                        {mdrequests.dDose1}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{250}</p>
                                    
                                    <br />
                                    <p style={{ textAlign: "right" }}>{mdrequests.dMed2}
                                    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                                        {mdrequests.dDose2} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{350}</p>
                                    <br />
                                    
                                    <hr />
                                    <p style={{ float: "right", fontSize: 15 }}><strong>Total Price </strong></p>
                                    <br />
                                    <p style={{ float: "right", fontSize: 15 }}>600.00</p>
                                    <br />
                                    <hr />
                                </CardContent>
                            </div>
                        </Card>

                        <div className="buttonAlignMiddle" style={{ marginTop: 10 }}>
                            <Pdf targetRef={ref} filename={mdrequests.dPName}>
                                {({ toPdf }) => <Button size="large" variant="contained" color="primary" type="submit" onClick={toPdf}>Generate PDF</Button>}
                            </Pdf>
                        </div>
                    </>
                </CardContent>
            </Card>
        </div>
    );
}

export default Bill;
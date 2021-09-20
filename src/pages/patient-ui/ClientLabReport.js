import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import { Card } from '@material-ui/core';
import ISPIRITHALEI from "../../assets/2.png";
import { Link } from "react-router-dom";
import TestDataService from "../../services/tests.service";
import Pdf from "react-to-pdf";

const ref = React.createRef();

function ClientLabReport() {
    const { id } = useParams();
    //console.log(id);

    const [test, setTest] = useState([]);

    //get test details by id
    const getTest = (id) => {
        TestDataService
            .getOneTest(id)
            .then((response) => {
                setTest(response.data);
                //console.log(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
        //console.log("name print", employee.firstName);
    };

    useEffect(() => {
        getTest(id);
    }, [id]);

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = dd + '/' + mm + '/' + yyyy;

    return (
        <div style={{ marginBottom: 10 }}>
            <Card style={{ width: "70%", margin: "auto" }}>
                <CardContent>
                    <>
                        <Card style={{ width: "70%", margin: "auto" }}>
                            <div ref={ref}>
                                <CardContent>
                                    <div style={{ textAlign: "center" }}>
                                        <img src={ISPIRITHALEI} />
                                        <p style={{ fontSize: 15 }} >647, Utuwakanda, Mawanella.<br />TEL : +9411 2696 696 / +9411 269 696 <br />FAX : +9411 2696 969<br />EMAIL : reception@ispirithalei.lk</p>
                                    </div>
                                    <br />

                                    <p style={{ textAlign: "center" }}><strong>TEST REPORT</strong></p>

                                    <hr />
                                    <br />

                                    <p style={{ float: "right", fontSize: 15 }}><strong>Patient Name : </strong>{test.patientsname}</p>
                                    <p style={{ fontSize: 15 }}><strong>Date of issue : </strong>{today}</p>
                                    <br />
                                    <p style={{ float: "right", fontSize: 15 }}><strong>Specimen ID : </strong>{test.specimenid}</p>
                                    <p style={{ fontSize: 15 }}><strong>Test Type : </strong>{test.testtype}</p>
                                    <br />
                                    <p style={{ float: "right", fontSize: 15 }}><strong>Contact Number : </strong>{test.contactnumber}</p>
                                    <p style={{ fontSize: 15 }}><strong>Age : </strong>{test.dateofbirth}</p>
                                    <br />
                                    <hr />
                                    <br />
                                    <p style={{fontSize: 15 }}><strong>{test.testtype}</strong></p>
                                    <br />
                                    <p style={{ textAlign: "center" }}><strong>Specimen Property</strong>
                                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                                        <strong>Specimen Result</strong></p>
                                    <br />
                                    <p style={{ textAlign: "center" }}> {test.specimenproperty}
                                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                                        {test.specimenpropertyresult}</p>
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <p style={{ float: "right", fontSize: 15 }}>{test.inchargelabassid}</p>
                                    <p style={{ fontSize: 15 }}>{test.inchargelabass}</p>
                                    <p style={{ float: "right", fontSize: 15 }}><strong>Incharge Lab Assistant ID  </strong></p>
                                    <p style={{ fontSize: 15 }}><strong>Incharge Lab Assistant Name  </strong></p>
                                    <br />
                                    <hr />
                                </CardContent>
                            </div>
                        </Card>

                        <div className="buttonAlignMiddle" style={{ marginTop: 10 }}>
                            <Link to={"/labreports" }>
                                <Button size="large" variant="contained" style={{ marginRight: 8 }}>Cancel</Button>
                            </Link>
                            <Pdf targetRef={ref} filename={test.patientsname}>
                                {({ toPdf }) => <Button size="large" variant="contained" color="primary" type="submit" onClick={toPdf}>Generate PDF</Button>}
                            </Pdf>
                        </div>
                    </>
                </CardContent>
            </Card>
        </div>
    );
}

export default ClientLabReport;
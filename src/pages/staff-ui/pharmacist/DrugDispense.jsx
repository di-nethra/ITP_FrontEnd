import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PrescriptionDataService from "../../../services/doctorPrescriptionService";
import { useParams } from 'react-router';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};



export default function DrugDispense() {
  const classes = useStyles();
  const initialReq = {
    drugid: "",
    medicinename: "",
    mqty: ""

  };

  const id = useParams();

  const [mdrequests, setmdRequests] = useState(initialReq);

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

  const [price, setPrice] = useState([]);
  // const [submitted, setSubmitted] = useState(false);

  const [price1, setPrice1] = useState("");
  const [price2, setPrice2] = useState("");

  const Demo = () => {
    setPrice1(250.00);
    setPrice2(350.00);
  }

  const handleInputChange = event => {
    const { name, value } = event.target;
    setPrice({ ...price, [name]: value });
  };

  return (
    <div style={{ marginLeft: 80 }}>
      <form className={classes.root} noValidate autoComplete="off" style={{ width: '80%' }}>
      <h3>Patient Prescription</h3>
        <TextField
          id="patientname"
          // label="Patient Name" 
          variant="outlined"
          value={mdrequests.dPName}
          validation={[required]}
          style={{ marginLeft: 40, width: 650 }}
          disabled
        />

        <TextField
          id="diagnosis"
          // label="Diagnosis" 
          variant="outlined"
          value={mdrequests.dPDignosis}
          validation={[required]}
          style={{ marginLeft: 40, width: 650 }}
          disabled
        />

        <TextField
          id="med1"
          //label="Medicine 1" 
          variant="outlined"
          value={mdrequests.dMed1}
          validation={[required]}
          style={{ marginLeft: 40, width: 300 }}
          disabled />

        <TextField
          id="med2"
          //label="Medicine 2" 
          variant="outlined"
          value={mdrequests.dMed2}
          validation={[required]}
          style={{ marginLeft: 40, width: 300 }}
          disabled />

        <TextField
          id="dos1"
          // label="Dosage" 
          variant="outlined"
          value={mdrequests.dDose1}
          validation={[required]}
          style={{ marginLeft: 40, width: 300 }}
          disabled />

        <TextField
          id="dos2"
          //label="Dosage" 
          variant="outlined"
          value={mdrequests.dDose2}
          validation={[required]}
          style={{ marginLeft: 40, width: 300 }}
          disabled />

        <TextField
          id="price1"
          name="price1"
          label="Price"
          variant="outlined"
          value={price1}
          placeholder=""
          onChange={handleInputChange}
          validation={[required]}
          style={{ marginLeft: 40, width: 300 }} />

        <TextField
          id="price2"
          name="price2"
          label="Price"
          variant="outlined"
          value={price2}
          placeholder=""
          onChange={handleInputChange}
          validation={[required]}
          style={{ marginLeft: 40, width: 300 }} />

        <div style={{ marginLeft: 560 }}>
          
          <Link to={"/staff/pharmasist/downloadbill/" + id.topicId }>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            style={{ marginTop: 30, width: 140 }}
          >
            Generate Bill
          </Button>
            </Link>
        </div>

        <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={Demo}
            style={{ width: 100, marginLeft: 40 }}
          >
            Demo
          </Button>

      </form>
    </div>
  );
}
import "./completedtest.css";
import jsPDF from "jspdf";
import Logo from '../../../assets/2.png'
import Swal from 'sweetalert2';
import { DataGrid } from "@material-ui/data-grid";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import TestDataService from "../../../services/tests.service";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from '@material-ui/core/Button';

export default function SubbmittedTests() {

  const columns = [
    { field: 'specimenid', headerName: 'Specimen ID', width: 140 },
    {
      field: 'starteddate',
      headerName: 'Date Started',
      width: 200,
      type: 'date',
      editable: true,
    },
    {
      field: 'completeddate',
      headerName: 'Date Finished',
      width: 200,
      type: 'date',
      editable: true,
    },
    {
      field: 'testtype',
      headerName: 'Specimen Type',
      type: 'text',
      width: 130,
      editable: true,
    },
    {
      field: 'status',
      headerName: 'Status',
      type: 'text',
      width: 130,
      editable: true,
    },
    {
      field: "action",
      headerName: "Action",
      width: 275,
      renderCell: (params) => {
        return (
          <>
            <button className="userListEdit2" value={params.row.id} onClick={reportDownload}>Report Download</button>
            {/*<LabPDF onClick={() => ReportDownload(params.row.id)}/>*/}
            <Button
              variant="contained"
              color="secondary"
              value={params.row.id}
              onClick={deleteTest}
            >
              <DeleteIcon />
            </Button>
          </>
        );
      },
    }
  ];


  const deleteTest = event => {
    Swal.fire({
      icon: 'success',
      title: 'Test has been Deleted',
      showConfirmButton: false,
      timer: 1500
    })
    TestDataService.remove(event.currentTarget.value)
      .then(response => {
        window.location.reload();
      })
      .catch(error => {
        console.log(error);
      })
  }
  const [tests, setTests] = useState([]);
  const [report, setReport] = useState([]);
  useEffect(() => {
    retrieveCompletedTests();
  }, []);

  const retrieveCompletedTests = () => {
    TestDataService.getAllCompleted()
      .then(response => {
        setTests(response.data)
      })
      .catch(err => {
        console.log("Error while getting data from database" + err);
      }
      )
  };

  let rows = [];
  for (const test of tests) {
    rows.push(
      {
        id: test._id,
        specimenid: test.specimenid,
        starteddate: test.starteddate,
        completeddate: test.completeddate,
        testtype: test.testtype,
        patientsname: test.patientsname,
        status: test.status

      }
    )
  }

  const reportDownload = event => {
    TestDataService.getOneTest(event.currentTarget.value)
      .then(response => {
        setReport(response.data)
      })
      .catch(error => {
        console.log(error);
      })
    const specimenid = report.specimenid;
    const subbmitteddate = report.subbmitteddate;
    const starteddate = report.starteddate;
    const completeddate = report.completeddate;
    const contactnumber = report.contactnumber;
    const age = report.dateofbirth;
    const inchargelabass = report.inchargelabass;
    const inchargelabassid = report.inchargelabassid;
    const patientsname = report.patientsname.toString();
    const specimenproperty = report.specimenproperty;
    const specimenpropertyresult = report.specimenpropertyresult;
    const testtype = report.testtype;

    const unit = "px";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape
    const doc = new jsPDF(orientation, unit, size);
    doc.setFontSize(15)
    doc.addImage(Logo, "PNG", 40, 40, 0, 0)
    doc.text("TEST REPORT.", 185.23, 120)
    doc.setLineWidth(0.5)
    doc.line(40, 125, 406.46, 125)
    doc.text("Specimen ID:", 40, 165)
    doc.text("Patient Name:", 40, 185)
    doc.text("Test Type:", 240, 165)
    doc.text("Contact Number:", 240, 185)
    //doc.text(patientsname, 40, 285)
    //doc.text(contactnumber, 290, 185)
    doc.save('test.pdf')

  }
  /*function reportDownload(id) {
    <LabPDF id={id}/>
    const getRpeortData = id => {
      TestDataService.getOneTest(id)
        .then(response => {
          setReport(response.data)
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    };
    getRpeortData(id);
    
      const specimenid= report.specimenid;
      const subbmitteddate= report.subbmitteddate;
      const starteddate= report.starteddate;
      const completeddate= report.completeddate;
      const contactnumber= report.contactnumber;
      const age= report.dateofbirth;
      const inchargelabass= report.inchargelabass;
      const inchargelabassid= report.inchargelabassid;
      const patientsname= report.patientsname;
      const specimenproperty= report.specimenproperty;
      const specimenpropertyresult= report.specimenpropertyresult;
      const testtype= report.testtype;
    
    const unit = "px";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape
    const doc = new jsPDF(orientation, unit, size);
    doc.setFontSize(15);
    doc.addImage(Logo, "PNG", 40, 40, 0, 0);
    doc.text("TEST REPORT.", 185.23, 120);
    doc.setLineWidth(0.5);
    doc.line(40, 125, 406.46, 125);
    doc.text("Specimen ID:", 40, 165);
    doc.text("Patient Name:", 40, 185);
    doc.text("Test Type:", 240, 165);
    doc.text("Contact Number:", 240, 185);

    
    doc.text(patientsname, 120, 185);
    doc.text(specimenid, 120, 165);
    //doc.text(testdata.testtype, 290, 165);
    //doc.text(testdata.contactnumber, 290, 185);
    doc.save('test.pdf');
  }*/

  return (
    <div style={{ height: 550, width: '100%' }} className="userList">
      <DataGrid
        rows={rows}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}


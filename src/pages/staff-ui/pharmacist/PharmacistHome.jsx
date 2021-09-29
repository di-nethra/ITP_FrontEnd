import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PrescriptionDataService from "../../../services/doctorPrescriptionService";

export default function ViewPrecription() {
    const [prescriptions, setPrescription] = useState([]);
  
    useEffect(() => {
      retrievePrescription();
    }, []);
  
    const retrievePrescription = () => {
        PrescriptionDataService.getAll()
        .then(response => {
          setPrescription(response.data);
          //console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 340 },
        {
            field: 'patientName',
            headerName: 'PATIENT NAME',
            width: 340,
            editable: false,
        },
        {
            field: 'diagnosis',
            headerName: 'Diagnosis',
            width: 240,
            editable: false,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            sortable: false,
            editable: false,
            renderCell: (params) => {
              return (
                <>
                    <Link to={"/staff/pharmasist/drugdispense/" + params.row.id} >
                    <button
                      style={{ marginLeft: 40 }}
                      className="userListEdit">
                      Bill
                    </button>
                    </Link>
      
                </>
              );
            },
          },
    ];

    let rows = [];
    for (const prescription of prescriptions) {
        rows.push(
            {
              id: prescription._id,
              patientName: prescription.dPName,
              diagnosis: prescription.dPDignosis,
            }
        )
    }


    return (
        <div style={{ marginBottom: 10 }} >
            <Card>
                <CardContent>
                    <h3>Prescription List</h3>
                    <br />
                    <div style={{ height: 400, width: '100%' }}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={5}
                            disableSelectionOnClick
                            style={{ backgroundColor: "#D9FAFF" }}
                        />
                    </div>
                </CardContent>
            </Card>

        </div>
    );
}

import React, {useEffect, useState} from 'react'
import "./Receptionist.css"
import {Card, CardContent, CardHeader, Grid} from "@material-ui/core";
import channellServices from "../../../services/echannelling.Service";

function Dashboard() {

    const [data, setData] = useState({
        "All Appointments": 0,
        "Pending Appointments": 0,
        "Checked-In Patients": 0,
    })
    useEffect(() => {
        getAppointmentCount();
    }, []);

    const getAppointmentCount = () => {
        channellServices.getCount()
            .then(response => {
                setData(response.data)
                console.log(data)
            })
            .catch(err => {
                    console.log("Error while getting data from database" + err);
                }
            )
    }

    // const props = {
    //     start: {color: "#D9FAFF"},
    //     end: {color: "#005792"}
    // };
    return (
        <>
            <Grid container spacing={8}>
                {
                    Object.entries(data).map(([key,value]) => {
                        return (
                            <Grid item={4}>
                                <Card variant={"outlined"} className="flowCard">
                                    <CardHeader title={ key }/>
                                    <CardContent >
                                        {value}
                                    </CardContent>
                                </Card>
                            </Grid>
                        )

                    })
                }

            </Grid>
        </>
    )
}

export default Dashboard;


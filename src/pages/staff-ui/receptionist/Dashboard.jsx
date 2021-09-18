import React, {useEffect, useState} from 'react'
import "./Receptionist.css"
import {Card, CardContent, CardHeader, Grid} from "@material-ui/core";
import channellServices from "../../../services/echannelling.Service";
import {Link} from "react-router-dom";
import {Skeleton} from "@material-ui/lab";

function Dashboard() {
const [loading, setLoading] = useState(true);
    const [data, setData] = useState({
        all : {
            text:"",
            path: "",
            number: 0,
        },
        pending: {
            text:"",
            path: "",
            number: 0,
        },
        checkedin :{
            text:"",
            path: "",
            number: 0,
        }
    })
    useEffect(() => {
        getAppointmentCount();
    }, []);

    const getAppointmentCount = () => {
        channellServices.getCount()
            .then(response => {
                setData(response.data)
                console.log(data)
                setLoading(false)
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
                            <Grid item={4} key={key}>
                                <Link to={value.path} style={ {textDecoration: "none"} }>
                                <Card variant={"outlined"} className="flowCard">
                                    <CardHeader title={ !loading ? value.text : <Skeleton variant="text" width={250} height={32}/> }/>
                                    <CardContent>
                                        { !loading ? <h1>{value.number}</h1> : <Skeleton variant="text" className="countSkeleton" width={32} height={64} component={"h1"}/> }
                                    </CardContent>
                                </Card>
                                </Link>
                            </Grid>

                        )

                    })
                }
            </Grid>
        </>
    )
}

export default Dashboard;


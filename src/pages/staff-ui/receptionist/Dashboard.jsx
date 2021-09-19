import React, {useEffect, useState} from 'react'
import "./Receptionist.css"
import {Card, CardContent, CardHeader, Grid} from "@material-ui/core";
import channellServices from "../../../services/echannelling.Service";
import {Link} from "react-router-dom";
import {Skeleton} from "@material-ui/lab";
import {CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

function Dashboard() {
    const [loading, setLoading] = useState(true);
    const [weekData, setWeekData] = useState()
    const [data, setData] = useState({})
    useEffect(() => {
        getAppointmentCount();
    }, []);

    const getAppointmentCount = () => {
        channellServices.getCount()
            .then(response => {
                setData(response.data.count)
                setWeekData(response.data.week.weekData)
                setLoading(false)
            })
            .catch(err => {
                    console.log("Error while getting data from database" + err);
                }
            )
    }

    return (
            <Grid container spacing={4} style={{boxSizing:"border-box"}}>
                {
                    Object.entries(data).map(([key, value]) => {
                        return (
                            <Grid item lg={4} xl={4} key={key}>
                                <Link to={value.path} style={{textDecoration: "none"}}>
                                    <Card raised={true} className="flowCard">
                                        <CardHeader style={{paddingBottom:"0"}} title={!loading ? value.text :
                                            <Skeleton variant="text" width={250} height={32}/>}/>
                                        <CardContent style={{paddingTop:"0"}}>
                                            {!loading ? <h1>{value.number}</h1> :
                                                <Skeleton variant="text" className="countSkeleton" width={32}
                                                          height={64} component={"h1"}/>}
                                        </CardContent>
                                    </Card>
                                </Link>
                            </Grid>

                        )

                    })
                }
                <Grid item xl={12} lg={12}>
                    <Card raised={true} style={{marginBottom:"10px"}}>
                        <CardContent>
                    <h2 className="appointmentChartTitle">Appointment Count By Day of The Week</h2>
                    <ResponsiveContainer width="100%" aspect={4}>
                    <LineChart data={weekData}>
                        <Line type="monotone" dataKey="count" stroke="#8884d8"/>
                        <CartesianGrid stroke="#ccc"/>
                        <XAxis dataKey="_id"/>
                        <YAxis/>
                        <Tooltip />
                    </LineChart>
                    </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
    )
}

export default Dashboard;


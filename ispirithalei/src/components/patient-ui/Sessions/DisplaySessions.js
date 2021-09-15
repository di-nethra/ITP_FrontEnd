import React, {useEffect, useState} from "react";
import SessionDataService from "../../../services/doctorSession.service";
import {useParams} from "react-router-dom";
import SessionCard from "./SessionCard";
import {Skeleton} from '@material-ui/lab';
import {Grid, useTheme} from "@material-ui/core";

const DisplaySessions = () => {
    const theme = useTheme();

const [sessions , setSessions] = useState([]);
const [loading , setLoading] = useState(true)

    const { doctorID } = useParams();
    let id = doctorID;
    useEffect(() => {
        getSessionsByDoctorID(id);
    }, [id]);

    const getSessionsByDoctorID = (id) => {
        SessionDataService.get(id)
            .then(response => {
                setSessions(response.data)
            })
            .catch(err => {
                console.log(err);
            }
            )

        setLoading(false);
    }


    return (
        loading ?
            <Grid container justifyContent="space-evenly">
                <Grid item xl={4} lg={4}>
                <Skeleton style={{borderRadius : theme.shape.borderRadius}} variant="rect" width={320} height={88}/>
                </Grid>
                <Grid item xl={4} lg={4}>
                    <Skeleton style={{borderRadius : theme.shape.borderRadius}} variant="rect" width={320} height={88}/>
                </Grid>
            </Grid>
            : <SessionCard sessions={sessions}/>

    )
}


export default DisplaySessions;
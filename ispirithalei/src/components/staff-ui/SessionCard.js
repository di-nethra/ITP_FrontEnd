import React, {useEffect, useState} from "react";
import {Card, CardActionArea, Grid, Typography} from "@material-ui/core";
import SessionDataService from "../../services/doctorSession.service";
import {makeStyles} from "@material-ui/core/styles";
import {useParams} from "react-router-dom";

const SessionCard = () => {

const [sessions , setSessions] = useState([])

    let { id } = useParams();
    useEffect(() => {
        getSessionsByDoctorID(id);
    }, [id]);

    // const getSessions = () => {
    //     SessionDataService.getAll()
    //         .then(response => {
    //             setSessions(response.data)
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
    // }
    const getSessionsByDoctorID = (id) => {
        SessionDataService.get(id)
            .then(response => {
                setSessions(response.data)
            })
            .catch(err => {
                console.log(err);
            })
    }

    const useStyles = makeStyles({
        root: {
            maxWidth: 320,
        },
        actionArea : {
            padding: '20px',
        }
    });

    const classes = useStyles();

    return (
        sessions.length &&
        <Grid container spacing={8} justifyContent={"space-evenly"}>
            {sessions.map((session, index) => (
                <Grid item xl={4} lg={4} key={index}>
                    <Card className={classes.root}>
                        <CardActionArea className={classes.actionArea} href="">
                            <Typography align="center">
                                {session.doctorID}
                            </Typography>
                            <Typography align="center">
                                {session.date}
                            </Typography>

                            <Typography align="center">
                                {session.time + "H"}
                            </Typography>
                        </CardActionArea>
                    </Card>
                </Grid>
            ))
            }
        </Grid>

    )
}

export default SessionCard;
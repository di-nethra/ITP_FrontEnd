import React from "react";
import {Button, Card, CardActionArea, Grid, Typography, useTheme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import {Alert} from "@material-ui/lab";
import {NavLink, useRouteMatch} from "react-router-dom";


export default function SessionCard(props) {
    const useStyles = makeStyles({
        root: {
            maxWidth: 320,
        },
        actionArea: {
            padding: '20px',
            backgroundColor: useTheme().palette.primary.light
        }
    });
    const classes = useStyles();
    let {url} = useRouteMatch();
    let validSessionCount = 0;

    return (
        <div style={{margin: 40, padding: 10}}>
            <Card style={{margin: 10, padding: 40}}>
                <CardContent>
                    <Grid container spacing={8} justifyContent={"space-evenly"}>
                        {props.sessions.length ?
                            <Grid justifyContent="center" item xl={10} lg={10}><h1>CHOOSE A DATE AND TIME TO MEET THE
                                DOCTOR</h1><br/></Grid> : null}
                        {
                            props.sessions.length ? // eslint-disable-next-line
                                props.sessions.map((session, index) => {
                                        const now = new Date();
                                        let sessionDateAndTime = new Date(session.date + " " + session.time)
                                        if (!(sessionDateAndTime < now) && session.maxAppointments > session.currentAppointments) {
                                            validSessionCount++;
                                            return (
                                                <Grid item xl={4} lg={4} key={index}>
                                                    <Card className={classes.root}>
                                                        <CardActionArea className={classes.actionArea}
                                                                        href={url + "/" + session._id}>
                                                            <Typography variant={"h5"} align="center">
                                                                {session.date}
                                                            </Typography>

                                                            <Typography variant={"h5"} align="center">
                                                                {session.time + "H"}
                                                            </Typography>
                                                        </CardActionArea>
                                                    </Card>
                                                </Grid>
                                            )
                                        }
                                    }
                                ) : null
                        }
                        {
                            validSessionCount === 0 ? <Grid item xl={10} lg={10}>
                                <Alert severity="warning">
                                    <h1>No Sessions Found</h1>
                                    <NavLink to="/patient" style={{textDecoration: "none"}}> <Button
                                        style={{padding: "10px", margin: "20px"}} variant={"outlined"}>Go back to Doctor
                                        Selection Page</Button></NavLink>
                                </Alert>
                            </Grid> : null
                        }

                    </Grid>
                </CardContent>
            </Card>

        </div>

    )
}
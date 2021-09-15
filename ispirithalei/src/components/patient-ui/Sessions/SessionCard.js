import React from "react";
import {Card, CardActionArea, Grid, Typography, useTheme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import {Alert, AlertTitle} from "@material-ui/lab";
import {useRouteMatch} from "react-router-dom";


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
    let { url } = useRouteMatch();

    return (
        <div style={{margin: 40, padding: 10}}>
            <Card style={{margin: 10, padding: 40}}>
                <CardContent>
                    <Grid container spacing={8} justifyContent={"space-evenly"}>
                        {props.sessions.length ? <Grid justifyContent="center" item xl={10} lg={10}><h1>CHOOSE A DATE AND TIME TO MEET THE DOCTOR</h1><br/><br/></Grid>:null }
                        {props.sessions.length ?
                            props.sessions.map((session, index) => (
                                <Grid item xl={4} lg={4} key={index}>
                                    <Card className={classes.root}>
                                        <CardActionArea className={classes.actionArea} href={ url + "/" + session._id }>
                                            <Typography variant={"h5"} align="center">
                                                {session.date}
                                            </Typography>

                                            <Typography variant={"h5"} align="center">
                                                {session.time + "H"}
                                            </Typography>
                                        </CardActionArea>
                                    </Card>
                                </Grid>

                            )) : <Grid item xl={12} lg={12}>
                                <Alert severity="info" >
                                    <AlertTitle><h1>SORRY!</h1></AlertTitle>
                                    <h1>No Sessions Found</h1>
                                </Alert>
                            </Grid>
                        }

                    </Grid>
                </CardContent>
            </Card>

        </div>

    )
}
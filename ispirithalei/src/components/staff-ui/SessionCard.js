import React from "react";
import {Card, CardActionArea, Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        maxWidth: 320,
    },
    actionArea : {
        padding: '20px',
    }
});

export default function SessionCard(props) {
    const classes = useStyles();

    return (
        <Grid container spacing={8} justifyContent={"space-evenly"}>
            {props.sessions.length ? props.sessions.map((session, index) => (
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
                    )) : <h1>No sessions found</h1>

            }

        </Grid>
    )
}
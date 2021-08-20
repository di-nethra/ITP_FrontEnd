import React from "react";
import {Box, Typography, useTheme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

function Service(props) {
    const theme = useTheme();
    const useStyles = makeStyles({
        card: {
            backgroundColor: theme.palette.primary.main,
            borderRadius: '50%',
            padding: '20px',
            margin: "auto",
            height: '175px',
            width: '175px',
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },

        heading: {
            padding: '10px 50px',
        },

        description: {
            padding: '10px 50px',
            textAlign: 'justify',
            overflowWrap: 'break-word'
        }
    });
    const style = useStyles();

    return (
        <div>
            <Box className={style.card}>
                <img height="150px" src={props.img} alt="Service Provided by our system"/>
            </Box>
            <Typography variant={"h5"} className={style.heading}>
                {props.heading}
            </Typography>
            <Typography className={style.description}>
                {props.description}
            </Typography>
        </div>
    )
};

export default Service;
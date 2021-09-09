import React from "react";
import {Box, Typography, useTheme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Fade from 'react-reveal/Fade';

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
            padding: '10px 40px',
        },

        description: {
            padding: '5px 40px',
            textAlign: 'justify',
            textJustify: "inter-character"
        }
    });
    const style = useStyles();

    return (
        <Fade bottom cascade>
        <div>

            <Box className={style.card}>
                <img height="150px" src={props.img} alt="Service Provided by our system"/>
            </Box>
            <Fade bottom cascade delay={300}>
            <Typography variant={"h5"} className={style.heading}>

                {props.heading}

            </Typography>
            </Fade>
            <Fade bottom cascade delay={300}>
            <Typography className={style.description}>

                {props.description}

            </Typography>
            </Fade>
        </div>
</Fade>
    )
};

export default Service;
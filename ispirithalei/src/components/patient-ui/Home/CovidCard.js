import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Box, Grid, Typography, useTheme} from "@material-ui/core";
import CovidDetail from "./CovidDetail";
import {faHeartbeat, faHospitalUser, faProcedures, faSkullCrossbones} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Virus from "../../../assets/images/virus_1.svg";

const useStyles = makeStyles({
    box: {
        backgroundColor: "white",
        padding: "50px 10%",
        borderRadius: "60px",
        margin: "100px 0"
    },
    adviseBox: {
        margin: '3rem 0',
        padding: '15px',
        borderRadius: '20px'
    },
    heading: {
        fontWeight: 600,
        padding: "30px 0 50px"
    },
    virusImage: {
        height: '200px',
        position: "absolute",
        right: '-150px',
        top: '-85px',
    }
});

function CovidCard() {
    const theme = useTheme();


    const detailArr = [{
        heading: "Total Cases",
        number: "129995",
        icon: function () {
            return <FontAwesomeIcon icon={faHospitalUser} size='3x' color={theme.palette.warning.main}/>
        },
        color: theme.palette.warning.main,
    },
        {
            heading: "Active Cases",
            number: "29995",
            icon: function icon() {
                return <FontAwesomeIcon icon={faProcedures} size='3x' color={theme.palette.error.main}/>
            },
            color: theme.palette.error.main,
        },
        {
            heading: "Recovered",
            number: "101527",
            icon: function icon() {
                return <FontAwesomeIcon icon={faHeartbeat} size='3x' color={theme.palette.success.main}/>
            },
            color: theme.palette.success.main,
        },
        {
            heading: "Deaths",
            number: "1595",
            icon: function icon() {
                return <FontAwesomeIcon icon={faSkullCrossbones} size='3x' color={theme.palette.error.dark}/>
            },
            color: theme.palette.error.dark,
        }
    ];

    const style = useStyles();
    return (
        <Box className={style.box}>
            <div>
                <div style={{position: "relative", top: '-10%'}}>
                    <img src={Virus} className={style.virusImage} alt="Image of Virus" />
                </div>
                <Typography className={style.heading} variant="h4">COVID-19 SRI LANKA</Typography>
                <Grid container spacing={8} justifyContent={"space-evenly"}>
                    {
                        detailArr.map((item, index) => (
                                <Grid item key={index}>
                                    <CovidDetail
                                        icon={item.icon}
                                        heading={item.heading}
                                        number={item.number}
                                        color={item.color}/>
                                </Grid>
                            )
                        )
                    }
                </Grid>
                <Box className={style.adviseBox} color={theme.palette.primary.light}
                     bgcolor={theme.palette.primary.main}><Typography align="center" variant="h6">BE A RESPONSIBLE
                    CITIZEN AND ADHERE TO COVID SAFETY GUIDELINES</Typography></Box>
            </div>
        </Box>
    )
};

export default CovidCard;
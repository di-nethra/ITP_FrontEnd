import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Box, Grid, Typography, useTheme} from "@material-ui/core";
import Fade from 'react-reveal/Fade';
import CovidDetail from "./CovidDetail";
import {faHeartbeat, faHospitalUser, faProcedures, faSkullCrossbones} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Virus from "../../../assets/images/virus_1.svg";

const useStyles = makeStyles({
    box: {
        backgroundColor: '#D9FAFF',
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
    const [data, setData] = useState({"data" : {
            "local_total_cases": 0,
            "local_total_number_of_individuals_in_hospitals": 0,
            "local_deaths": 0,
            "local_recovered": 0,
        }})

    useEffect(() => {
        fetch('https://hpb.health.gov.lk/api/get-current-statistical')
            .then(response =>
                response.json())
            .then(apiData => {
                    setData(apiData);
                }
            )
            .catch(e => {
                console.log(e);
            })
    }, [])



    let detailArr = [{
        heading: "Total",
        number: data.data.local_total_cases,
        icon: function icon() {
            return <FontAwesomeIcon icon={faHospitalUser} size='3x' color={theme.palette.warning.main}/>
        },
        color: theme.palette.warning.main,
    },
        {
            heading: "Active",
            number: data.data.local_total_number_of_individuals_in_hospitals,
            icon: function icon() {
                return <FontAwesomeIcon icon={faProcedures} size='3x' color={theme.palette.error.main}/>
            },
            color: theme.palette.error.main,
        },
        {
            heading: "Recovered",
            number: data.data.local_recovered,
            icon: function icon() {
                return <FontAwesomeIcon icon={faHeartbeat} size='3x' color={theme.palette.success.main}/>
            },
            color: theme.palette.success.main,
        },
        {
            heading: "Deaths",
            number: data.data.local_deaths,
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
                <div style={{position: "relative", top: '-10%', right: "-2%"}}>
                    <img src={Virus} className={style.virusImage} alt="Virus" />
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
            <Fade bottom>
                <div>
                <Box className={style.adviseBox} color={theme.palette.primary.light}
                     bgcolor={theme.palette.primary.main}>
                    <Typography align="center" variant="h6">
                        BE A RESPONSIBLE CITIZEN AND ADHERE TO COVID SAFETY GUIDELINES
                    </Typography>
                </Box>
                </div>
            </Fade>
            </div>
        </Box>
    )
}

export default CovidCard;
import React from "react";
import {Box, Grid, Typography} from "@material-ui/core";
import Service from "./Service";
import Doctor from "../../../assets/images/doctor_1.png";
import Medicine from "../../../assets/images/medicine_1.png";
import Lab from "../../../assets/images/lab_1.png";
import {makeStyles} from "@material-ui/core/styles";



const useStyles = makeStyles({
    box: {
        backgroundColor: "#D9FAFF",
        padding: "50px 10%",
        borderRadius: "60px",
        margin: "100px 0"
    },
    heading: {
        fontWeight: 600,
        padding: "10px 0 50px"
    }
});

function ServicesCard(props) {
    const style = useStyles();
    const serviceArr = [
        {
            heading: "DOCTORS",
            description: "Your health is our priority so we have chosen the best health professionals in Sri Lanka to take care of you.",
            img: Doctor
        },
        {
            heading: "PHARMACY",
            description: "The best brands of pharmaceutical drugs and medical supplies are available. best brands for competitive prices.",
            img: Medicine
        },
        {
            heading: "LABORATORY",
            description: "Best in class laboratory for testing PCR, liquid profile, TSH, glucose level and many more",
            img: Lab
        }
    ];
    return (
        <Box className={style.box}>
            <Typography className={style.heading} variant="h4">ONE STOP MEDICARE</Typography>
            <Grid container spacing={4} justifyContent={"space-between"} className="serviceStyle">
                {
                    serviceArr.map((item, index) => (
                        <Grid item lg={4} xl={4} key={index}>
                            <Service
                                heading={item?.heading}
                                description={item?.description}
                                img={item?.img}
                            />
                        </Grid>
                    ))
                }

            </Grid>
        </Box>
    )
};

export default ServicesCard;
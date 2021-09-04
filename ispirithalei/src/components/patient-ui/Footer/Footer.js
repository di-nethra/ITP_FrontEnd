import React from "react";
import styles from "../patientUI.module.css";
import {Grid} from "@material-ui/core";
import FooterContact from "./FooterContact";
import FooterAddress from "./FooterAddress";
import FooterLinks from "./FooterLinks";


function Footer() {
    return (
    <div className={styles.footer}>
        <Grid container spacing={1} justifyContent={"space-between"}>
            <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                <FooterContact />
            </Grid>

            <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                <FooterLinks />
            </Grid>

            <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                <FooterAddress />
            </Grid>
        </Grid>
    </div>
    )
}

export default Footer;
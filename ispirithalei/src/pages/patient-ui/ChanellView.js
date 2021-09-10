import React from 'react'
import PageHeader from "../../components/patient-ui/Echannelling/HeaderStyles";
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper,makeStyles } from '@material-ui/core';
import EForm from './ChanellForm';

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}))

export default function Display() {

    const classes = useStyles();

    return (
        <>
            <PageHeader
                title="E Channelling"
                subTitle="For channelling entry your details below"
                icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
            />
            <Paper background className={classes.pageContent}>
                <EForm/>
            </Paper>
        </>
    )
}

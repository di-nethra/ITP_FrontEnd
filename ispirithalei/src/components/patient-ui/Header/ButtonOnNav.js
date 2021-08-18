import {makeStyles} from "@material-ui/core/styles";
import {Button} from "@material-ui/core";
import HistoryIcon from "@material-ui/icons/History";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import React from "react";

const useStyles = makeStyles({
    root: {
        borderRadius: '10px',
        margin: '20px',
        color: '#00204A',
        backgroundColor: '#D9FAFF',
        padding:'12px',
        '&:hover': {
            backgroundColor: '#00204A',
            color: '#D9FAFF',
        },
    },
});

function ButtonOnNav(props) {
    const classes = useStyles();
    return (
        <Button className={classes.root} variant="contained">{props.text}</Button>
    );
};
function HistoryButtonOnNav() {
    const classes = useStyles();
    return (
        <Button className={classes.root} variant="contained" startIcon={<HistoryIcon/>}>History</Button>
    );
}
function LoginButtonOnNav() {
    const classes = useStyles();
    return (
        <Button className={classes.root} variant="contained" startIcon={<ExitToAppIcon/>}>Login</Button>
    );
}
export default ButtonOnNav;
export {HistoryButtonOnNav,LoginButtonOnNav};
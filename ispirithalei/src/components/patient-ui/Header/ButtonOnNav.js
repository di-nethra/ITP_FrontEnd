import {makeStyles} from "@material-ui/core/styles";
import {Button} from "@material-ui/core";


import React from "react";

const useStyles = makeStyles({
    root: {
        borderRadius: '10px',
        color: '#00204A',
        backgroundColor: '#D9FAFF',
        padding: '10px',
        '&:hover': {
            backgroundColor: '#00204A',
            color: '#D9FAFF',
        },
    },
});

function ButtonOnNav(props) {
    const classes = useStyles();
    return (
        <Button className={classes.root} variant="contained" startIcon={props.icon}>{props.text}</Button>
    );
};

export default ButtonOnNav;

import React from 'react';
import {loadCSS} from 'fg-loadcss';
import {Box, Typography} from "@material-ui/core";


function CovidDetail(props) {
    React.useEffect(() => {
        const node = loadCSS(
            'https://use.fontawesome.com/releases/v5.15.0/css/all.css',
            document.querySelector('#font-awesome-css'),
        );

        return () => {
            node.parentNode.removeChild(node);
        };
    }, []);
    return (
        <div>
            <Box>
                {props.icon}
            </Box>
            <Typography variant={"h4"} style={{color: props.color}}>
                {props.number}
            </Typography>
            <Typography variant={"h5"}>
                {props.heading}
            </Typography>

        </div>
    )
}

export default CovidDetail;
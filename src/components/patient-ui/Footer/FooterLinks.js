import React from "react";
import {Typography} from "@material-ui/core";
import {NavLink} from "react-router-dom";

const links = [
    {
        path: "/",
        data: "Home",
    },
    {
        path: "/about",
        data: "About Us",
    },
    {
        path: "/drugs",
        data: "Drugs"
    },
    {
        path: "/lab",
        data: "lab"
    },
]

export default function FooterLinks() {
    return (
        <div>
            <Typography variant={"h5"}>
                Quick Links
            </Typography>

            {links.map(link =>
                <Typography key={link.path} variant={"body1"}>
                    <NavLink to={link.path} style={{color:"white", textDecoration:"none"}}>{link.data}</NavLink>
                </Typography>
            )}


        </div>
    )
}
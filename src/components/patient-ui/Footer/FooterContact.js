import React from "react";
import {Typography} from "@material-ui/core";

const contacts = [
    {
        type: "TEL",
        data: "+9411 2696 696/ +9411 269 696",
    },
    {
        type: "FAX",
        data: "+9411 2696 969",
    },
    {
        type: "EMAIL",
        data: "reception@ispirithalei.lk"
    },
]
export default function FooterContact() {
    return (
        <div>
            <Typography variant={"h5"}>
                Contact Us
            </Typography>
            {contacts.map(contact =>
                    <Typography key={contact.type} variant={"body1"}>
                        {contact.type} : {contact.data}
                    </Typography>
            )}
        </div>
    )
}
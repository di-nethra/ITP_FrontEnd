import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import DocSupport from "../../../assets/images/docSupport.gif";

export default function DoctorSupport() {
    return (
        <div style={{ marginBottom: 10 }}>
            <Card>
                <CardContent>
                    <p style={{ textAlign: "center", fontSize: 24 }}> Doctor Account Help and Support</p>
                    <br />
                    <div>
                        <img src={DocSupport} style={{ height: 300, width: "100%", opacity: 1 }} alt="Support" />
                    </div>
                    <br />
                    <p style={{ fontSize: 16 }}>If you face any difficulties in using the functions provided by our system or if you face any other dificulty please contact our system admin via the following contact options.</p>
                    <br /><br />
                    <ul style={{ fontSize: 16 }}>
                        <li><p><strong>Contact No -</strong> (+94) 77 - 985 - 6628</p></li>
                        <br />
                        <li><p><strong>Email -</strong> <a href="https://outlook.live.com/owa/">support@ispirithalei.com</a></p></li>
                        <br />
                    </ul>
                </CardContent>
            </Card>
        </div>
    )
}
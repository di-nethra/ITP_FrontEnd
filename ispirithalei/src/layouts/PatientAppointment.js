import React from "react";
import "./layout.css"
import {Route, Switch} from "react-router-dom";
import DoctorSelect from "../pages/patient-ui/DoctorSelect";
import DisplaySessions from "../components/patient-ui/Sessions/DisplaySessions";
import EForm from "../pages/patient-ui/ChanellForm";

const PatientAppointment = () => {


    return (
        <div>
            <Switch>
                <Route path="/patient/:doctorID/:sessionID">
                  <EForm />
                </Route>
                <Route path="/patient/:doctorID">
                    <DisplaySessions/>
                </Route>
                <Route path="/patient">
                    <DoctorSelect/>
                </Route>
            </Switch>
        </div>
    )
}

export default PatientAppointment

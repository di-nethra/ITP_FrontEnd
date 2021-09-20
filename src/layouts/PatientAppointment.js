import React from "react";
import "./layout.css";
import { Route, Switch } from "react-router-dom";
import DoctorSelect from "../pages/patient-ui/DoctorSelect";
import DisplaySessions from "../components/patient-ui/Sessions/DisplaySessions";
import EForm from "../pages/patient-ui/ChanellForm";
import PostMessageForm from "../pages/patient-ui/PostMessageForm";
import UpdateInquiry from "../pages/patient-ui/updateInquiry";

const PatientAppointment = () => {
  return (
    <div>
      <Switch>
          
          <Route path="/patient/inquiry/editinquiry/:id"component={UpdateInquiry}/>
          <Route path="/patient/inquiry" component={PostMessageForm} />
          <Route path="/patient/:doctorID/:sessionID">
          <EForm />
        </Route>
        <Route path="/patient/:doctorID">
          <DisplaySessions />
        </Route>
        <Route path="/patient">
          <DoctorSelect />
        </Route>
      </Switch>
    </div>
  );
};

export default PatientAppointment;

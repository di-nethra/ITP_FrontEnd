import React from "react";
import Sidebar from "../components/staff-ui/sidebar/Sidebar";
import LabassHome from "../pages/staff-ui/lab asistant/LabassHome";
import SubmittedTests from "../pages/staff-ui/lab asistant/SubmittedTests";
import StaffAssign from "../pages/staff-ui/lab asistant/StaffAssign"
import NewTest from "../pages/staff-ui/lab asistant/NewTest"
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import DoneIcon from '@material-ui/icons/Done';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import Topbar from "../components/staff-ui/topbar/Topbar";
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import PublishOutlinedIcon from '@material-ui/icons/PublishOutlined';
import TransformIcon from '@material-ui/icons/Transform';
import "./layout.css"
import {Route, Switch} from "react-router-dom";
import InTransist from "../pages/staff-ui/lab asistant/InTransist";
import TestReslt from "../pages/staff-ui/lab asistant/TestResult";
import CompletedTest from '../pages/staff-ui/lab asistant/CompletedTest'
import PatientsLists from "../pages/staff-ui/lab asistant/PatientsLists";
import LabHelp from "../pages/staff-ui/lab asistant/LabHelp";
import PatientUpdate from "../pages/staff-ui/lab asistant/PatientUpdate";
import LabPrintTest from "../pages/staff-ui/lab asistant/LabPrintTest";

const Labasisstant = () => {
  let temp = sessionStorage.getItem("user");
  let currentUser = JSON.parse(temp);
  const user = {
    name : currentUser?.firstName + " " + currentUser?.lastName,
    role: currentUser?.role,
    list: [
      {
        path: "",
        exact: true,
        icon: <DashboardOutlinedIcon className="sidebarIcon"/>,
        iconlabel: 'Dashboard',
        id: 1
      },
      {
        path: "newtests",
        icon: <AddBoxOutlinedIcon className="sidebarIcon"/>,
        iconlabel: 'New Test',
        id: 2
      },
      {
        path: "submittedtests",
        icon: <PublishOutlinedIcon className="sidebarIcon"/>,
        iconlabel: 'Submitted Tests',
        id: 3
      },
      {
        path: "intrasisttests",
        icon: <TransformIcon className="sidebarIcon"/>,
        iconlabel: 'In Transist Tests',
        id: 4
      },
      {
        path: "completedtests",
        icon: <DoneIcon className="sidebarIcon"/>,
        iconlabel: 'Completed Tests',
        id: 5
      },
      {
        path: "patients",
        icon: <PersonOutlineIcon className="sidebarIcon"/>,
        iconlabel: 'Patients',
        id: 6
      },
      {
        path: "support",
        icon: <HelpOutlineIcon className="sidebarIcon"/>,
        iconlabel: 'Support',
        id: 7
      },


    ]
  }

  return (
      <div>
        <div className="container">
          <Sidebar user={user}/>
          <div className="others">
            <Topbar page={user.list}/>
            <Switch>
              <Route exact path="/staff/labassistant/">
                <LabassHome/>
              </Route>
              <Route exact path="/staff/labassistant/newtests">
                <NewTest/>
              </Route>
              <Route path="/staff/labassistant/submittedtests">
                <SubmittedTests/>
              </Route>
              <Route path="/staff/labassistant/submittedtest/:topicId">
                <StaffAssign/>
              </Route>
              <Route path="/staff/labassistant/intrasisttests">
                <InTransist/>
              </Route>
              <Route path="/staff/labassistant/intransisttests/:testId">
                <TestReslt/>
              </Route>
              <Route path="/staff/labassistant/patientupdate/:topicId">
                <PatientUpdate/>
              </Route>
              <Route path="/staff/labassistant/completedtests">
                <CompletedTest/>
              </Route>
              <Route path="/staff/labassistant/patients">
                <PatientsLists/>
              </Route>
              <Route path="/staff/labassistant/downloadform/:id">
                <LabPrintTest/>
              </Route>
              <Route path="/staff/labassistant/support">
                <LabHelp/>
              </Route>
            </Switch>
          </div>

        </div>
      </div>
  )
}

export default Labasisstant;
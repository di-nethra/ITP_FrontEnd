import React from "react";
import Sidebar from "../components/staff-ui/sidebar/Sidebar";
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import PublishOutlinedIcon from '@material-ui/icons/PublishOutlined';
import TransformIcon from '@material-ui/icons/Transform';
import DoneIcon from '@material-ui/icons/Done';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import Topbar from "../components/staff-ui/topbar/Topbar";
import "./layout.css"
import DoctorHome from "../pages/staff-ui/doctor/DoctorHome";

const Doctor = () => {
  const user = {
    name : 'Asel Jayasooriya',
    role : 'Doctor',
    list : [
      {
        path: "",
        exact: true,
        icon: <DashboardOutlinedIcon className="sidebarIcon"/>,
        iconlabel: 'Dashboard',
        id: 1
      },
      {
        path: "s",
        icon: <PublishOutlinedIcon className="sidebarIcon"/>,
        iconlabel: 'Add Prescription',
        id: 2
      },
      {
        path: "s",
        icon: <TransformIcon className="sidebarIcon"/>,
        iconlabel: 'View Prescriptions',
        id: 3
      },
      {
        path: "a",
        icon: <DoneIcon className="sidebarIcon"/>,
        iconlabel: 'Doctor Schedule',
        id: 4
      },
      {
        path: "a",
        icon: <HelpOutlineIcon className="sidebarIcon"/>,
        iconlabel: 'Support',
        id: 5
      },

      

    ]
  }
  
  return(
  <div >
    <div className="container">
      <Sidebar user={user}/>
      <div className="others">
          <Topbar page={user.list}/>
          <DoctorHome />
      </div>
    </div>
  </div>
  )
}

export default Doctor

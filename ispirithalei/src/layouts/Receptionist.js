import React from "react";
import Sidebar from "../components/staff-ui/sidebar/Sidebar";

import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import ScheduleIcon from '@material-ui/icons/Schedule';
import DoneIcon from '@material-ui/icons/Done';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import Topbar from "../components/staff-ui/topbar/Topbar";
import "./layout.css"


const Receptionist = () => {
  const user = {
    name : 'Amanulla Unais',
    role : 'Receptionist',
    list : [
      {
        path: "",
        exact: true,
        icon: <DashboardOutlinedIcon className="sidebarIcon"/>,
        iconlabel: 'Dashboard',
        id: 1
      },
      {
        path: "/pendingappointments",
        icon: <ScheduleIcon className="sidebarIcon"/>,
        iconlabel: 'Pending Check-in',
        id: 2
      },
      {
        path: "/checkedinappointments",
        icon: <DoneIcon className="sidebarIcon"/>,
        iconlabel: 'Checked-in ',
        id: 3
      },
      {
        path: "/allappointments",
        icon: <ClearAllIcon className="sidebarIcon"/>,
        iconlabel: 'All Appointments',
        id: 4
      },
      {
        path: "/newappointment",
        icon: <PersonOutlineIcon className="sidebarIcon"/>,
        iconlabel: 'New Appointment',
        id: 5
      },
      {
        path: "/support",
        icon: <HelpOutlineIcon className="sidebarIcon"/>,
        iconlabel: 'Support',
        id: 6
      },

      

    ]
  }
  
  return(
  <div >
    <div className="container">

      <Sidebar user={user}/>
      <div className="others">
          <Topbar page={user.list}/>

      </div>
    </div>
  </div>
  )
}

export default Receptionist;
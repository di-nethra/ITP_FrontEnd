import Sidebar from "../components/staff-ui/sidebar/Sidebar";
import LabassHome from "../pages/staff-ui/lab asistant/LabassHome"
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import DoneIcon from '@material-ui/icons/Done';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import Topbar from "../components/staff-ui/topbar/Topbar";
import PublishOutlinedIcon from '@material-ui/icons/PublishOutlined';
import TransformIcon from '@material-ui/icons/Transform';
import "./layout.css"

const Receptionist = () => {
  const user = {
    name : 'Danushka Ranasinghe',
    role : 'Lab Assistant',
    list : [
      {
        path: "",
        exact: true,
        icon: <DashboardOutlinedIcon className="sidebarIcon"/>,
        iconlabel: 'Dashboard',
        id: 1
      },
      {
        path: "/submittedtests",
        icon: <PublishOutlinedIcon className="sidebarIcon"/>,
        iconlabel: 'Submitted Tests',
        id: 2
      },
      {
        path: "/intrasisttests",
        icon: <TransformIcon className="sidebarIcon"/>,
        iconlabel: 'In Transist Tests',
        id: 3
      },
      {
        path: "/completedtests",
        icon: <DoneIcon className="sidebarIcon"/>,
        iconlabel: 'Completed Tests',
        id: 4
      },
      {
        path: "/alltests",
        icon: <ClearAllIcon className="sidebarIcon"/>,
        iconlabel: 'All Tests',
        id: 5
      },
      {
        path: "/patients",
        icon: <PersonOutlineIcon className="sidebarIcon"/>,
        iconlabel: 'Patients',
        id: 6
      },
      {
        path: "/support",
        icon: <HelpOutlineIcon className="sidebarIcon"/>,
        iconlabel: 'Support',
        id: 7
      },

      

    ]
  }
  
  return(
  <div >
    <div className="container">

      <Sidebar user={user}/>
      <div className="others">
          <Topbar page={user.list}/>
          <LabassHome/>
      </div>
    </div>
  </div>
  )
}

export default Receptionist;
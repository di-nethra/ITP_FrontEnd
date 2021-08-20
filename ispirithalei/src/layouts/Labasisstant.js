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
import LabassHome from "../pages/staff-ui/lab asistant/LabassHome";
const LabAssitant = () => {
  const user = {
    name : 'Danushka Ranasinghe',
    role : 'Lab Assistant',
    list : [
      {
        icon: <DashboardOutlinedIcon className="sidebarIcon"/>,
        iconlabel: 'Dashboard',
        id: 1
      },
      {
        icon: <PublishOutlinedIcon className="sidebarIcon"/>,
        iconlabel: 'Submitted Tests',
        id: 2
      },
      {
        icon: <TransformIcon className="sidebarIcon"/>,
        iconlabel: 'In Transist Tests',
        id: 3
      },
      {
        icon: <DoneIcon className="sidebarIcon"/>,
        iconlabel: 'Completed Tests',
        id: 4
      },
      {
        icon: <ClearAllIcon className="sidebarIcon"/>,
        iconlabel: 'All Tests',
        id: 5
      },
      {
        icon: <PersonOutlineIcon className="sidebarIcon"/>,
        iconlabel: 'Patients',
        id: 6
      },
      {
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
          <Topbar/>
          <LabassHome/>
      </div>
    </div>
  </div>
  )
}

export default LabAssitant
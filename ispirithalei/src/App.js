import SidebarLab from "./components/staff-ui/sidebar/SidebarLab";
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import PublishOutlinedIcon from '@material-ui/icons/PublishOutlined';
import TransformIcon from '@material-ui/icons/Transform';
import DoneIcon from '@material-ui/icons/Done';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import Topbar from "./components/staff-ui/topbar/Topbar";
import "./app.css"
const App = () => {
  const labass = {
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

      <SidebarLab labass={labass}/>
      <div className="others">
        <Topbar/>
        
      </div>
    </div>
  </div>
  )
}

export default App
import SidebarLab from "./components/staff-ui/sidebar/SidebarLab";
import Topbar from "./components/staff-ui/topbar/Topbar";
import "./app.css"
const App = () => {
  const labass = {
    name : 'Danushka Ranasinghe',
    role : 'Lab Assistant',
    list : [
      {
        icon: 'DashboardOutlinedIcon',
        iconlabel: 'Dashboard',
        id: 1
      },
      {
        icon: 'PublishOutlinedIcon',
        iconlabel: 'Submitted Tests',
        id: 2
      },
      {
        icon: 'TransformIcon',
        iconlabel: 'In Transist Tests',
        id: 3
      },
      {
        icon: 'DoneIcon',
        iconlabel: 'Completed Tests',
        id: 4
      },
      {
        icon: 'ClearAllIcon',
        iconlabel: 'All Tests',
        id: 5
      },
      {
        icon: 'PersonOutlineIcon',
        iconlabel: 'Patients',
        id: 6
      },
      {
        icon: 'HelpOutlineIcon',
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
import "./sidebar.css";
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import PublishOutlinedIcon from '@material-ui/icons/PublishOutlined';
import TransformIcon from '@material-ui/icons/Transform';
import DoneIcon from '@material-ui/icons/Done';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import ISPIRITHALEI from "../../../assets/1.png";


export default function SidebarLab(props) {
    return (
        <div className="sidebar">
          <div className="sidebarWrapper">
            <div className="sidebarMenu">
              <div className="logo">
                  <a className="logo1" href="/">
                    <img src={ISPIRITHALEI} alt="brandLogo" className="img-logo" />
                  </a>
              </div>
              <Titles title={props.labass}/>
              <ul className="sidebarList">
                <Content parts={props.labass.list}/>
              </ul>
            </div>
          </div>
        </div>
      );
}

const Titles = (props) => {
  return(
    <div className="sidebarTitle1">
          <p className="sidebarTitle">{props.title.name}</p>
          <p className="sidebarTitle">{props.title.role}</p>
    </div>
  )
}
const Content = (props) => {

  return(
  <>
    {props.parts.map(part =>
          <List key={part.id} icon={part.icon} iconlabel={part.iconlabel} />
    )}
  </>
  )
  
  
}
const List = (props) =>{
  console.log(props.icon)
  
  return(
    <>
      <li className="sidebarListItem ">
        {props.icon}
        {props.iconlabel}
      </li>
    </>
    
  

  )
}
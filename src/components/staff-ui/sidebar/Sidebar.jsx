import "./sidebar.css";
import ISPIRITHALEI from "../../../assets/1.png";
import {NavLink} from "react-router-dom";


export default function Sidebar(props) {
    return (
        <div className="sidebar">
          <div className="sidebarWrapper">
            <div className="sidebarMenu">
              <div className="logo">
                  <a className="logo1" href={"/staff/"+props.user.role.toLowerCase()}>
                    <img src={ISPIRITHALEI} alt="brandLogo" className="img-logo" />
                  </a>
              </div>
              <Titles title={props.user}/>
              <ul className="sidebarList">
                <Content parts={props.user.list} role={props.user.role}/>
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
          <List key={part.id} icon={part.icon} iconlabel={part.iconlabel} path={part.path} exact={part.exact} role={props.role}/>
    )}
  </>
  )
  
  
}
const List = (props) =>{
return(
    <>
      <NavLink to={"/staff/" + props.role?.toLowerCase() + "/" + props.path} exact={props.exact} className="sidebarListItem" replace>
        {props.icon}
        {props.iconlabel}
      </NavLink>
    </>
    
  

  )
}
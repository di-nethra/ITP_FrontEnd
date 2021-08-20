import "./sidebar.css";
import ISPIRITHALEI from "../../../assets/1.png";


export default function Sidebar(props) {
    return (
        <div className="sidebar">
          <div className="sidebarWrapper">
            <div className="sidebarMenu">
              <div className="logo">
                  <a className="logo1" href="/">
                    <img src={ISPIRITHALEI} alt="brandLogo" className="img-logo" />
                  </a>
              </div>
              <Titles title={props.user}/>
              <ul className="sidebarList">
                <Content parts={props.user.list}/>
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
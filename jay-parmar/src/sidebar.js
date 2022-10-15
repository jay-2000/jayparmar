// import { Link,BrowserRouter as Router,Routes,Route } from "react-router-dom";
import './sidebar.css'
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import GitHubIcon from '@mui/icons-material/GitHub';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloseIcon from '@mui/icons-material/Close';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
const Sidebar = () => {
  let togglebutton=()=>{
    document.getElementById('sidebar').classList.toggle('active')
  }
  return (
    <div className="sidebar" id='sidebar'>
      <Button variant="text" style={{color:'black',padding:'0px',margin:'auto',float:'right'}} onClick={togglebutton}><CloseIcon  style={{margin:'20px',fontSize:'25px'}}/></Button>
      
      <h1>Portfolio</h1>
      <ul>
        <li><HomeIcon  style={{marginRight:'10px',fontSize:'30px'}}/> <span className='text-nav'>HOME</span></li>
        <li><PermIdentityIcon style={{marginRight:'10px',fontSize:'30px'}}/> <span className='text-nav'>About</span></li>
        <li><GitHubIcon style={{marginRight:'10px',fontSize:'30px'}}/> <span className='text-nav'>Skills</span></li>
        <li><ContactPhoneIcon style={{marginRight:'10px',fontSize:'30px'}}/> <span className='text-nav'>Contact</span></li>
        <li><AccountCircleIcon style={{marginRight:'10px',fontSize:'30px'}}/> <span className='text-nav'>Profile</span></li>
      </ul>
      <ExitToAppIcon style={{position:'absolute',bottom:'2%',left:'40%'}}/>
    </div>
  );
}
export default Sidebar
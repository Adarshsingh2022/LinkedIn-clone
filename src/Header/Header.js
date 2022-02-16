import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import Headeroptions from './Headeroptions';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {Avatar}  from "@material-ui/core";
import {useSelector} from "react-redux";
import {selectUser} from '../features/userSlice';



function Header() {

    const user = useSelector(selectUser)

  return (
      <div className='header'>
          { /* BAM Naming convension */ }
          <div className='header__left'> 
                <div className='header__logo'>
                    <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png"/> 
                </div>

                <div className='header__search'> 
                    <SearchIcon/>
                    <input type='text' placeholder='Search'/>
                </div>
          </div>

          <div className='header__right'>
                <Headeroptions Icon={HomeIcon} title="Home"/>
                <Headeroptions Icon={PeopleIcon} title="My Network"/>
                <Headeroptions Icon={BusinessCenterIcon} title="Jobs"/>
                <Headeroptions Icon={MessageIcon} title="Messaging"/>
                <Headeroptions Icon={NotificationsIcon} title="Notification"/>
                <Headeroptions avatar={Avatar} title={user.displayName}/>
            
          </div>
      </div>
  )
}

export default Header;
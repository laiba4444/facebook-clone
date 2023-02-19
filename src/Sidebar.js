import { Chat, People, Storefront } from '@mui/icons-material';
import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
// import PersonIcon from '@mui/icons-material/Person';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useStateValue } from './StateProvider';



function Sidebar() {
  const [{user}, dispatch] = useStateValue();
  return (
    <div className='sidebar'>

    <SidebarRow 
    src={user.photoURL} alt ='user pic'  
      title ={user.displayName} />

    <SidebarRow 
    Icon={LocalHospitalIcon}
    title ='COVID-19 Information Center' />

    <SidebarRow 
     Icon={EmojiFlagsIcon}
    title ='Pages' />

    <SidebarRow 
       Icon={People}
    title ='Friends' />
  
    <SidebarRow
     Icon={Chat}
    title ='Messanger'/>

    <SidebarRow 
      Icon={Storefront}
    title ='Marketplace'
    />

<SidebarRow 
      Icon={VideoLibraryIcon}
    title ='Videos'
    />

<SidebarRow 
      Icon={ExpandMore}
    title ='More'
    />


    </div>
  )
}

export default Sidebar;
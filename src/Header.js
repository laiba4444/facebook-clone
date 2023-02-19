import React from 'react'
import './header.css';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import { Flag } from '@mui/icons-material';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideogameAsset from '@mui/icons-material/VideogameAsset';
import { Avatar } from '@mui/material';
// import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';

import { Forum } from '@mui/icons-material';    //import ForumIcon from '@mui/icons-material/Forum';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { NotificationsActive } from '@mui/icons-material';  //import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { useStateValue } from './StateProvider';





function Header() {
    const [{user}, dispatch] = useStateValue();

    return (
        <div className='header'>
            <div className='header__left' >
                {/* <img src='https://encrypted-tbn0.gstatic.com/
                            images?q=tbn:ANd9GcTOy9cy7trRtz_rmnNT-DCvXiMz
                            cBLRcHmdot34JwlixA&s   'alt=' fb logo' /></div> */}

                <img src='/images/fb logo.png'alt=' fb logo' /></div>


            <div className="header__input">
                <SearchIcon />
                <input type='text' placeholder='Search Facebook' />

            </div>


            <div className='header__center' >
                <div className=" header__option  header__option--active">
                    <HomeIcon fontSize='large' /> </div>

                <div className=" header__option">
                    <Flag fontSize='large' /> </div>

                <div className=" header__option">
                    <PeopleOutlineIcon fontSize='large' /> </div>

                <div className=" header__option">
                    <OndemandVideoIcon fontSize='large' /> </div>


                <div className=" header__option">
                    <StorefrontIcon fontSize='large' /> </div>


                <div className=" header__option">
                    <VideogameAsset fontSize='large' /> </div>


            </div>



            <div className='header__right' >

                <div className="header__info ">
                    <Avatar src={user.photoURL}/>
                    <h4>{user.displayName}</h4>
                </div>

                <IconButton>
                    <AddIcon />
                </IconButton>


                <IconButton >
                    <Forum />
                </IconButton>

                <IconButton >
                    <NotificationsActive />
                </IconButton>

                <IconButton >
                    <ExpandMore />
                </IconButton>

            </div>

        </div>
    )
}

export default Header;

import React from 'react'
import "./Sidebar.css"
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SidebarOption from "./SidebarOption.js"
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {Button} from '@material-ui/core'

function Sidebar() {
    return (
        <div className="sidebar">
            
            <TwitterIcon className="sidebar__twitterIcon"/>
            <SidebarOption active Icon={HomeIcon} name="Home"/>
            <SidebarOption Icon={SearchIcon} name="Explore"/>
            <SidebarOption Icon={NotificationsNoneIcon} name="Notifications"/>
            <SidebarOption Icon={MailOutlineIcon} name="Messages"/>
            <SidebarOption Icon={BookmarkBorderIcon} name="Bookmarks"/>
            <SidebarOption Icon={ListAltIcon} name="Lists"/>
            <SidebarOption Icon={PermIdentityIcon} name="Profile"/>
            <SidebarOption Icon={MoreHorizIcon} name="More"/>
            
            <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>
        </div>

    )
}

export default Sidebar

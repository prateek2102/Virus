import React from 'react';
import {ReactComponent as Home }from '../assets/icons/home.svg'
import {ReactComponent as Trash }from '../assets/icons/trash.svg'
import {ReactComponent as System }from '../assets/icons/system.svg'
import {ReactComponent as Config }from '../assets/icons/config.svg'
import {ReactComponent as Stats }from '../assets/icons/stats.svg'
import {ReactComponent as Disk }from '../assets/icons/disk.svg'
import {ReactComponent as Updates }from '../assets/icons/updates.svg'
import {ReactComponent as Help }from '../assets/icons/help.svg'
import {ReactComponent as Checkup }from '../assets/icons/checkup.svg'

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        {/* <Home width={24} height={24}/>
       
         <Trash width ={24} height ={24}/>
        <System height = {24} width = {24}/>
        <Config />
        <Disk/>
        <Checkup/>
        <Updates/>
        <Stats/>
        <Help/> */}
      </ul>
    </div>
  );
}

export default Sidebar;

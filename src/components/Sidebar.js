import React, { useState } from 'react';
import { ReactComponent as Home } from '../assets/icons/home.svg';
import { ReactComponent as Trash } from '../assets/icons/trash.svg';
import { ReactComponent as System } from '../assets/icons/system.svg';
import { ReactComponent as Chip } from '../assets/icons/chip.svg';
import { ReactComponent as Folder } from '../assets/icons/folder.svg';
import { ReactComponent as Disk } from '../assets/icons/disk.svg';
import { ReactComponent as Updates } from '../assets/icons/updates.svg';
import { ReactComponent as Help } from '../assets/icons/help.svg';
import { ReactComponent as Setting } from '../assets/icons/setting.svg';

function Sidebar() {
  const [activeIcon, setActiveIcon] = useState(null);

  const handleClick = (icon) => {
    setActiveIcon(icon);
  };

  const icons = [
    { name: 'Home', component: <Home /> },
    { name: 'Trash', component: <Trash /> },
    { name: 'System', component: <System /> },
    { name: 'Chip', component: <Chip /> },
    { name: 'Folder', component: <Folder /> },
    { name: 'Disk', component: <Disk /> },
    { name: 'Setting', component: <Setting /> },
    { name: 'Updates', component: <Updates /> },
    { name: 'Help', component: <Help /> },
  ];

  return (
    <div className="sidebar">
      {icons.map(icon => (
        <div
          key={icon.name}
          className={`icon-container ${activeIcon === icon.name ? 'active' : ''}`}
          onClick={() => handleClick(icon.name)}
        >
          {icon.component}
        </div>
      ))}
    </div>
  );
}

export default Sidebar;

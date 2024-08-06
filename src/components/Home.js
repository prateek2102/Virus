import React from 'react';
import Statistics from './Statistics';
import MobileTuneUp from './MobileTuneUp';
import HelpCenter from './HelpCenter';
import {ReactComponent as Refresh} from '../assets/icons/refresh.svg'
function Home() {
  return (
    <>
      <div className="center-section">
      <div className="status-bar">
        <h2>Welcome</h2>
        <div className="status-right">
          <p>Last scan: 3 days ago</p>
          <button className='rescan-button'>Rescan<Refresh/></button>
        </div>
      </div>
      <p>Here's what we found</p>
        
        <div className="card">
          <h3>System Junk</h3>
          <p><span className="orange">2.7GB</span> to clean and  <span className="orange">3454 items </span> to remove</p>
          <div className='btns'>
          <button className='green'>Clean Now</button>
          <button className='original'>See Data</button>
        </div>
        </div>
        
        <div className="card">
          <h3>Browser Cleaner</h3>
          <p><span className="orange">1.4 GB</span> to clean and <span className="orange">150 items</span> to remove<br/> Clear this info for more space and privacy</p>
          <div className='btns'>
          <button className='green'>Clean Now</button>
          <button className='original'>See Data</button>
        </div>
        </div>
        
        <div className="card">
          <h3>Broken Registry Keys</h3>
          <p><span className="orange">303 items </span>to clear out and declutter</p>
          <p>Remove these to help fix PC problems</p>
          <button className='green'>Fix Now</button>
        </div>
      </div>
      
      <div className="right-section">
        <Statistics />
        <MobileTuneUp />
        <HelpCenter />
      </div>
      </>
  );
}

export default Home;

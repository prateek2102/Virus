import React from 'react';
import Statistics from './Statistics';
import MobileTuneUp from './MobileTuneUp';
import HelpCenter from './HelpCenter';

function Home() {
  return (
    <>
      <div className="center-section">
      <div className="status-bar">
        <h2>Welcome</h2>
        <div className="status-right">
          <p>Last scan: 3 days ago</p>
          <button className='rescan-button'>Rescan</button>
        </div>
      </div>
      <p>Here's what we found</p>
        
        <div className="card">
          <h3>System Junk</h3>
          <p>2.7GB to clean</p>
          <p>345 items to remove</p>
          <button className='green'>Clean Now</button>
          <button className='original'>See Data</button>
        </div>
        
        <div className="card">
          <h3>Browser Cleaner</h3>
          <p>1.4 GB to clean and 150 items to remove<br/> Clear this info for more space and privacy</p>
          <button className='green'>Clean Now</button>
          <button className='original'>See Data</button>
        </div>
        
        <div className="card">
          <h3>Broken Registry Keys</h3>
          <p>303 items to clear out and declutter</p>
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

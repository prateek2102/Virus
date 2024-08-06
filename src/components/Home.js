import React from 'react';
import Statistics from './Statistics';
import MobileTuneUp from './MobileTuneUp';
import HelpCenter from './HelpCenter';

function Home() {
  return (
    <>
      <div className="center-section">
        <h2>Welcome</h2>
        <p>Last scan: 3 days ago</p>
        <button>Rescan</button>
        
        <div className="card">
          <h3>System Junk</h3>
          <p>2.7GB to clean</p>
          <p>345 items to remove</p>
          <button>Clean Now</button>
          <button>See Data</button>
        </div>
        
        <div className="card">
          <h3>Browser Cleaner</h3>
          <p>Details...</p>
        </div>
        
        <div className="card">
          <h3>Broken Registry Keys</h3>
          <p>33 items to clean</p>
          <p>Remove these to help fix PC problems</p>
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

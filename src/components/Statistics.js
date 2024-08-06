import React from 'react';

function Statistics() {
  return (
    <div className="card-right">
      <h3>Statistics</h3>
      <p>Here's what you've done so far:</p>
      <p>10MB<br/> space registered</p>
      <p>20<br/> items removed</p>
      <p>2<br/> issues fixed</p>
      <button className='rescan-button'>See Data</button><br/>
    </div>
  );
}

export default Statistics;

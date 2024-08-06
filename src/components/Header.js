import React from 'react';

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <h1>XYZ Cleaner</h1>
        <button>Reactivate</button>
      </div>
      <div className="header-right">
        <button>Store</button>
        <button>Minimize</button>
        <button>Close</button>
      </div>
    </div>
  );
}

export default Header;

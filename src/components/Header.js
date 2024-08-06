import React from 'react';
import { ReactComponent as MinimizeIcon } from '../assets/icons/minimize.svg';
import { ReactComponent as CloseIcon } from '../assets/icons/cross.svg';
import { ReactComponent as Cart } from '../assets/icons/cart.svg';
function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <h1>AVG TuneUp</h1>
        <button className="reactivate-btn">Reactivate</button>
      </div>
      <div className="header-right">
        <button className='store-button'><Cart/>Store
          
        </button>
        <button className='black'>
        <MinimizeIcon width={24} height={24} />
        </button>
        <button>
        <CloseIcon width={24} height={24} />

        </button>
      </div>
    </div>
  );
}

export default Header;

import React from 'react';
import './Header.css';
import {Cog6ToothIcon} from '@heroicons/react/24/solid'

export function Header() {
  return (
    <header className="App-header">
      <div className="header-content">
        
        <div className="header-icons">
          <Cog6ToothIcon className="settings-icon" />
          <span>HI</span>
        </div>
      </div>
    </header>
  );
}

import React from 'react';
import { Body} from './Layouts/Body';
import './App.css';
import { Header } from './Layouts/Header';

export function App() {
  return (
    <div className='App'>
      <Header />
      <Body/>
    </div>
  );
}

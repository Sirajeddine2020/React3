import React from 'react';
import './App.css';
import ProfilPhoto from './components/Profile/ProfilPhoto';
import FullName from './components/Profile/FullName';
import Address from './components/Profile/Address';

function App() {
  return (
    <>
      <ProfilPhoto />
      <textarea placeholder='Add your comment here. ' margin-left= '200px' rows='5' cols='20' borderColor='red' ></textarea>
      <FullName />
      <Address />
    </>
  );
}

export default App;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar';

const Template = ({children}) => {
  return (
    <div>
      
        <Navbar/>
      {children}
      
      </div>
  )
}

export default Template;
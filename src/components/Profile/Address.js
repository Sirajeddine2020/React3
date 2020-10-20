import React from 'react'
import './Style.css'

export default function Address() {
  return (
      <>
    <h3 style={{color:'Green', marginLeft:'5px'}}> 
    My full address is:
    </h3>
    
    <div className='street' style={{color:'red', fontSize:'18', marginLeft:'5px'}}> Number and Street: <span style={{color:'green'}}>150,</span> Habib Bourguiba Street </div>
    <div className='postalcode'style={{color:'red', marginLeft:'5px'}}>Postal code: <span style={{color:'green'}}>8050</span> </div>
    <div className='city'style={{color:'red', marginLeft:'5px'}}>City: Hammamet </div>
    <div className='country'style={{color:'red', marginLeft:'5px'}}>Country: Tunisia </div>
    </>
  );
}


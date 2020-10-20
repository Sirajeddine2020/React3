import React from 'react'
import './Style.css'


export default function FullName() {
    let name='Sirajeddine ', surname='Bouasker ';
  return (
    <div className="completeName" style={{color:'blue', backgroundColor:'yellowgreen', textAlign:'center',
        justifyContent:"space-around", maxWidth: '400px',
        marginRight:'10px',marginLeft:'10px'}}>
    <h1 >name: {name}</h1>
    <br></br>
    <h1 >surname: {surname}</h1>
    </div>
  );
}



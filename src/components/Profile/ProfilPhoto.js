import React from 'react'
import {Card, Col, Image} from 'react-bootstrap'
import './Style.css'


const ProfilPhoto = () => {
  return (
    <>

<Card.Header

style={{

  borderTopRightRadius: '6px',

  borderTopLeftRadius: '6px',

  backgroundColor: "turquoise",

  width: '20rem',

  height: '5rem',

  marginLeft: '700px',
 
  
 

}}


/>
<p style={{ position: "relative", top: "-50px", margin: "10px", color: "#505151"}}>

  Please have a look on my profile picture.

</p>



<Col>

<Image

  src='/ProfilePic.jpg'

  roundedCircle 

  style={{

    marginLeft: '30px',
    
    height: '120px',

    width: '120px',

    position: 'relative',

    top: '0px',
    bottom: '0px',

    border: '10px dashed pink',

    backgroundColor: 'transparent',

    alt: 'ProfilPhoto'
  }}

  />   

</Col>
      <Card

style={{

  width: '20rem',

  height: '5rem',

  marginRight: '30px',

  marginLeft: '700px',

  marginBottom: '20px',

  marginTop: '20px',

  backgroundColor: "rgb(233, 105, 201)",

  borderRadius: '6px',

  border: 'transparent',

  boxShadow: '0 10px 10px 0 rgba(0,0,0,0.2)'

  

}}

>

<Card.Body style={{ position: "relative", top: "2px" }}>

<Card.Title style={{ marginLeft: "10", color: "purple" , marginTop:'2px'}}>

Please feel free to comment my profile picture.

</Card.Title>

<Card.Text style={{ fontSize: "small", color: "#61dafb", bottom:"2px", display:'flex'}}>

Many thanks in advance.




</Card.Text>

 


</Card.Body>


</Card>     
<br></br>
<br></br>
    </>
  )
}

export default ProfilPhoto

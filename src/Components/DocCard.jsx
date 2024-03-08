import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
  } from 'mdb-react-ui-kit';
 import { Link } from 'react-router-dom';
function DocCard({doctors}) {
    console.log(doctors);
  return (
    <div>
        
         <MDBCard  className='m-4 p-2 text-center bg-light'>
    
      <MDBCardBody>
        <MDBCardTitle className='text-dark fs-4 fw-bolder'>{doctors.name}</MDBCardTitle>
        <MDBCardText className='text-success fs-5 fw-bold'>
          {doctors.hospital}
        </MDBCardText>
        <MDBCardText className='text-primary fs-5 fw-bolder'>
          {doctors.specialty}
        </MDBCardText>
        <MDBCardText className='text-warning fs-5 fw-bolder'>
        &#11088; {doctors.rating}
        </MDBCardText>
      </MDBCardBody>
      <Link className='text-center'  style={{textDecoration:"none"}} to={`view/${doctors.id}`}>
      <MDBBtn className='bg-success fw-bold m-2'>View More</MDBBtn>
      </Link>
    </MDBCard>
      
   
    </div>
  )
}

export default DocCard
import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import DocReview from './DocReview';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardSubTitle,
  MDBBtn
} from 'mdb-react-ui-kit';


function ViewDoctor() {
  const {id}=useParams()
  console.log(id);
  const [docDetails,setdocDetails]=useState({})
  const fetchDocDetails=async()=>{
    const result=await axios.get(`https://doctor-appointment-booking-application.onrender.com/doctors/${id}`)
    console.log(result.data);
    setdocDetails(result.data)
  }
  console.log(docDetails);
  useEffect(()=>{
    fetchDocDetails()
  },[])
  return (
    <div style={{backgroundImage:'url(https://wallpapers.com/images/hd/medical-background-cjge7e89adg6ub8x.jpg)',backgroundRepeat:'no-repeat',backgroundSize:'cover'}} className='bg-success bg-opacity-25'>
        <Row className=''>
        <Col className='m-5 p-5'>
        <MDBCard className='p-2'>
          <Row>
            <Col>
      <MDBCardBody>
        <h1 className='fw-bold text-primary'>{docDetails.name}</h1>
        <MDBCardTitle className='fw-bold fs-3 text-success'>{docDetails.specialty}</MDBCardTitle>
        <MDBCardTitle className='fw-bold fs-4 mt-4'>{docDetails.hospital}</MDBCardTitle>
        
        <MDBCardSubTitle className='fw-bold fs-5 mt-3'><i class="fa-solid fa-address-book" style={{color: '#000000;'}}></i> {docDetails.address}</MDBCardSubTitle>
        <MDBCardSubTitle className='fw-bold fs-5 mt-3'>&#9742; {docDetails.phone}</MDBCardSubTitle>
        <MDBCardSubTitle className='fw-bold fs-5 mt-3'>&#9993; {docDetails.email}</MDBCardSubTitle>
        
        
      </MDBCardBody>
      </Col>
      
      <Col>
      <MDBCardBody className='mt-5'>
      
        <h5 className='fw-bold mt-5'>Available Days: {docDetails.available_days?.map(item=>(
          <span className='text-warning fw-bolder'>{item} | </span>
        ))}</h5>
        <MDBCardTitle className='fw-bold mt-3'>Time: <span className='text-warning fw-bolder fs-5'>{docDetails.available_hours}</span></MDBCardTitle>
        <MDBCardSubTitle className='text-warning fs-5 fw-bold mt-3'>&#11088; {docDetails.rating}</MDBCardSubTitle>
        {/* <MDBBtn className='bg-success fw-bold mt-3'>BOOK NOW </MDBBtn> */}
      
      </MDBCardBody>
      </Col>
      <DocReview review={docDetails.reviews}/>
      </Row>
    </MDBCard>
      
        </Col>
        </Row>

       
    
    </div>
  )
}

export default ViewDoctor
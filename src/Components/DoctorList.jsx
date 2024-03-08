import React, { useEffect, useState } from 'react'
import DocCard from './DocCard';
import axios from 'axios'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function DoctorList() {
  const [DocList,setDocList]=useState([])
  const fetchdata=async()=>{
    const result= await axios.get('https://doctor-appointment-booking-application.onrender.com/doctors')
    console.log(result.data);
    setDocList(result.data)
  }
  useEffect(()=>{
    fetchdata()
  },[])
  return (
   
    <div style={{backgroundImage:'url(https://wallpapers.com/images/hd/medical-background-cjge7e89adg6ub8x.jpg)',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}  className='bg-success bg-opacity-25'>
      <Row>
        {
          DocList.map(item=>(
            <Col  sm={12} md={6} lg={4} xl={3}>
            <DocCard doctors={item}/>
            </Col>
          ))
        }
      </Row>
    </div>
  )
  
}

export default DoctorList
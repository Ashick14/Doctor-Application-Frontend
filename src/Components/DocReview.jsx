import React from 'react'
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardSubTitle,
  MDBCardText,
  MDBCardLink
} from 'mdb-react-ui-kit';
function DocReview(review) {
  return (
    <div>
      <h5 className='m-3 fw-bold'>Reviews: </h5>
      {
          review.review?.map(item=>(
            
<MDBCard className='my-2 fw-bold'>
      <MDBCardBody>
        <MDBCardTitle className='fw-bold fs-4'>Patient Name: {item.patient_name} <span className='fs-6 float-end'>{item.date}</span></MDBCardTitle>
       
        <MDBCardText className='fs-5'>
        <p>"{item.comments}"</p>
        </MDBCardText>
        <MDBCardSubTitle className='text-warning fs-5'>&#11088; {item.rating}</MDBCardSubTitle>
      </MDBCardBody>
    </MDBCard>
      
          //   <MDBListGroup className='border border-1 m-3 p-3' style={{ minWidth: '22rem' }} light>
          //   <MDBListGroupItem>Patient Name: {item.patient_name}</MDBListGroupItem>
          //   <MDBListGroupItem>Date: {item.date}</MDBListGroupItem>
          //   <MDBListGroupItem>Rating: {item.rating}</MDBListGroupItem>
          //   <MDBListGroupItem>Comments: {item.comments}</MDBListGroupItem>
          // </MDBListGroup>
          ))
          }
      
    </div>
  )
}

export default DocReview
import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
import './Header.css'
function Header() {
  return (
    <div>
        <MDBNavbar className='navbar' light bgColor=''>
        <MDBContainer fluid>
          <MDBNavbarBrand href=''>
            <img
              src='https://www.freeiconspng.com/thumbs/physician-icon-png/physician-icon-png-10.png'
              height='40'
              alt=''
              loading='lazy'
            />
            <h5 className='m-2 text-light fw-bold'>Doctor Appointment</h5>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header
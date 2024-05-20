"use client"
import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import Link from 'next/link';

export default function Navbar() {
  const [openBasic, setOpenBasic] = useState(false);

  return (
    <MDBNavbar className='text-white' expand='lg' light bgColor='primary-subtle' >
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>
          <img src="Logo3.png" 
          height='50'
          margin='0 px'
          padding='0'
          alt="Mishrit" /></MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenBasic(!openBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar open={openBasic}>
          <MDBNavbarNav className='text-light mr-auto mb-0 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'>Join us</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                  Categories
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Head Gear</MDBDropdownItem>
                  <MDBDropdownItem link>Handbags</MDBDropdownItem>
                  <MDBDropdownItem link>Shawls</MDBDropdownItem>
                  <MDBDropdownItem link>Accessories</MDBDropdownItem>
                  <MDBDropdownItem link>Decorative Items</MDBDropdownItem>
                  <MDBDropdownItem link>Gifts</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
          </MDBNavbarNav>

          <div className='d-flex me-3 input-group w-auto'>
            {/* <input type='search' className='form-control' placeholder='Type query' aria-label='Search' /> */}
            <Link href={"/signup"} type='button' className='btn btn-primary' >Signup</Link>
            
          </div>
          <div className='d-flex me-3 input-group w-auto'>
            {/* <input type='search' className='form-control' placeholder='Type query' aria-label='Search' /> */}
            <Link href={"/login"} type='button' className='btn btn-primary' >Login</Link>
            
          </div>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
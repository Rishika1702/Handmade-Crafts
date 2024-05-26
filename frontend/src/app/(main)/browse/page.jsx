"use client"
import React, { useEffect, useState } from 'react';
import { MDBFooter, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
  MDBCollapse
} from 'mdb-react-ui-kit';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';


const Browse = () => {

  const [productList, setProductList] = useState([]);

  const fetchProducts = () => {
    fetch('http://localhost:5000/product/getall')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProductList(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchProducts();
  }, [])

  const displayProducts = () => {
    return productList.map(product => (
      <div className="col-md-4">
        <MDBCard>
          <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
          <MDBCardBody>
            <MDBCardText className='text-muted m-0'>
              {product.category}
            </MDBCardText>
            <MDBCardTitle>{product.name}</MDBCardTitle>
            <MDBCardText>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </MDBCardText>
            <MDBBtn href='#'>Button</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </div>
    ))
  }


  return (
    <div className='bg-primary-subtle'>
      <h1 className='text-center'>Browse</h1>
      <div className="container">
        <div className='d-flex justify-content-center'>
          <form className='d-flex pt-5 pb-5 input-group w-75'>
            <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
            <MDBBtn color='primary'>Search</MDBBtn>
          </form>
        </div>
        <div className="row pt-4 gx-3 gy-5">
          {displayProducts()}
        </div>
      </div>



      {/* footer
     <MDBFooter bgColor='info-subtle' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='twitter' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='google' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='linkedin' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='github' />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                Mishrit
              </h6>
              <p>
              Mishrit celebrates the art of handmade knitting, offering a curated collection of artisanal knitted goods. More than just a marketplace, Mishrit is a community where enthusiasts and artisans come together to share their love for knitting. Discover unique, handcrafted treasures and join us in celebrating the beauty of handmade craftsmanship.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Our Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Clothings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Accessories
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  House Decoration
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Gift Hampers
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Join us
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                Lucknow,Uttar Pradesh,India
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                helpsupport@mishrit.in
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> + 91 12345 67890
              </p>
              <p>
                <MDBIcon color='secondary' icon='print' className='me-3' /> +91 09876 54321
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      
      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
        <a className='text-reset fw-bold' href='https://google.com/'>
           mishrit.com
        </a>
      </div>
    </MDBFooter> */}
    </div>

  )
}

export default Browse
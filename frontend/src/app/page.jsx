"use client"
import React, { useState } from 'react';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
import Navbar from './navbar';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';


const page = () => {
  const [showBasic, setShowBasic] = useState(false);
  return (
    <div>
      <Navbar/>
      <header>
        <MDBCarousel showIndicators showControls fade>
          <MDBCarouselItem itemId={1} style={{ height: 500 }}>
            <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg' className='d-block w-100' alt='...' />
            <MDBCarouselCaption>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>

          <MDBCarouselItem itemId={2} style={{ height: 500 }}>
            <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg' className='d-block w-100' alt='...' />
            <MDBCarouselCaption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>

          <MDBCarouselItem itemId={3} style={{ height: 500 }}>
            <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg' className='d-block w-100' alt='...' />
            <MDBCarouselCaption>
              <h5>Third slide label</h5>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarousel>
      </header>
      <MDBContainer>
        <div className="text-center p-5" style={{ width: "100" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, aperiam quo maiores odit molestiae iste fugiat, iusto porro nisi assumenda esse nostrum dicta ullam praesentium inventore animi aliquid? Illo asperiores autem deserunt ab facilis eaque id eius optio ut qui animi voluptatem facere atque, culpa molestiae quia voluptatibus consectetur vero.
        </div>
      </MDBContainer>
      
      {/* products */}
      
      <div className="d-flex justify-content-center">
       <div className="p-2">Flex item 1</div>
        <div className="p-2">Flex item 2</div>
      </div>
      
      {/* footer */}
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
    </MDBFooter>
    
    </div>

  )
}

export default page
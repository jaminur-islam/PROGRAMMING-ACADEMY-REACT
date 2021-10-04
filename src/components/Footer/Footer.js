import React from "react";
import './Footer.css'

const Footer = () => {
  return (
 <footer className="page-footer font-small blue" style={{backgroundColor: '#3F51B5' , color: 'white'}}>          
  <div className="container text-center text-md-left">
    <div className="row">
      <div className="col-md-3 mx-auto">
        <h5 className="font-weight-bold text-uppercase mt-3 mb-4">About Us</h5>
        <hr />
        <ul className="list-unstyled about-ui">
          <p className='text-start text-capitalize'>
          We are always ready to help you, contact us to get any kind of information, our team members are always ready to help you with any drone.
          </p>
          <ul>
            <li><i className="fab fa-facebook-square"></i> </li>
            <li><i className="fab fa-instagram-square"></i> </li>
            <li> <i className="fab fa-linkedin"></i></li> 
          </ul>
        </ul>
      </div>
      <hr className="clearfix w-100 d-md-none" />
      <div className="col-md-3 mx-auto  mt-3">
        <h5 className="font-weight-bold text-uppercase  mb-4">Quick Links</h5>
        <hr />

        <ul className="list-unstyled text-center quick-link">
          <li>
            <a href="#!">About</a>
          </li>

          <li>
            <a href="#!">Services</a>
          </li>
          <li>
            <a href="#!">Privacy Policy</a>
          </li>
          <li>
            <a href="#!">Help</a>
          </li>
          <li>
            <a href="#!">Contact</a>
          </li>
        </ul>
      </div>
      <hr className="clearfix w-100 d-md-none" />

      <div className="col-md-3 mx-auto" style={{width: '250px'}}>

        <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Contact Info</h5>
        <hr />
        <ul className="list-unstyled text-start contact-ui">
          <li className='d-flex justify-content-evenly'>
            <i className="fas fa-map-marker-alt me-3"></i>
            <a href="#!"> 657 linda street PA 18280 USA</a>
          </li>

          <li className='mt-2'>
            <i className="fas fa-phone-alt me-3"></i>
            <a href="#!">+1232 565 9992 <br /> +1234 333 3434</a>
          </li>

          <li className='d-flex justify-content-evenly mt-2 ms-5'>
          <i className="far fa-envelope me-2"></i>
            <a href="#!"> ProgrammingAcademy@gmail.com</a>
          </li>
        </ul>
      </div>
      <hr className="clearfix w-100 d-md-none" />
    </div>
  </div>
  <div className="footer-copyright text-center py-3">© 2020 Copyright:
    <a style={{color:'blue'}} href="https://web.programming-hero.com/dashboard">Propramming Academy </a>
  </div>
</footer>
  );
};

export default Footer;

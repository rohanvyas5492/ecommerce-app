import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import {FaTwitter,FaFacebookF,FaLinkedin} from "react-icons/fa";
import {RiInstagramFill} from "react-icons/ri";
import {GrPinterest} from "react-icons/gr";
import {IoMdCall} from "react-icons/io";
import {IoLocationOutline,IoMailOutline} from "react-icons/io5";

const Footer = () => {
  return (
    <footer>
                <Container>
                    <Row className="content">
                        <Col>
                            <div className="footer-column">
                                <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim pulvinar massa, eu aliquam massa consequat eu. Nam vel mauris porttitor diam fringilla porta.</p>
                                <ul className='social-media-links'>
                                    <li><FaFacebookF /></li>
                                    <li><FaTwitter /></li>
                                    <li><RiInstagramFill /></li>
                                    <li><FaLinkedin /></li>
                                    <li><GrPinterest /></li>
                                </ul>  
                            </div>
                        </Col>
                        <Col>
                            <div className="footer-column">
                                <p>Online Shopping</p>
                                <p><span>Men's T-shirts</span></p>
                                <p><span>Women Wear</span></p>
                                <p><span>Winter Collection</span></p>
                                <p><span>Hooded T-shirts</span></p>
                                <p><span>Streetwear Collections</span></p>
                            </div>
                        </Col>
                        <Col>
                            <div className="footer-column">
                                <p>Customer Policies</p>
                                <p><span>About Us</span></p>
                                <p><span>Terms & Conditions</span></p>
                                <p><span>Shipping & Returns Policy</span></p>
                                <p><span>Cancellation & Refund Policy</span></p>
                                <p><span>Contact Us</span></p>
                            </div>
                        </Col>
                        <Col>
                            <div className="footer-column">
                                <p>Store Information</p>
                                <p className='store-info'><IoLocationOutline /><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span></p>
                                <p className='store-info'><IoMdCall /><span>Call Us: +91 1234567890</span></p>
                                <p className='store-info'><IoMailOutline /><span>Email Us: info@mail.com</span></p>
                            </div>
                        </Col>
                    </Row>
                    
                </Container>
                <div className='content'>
                        <div className="col">
                            <p>Copyright © All rights reserved.</p>
                        </div>
                    </div>
            </footer>
  )
}

export default Footer

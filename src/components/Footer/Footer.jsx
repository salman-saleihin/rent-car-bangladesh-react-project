import React from 'react';
import { Link } from 'react-router-dom';

import { Container , Row , Col , ListGroup , ListGroupItem } from 'reactstrap';
import "../../styles/Footer.css"

const quickLinks = [
    {
        path: '/about',
        display: 'About'
    } ,

    {
        path: '#',
        display: 'Privacy Policy'
    } ,

    {
        path: '/cars',
        display: 'Car Listing'
    } ,

    {
        path: '/blogs',
        display: 'Blog'
    } ,

    {
        path: '/contact',
        display: 'Contact'
    } 

]

const Footer = () => {

    const date = new Date()
    const year = date.getFullYear() 

    return <footer className="footer">
        <Container>
            <Row>
                <Col lg='4' md='4' sm='12'>

                     <div className="logo footer__logo">
                        <h1>
                            <Link to='/home' className='d-flex align-items-center gap-3'>
                            <i class="ri-car-line"></i>
                            <span>Rent Car <br /> Service</span>
                            </Link>
                        </h1>
                    </div>

                    <p className="footer__logo-content">
                            Rent A Car service is a service which provides you with best cars to Rent for Hours/Days wise. We're the first to give this types of service in Bangladesh. Soon we'll Upgrade more features in our service. Till then Stay with Rent Car BD. 
                    </p>

                </Col>

                <Col lg='2' md='4' sm='6'>
                    <div className='mb-4'>
                            <h5 className="footer__link-title">
                                Quick Links
                            </h5>

                            <ListGroup>
                                {
                                    quickLinks.map((item , index) => (
                                        <ListGroupItem key={index} className='p-0 mt-3 quick__link'>
                                            <Link to={item.path}> 
                                                {item.display}
                                            </Link>
                                        </ListGroupItem>
                                    ))
                                }
                            </ListGroup>
                    </div>
                </Col>

                <Col lg='3' md='4' sm='6'>
                                <div className="mb-4">
                                    <h5 className="footer__link-title mb-4">
                                        Head Office
                                    </h5>
                                    <p className="office__info">
                                        House:12/14 , Road-3 , Block-B , Nobodoy Housing, Mohammadpur , Dhaka.
                                    </p>
                                    <p className="office__info">
                                        Phone: +88-01731-369-359
                                    </p>
                                    <p className="office__info">
                                        E-mail: saleihinkhan@gmail.com
                                    </p>
                                    <p className="office__info">
                                        Office-Time: 06:00 - 23:59 [Sat-Thu]
                                    </p>
                                </div>
                </Col>

                <Col lg='3' md='4'>
                    <div className="mb-4">
                        <h5 className="footer__link-title">
                            Newsletter
                        </h5>
                        
                        <p className="section__description">
                            Subscribe our newsletter
                        </p>
                        
                        <div className="newsletter">
                            <input type="email" placeholder='Please Enter Your E-mail' />
                            <span><i class="ri-send-plane-line"></i></span>
                        </div>
                    </div>
                </Col>

                <Col lg='12'>
                        <div className="footer__bottom">
                            <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                                <i class="ri-copyright-line"></i> Copyright {year} , Developed By Saleihin Khan. All Rights Reserved.
                            </p>
                        </div>
                </Col>
            </Row>
        </Container>
    </footer>
};

export default Footer;
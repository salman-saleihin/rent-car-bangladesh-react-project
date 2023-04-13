
import React from 'react';

import { Container , Row , Col , Form , FormGroup } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import { Link } from 'react-router-dom';

import "../styles/contact.css" ;

const socialLinks = [
    {
        url: "https://www.facebook.com/saleihin/" ,
        icon: "ri-facebook-line"
    },
    {
        url: "https://www.instagram.com/jackfrost_bro_official/" ,
        icon: "ri-instagram-line"
    },
    {
        url: "https://github.com/salman-saleihin" ,
        icon: "ri-github-fill"
    },
    {
        url: "https://www.linkedin.com/in/saleihin-khan/" ,
        icon: "ri-linkedin-line"
    }
]

const Contact = () => {
    return <Helmet title='Contact'>
            <CommonSection title='Contact'/>
            <section>
                <Container>
                    <Row>
                        <Col lg='7' md='7'>
                            <h6 className="fw-bold mb-4">
                                Get In Touch
                            </h6>

                            <Form>
                                <FormGroup className='contact__form'>
                                    <input type="text" placeholder='Your Name' />
                                </FormGroup>
                                <FormGroup className='contact__form'>
                                    <input type="email" placeholder='Email' />
                                </FormGroup>

                                <FormGroup className='contact__form'>
                                    <textarea rows="4" className='textarea' placeholder='Type Your Message Here ..'></textarea>
                                </FormGroup>

                                <button className="contact__btn" type='submit'>Send Message</button>
                                
                            </Form>
                        </Col>

                        <Col lg='5' md='5'>
                                <div className="contact__info">
                                    <h6 className="fw-bold">Contact Information</h6>
                                    <p className="section__description mb-0">
                                        12/14 , Road-03 , Block-B ,Beside Shuchona Community Center, Mohammadpur , Dhaka , Bangladesh.
                                    </p>

                                    <div className="d-flex align-items-center gap-2">
                                        <h6  className='mb-0 fs-6'>Phone :</h6>
                                        <p className="section__description mb-0">+88-01741-367947</p>
                                    </div>

                                    <div className="d-flex align-items-center gap-2">
                                        <h6 className='mb-0 fs-6'>Email :</h6>
                                        <p className="section__description mb-0">saleihinkhan@gmail.com</p>
                                    </div>

                                    <h6 className="fw-bold mt-4">Follow Us</h6>

                                    <div className="d-flex align-items-center gap-4 mt-3">
                                        {
                                            socialLinks.map((item , index)=> (
                                                <Link to={item.url} key={index} className='social__link-icon'><i class={item.icon}></i></Link>
                                            ))
                                        }
                                    </div>
                                </div>
                        </Col>
                    </Row>
                </Container>
            </section>
    </Helmet>
};

export default Contact;
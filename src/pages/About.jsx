import React from 'react';

import Helmet from '../components/Helmet/Helmet';

import CommonSection from '../components/UI/CommonSection';
import AboutSection from '../components/UI/AboutSection';
import { Container , Row , Col } from 'reactstrap';
import BecomeDriverSection from '../components/UI/BecomeDriverSection';

import driveImg from "../assets/all-images/drive.jpg" ; 
import OurMember from '../components/UI/OurMember';
import "../styles/about.css" ;


const About = () => {
    return <Helmet title="About">
        <CommonSection title="About Us"></CommonSection>
        <AboutSection aboutClass= "aboutPage" ></AboutSection>

        <section className="about__page-section">
            <Container>
                <Row>
                    <Col lg='6' md='6' sm='12'>
                            <div className="about__page-img">
                                <img src={driveImg} alt="" className='w-100 rounded-3' />
                            </div>
                    </Col>

                    <Col lg='6' md='6' sm='12'>
                        <div className="about__page-content">
                            <h2 className="section__title">
                                We Are Committed to Provide Safe Ride Solutions
                            </h2>

                            <p className='section__description'>
                                Our Service is to provide everyone a safe ride to their destinations. All our Drivers are well skilled and professionals as well as our Car Conditions are also very Good. We want to provide the Best Car Rental Service in all over Bangladesh. Customers Satisfaction is our main Aim.
                            </p>

                            <p className='section__description'>
                              This Is our Responsibility To Give You the Satisfaction of Riding with our Car. You may Book our Cars any time 24/7 to go anywhere in Bangladesh. we have many different cars and drivers ready to be in your service.
                            </p>

                            <div className='d-flex align-items-center gap-3 mt-4' >

                                <span className='fs-4'><i class="ri-phone-line"></i> </span>

                                <div>
                                    <h6 className="section__subtitle"> Need Any Help?</h6>
                                    <h4>+8801731-369359</h4>
                                </div>

                            </div>

                            
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

        

        <BecomeDriverSection></BecomeDriverSection>


        <section>
            <Container>
                <Row>
                    <Col lg='12' className='mb-5 text-center' >
                        <h6 className="section__subtitle"> Experts </h6>
                        <h4 className="section__title"> Team Members</h4>
                    </Col>
                    <OurMember></OurMember>
                </Row>
            </Container>
        </section>

    </Helmet>
};

export default About;
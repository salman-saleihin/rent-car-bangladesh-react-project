import React from 'react';
import "../../styles/about-section.css" ;
import { Container , Row , Col } from 'reactstrap';
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png" ;


const AboutSection = () => {
    return <section>
        <Container>
            <Row>
                <Col lg='6' md='6'>
                    <div className="about__section-content">
                        <h4 className="section__subtitle">About Us</h4>
                        <h2 className="section__title">
                            Welcome to Rent Car Service Bangladesh
                        </h2>
                        <p className="section__description">
                            We are the very first company to provide the people of Bangladesh rent car for daily or hourly services. Rent car with very good condition in your range. cheap to expensive we have a lot of cars for your Service and you may choose any preferable car you want to ride!! inside of the city to outside of the city you can travel with our car by very simple condition and with very friendly budget!
                        </p>

                        <div className="about__section-item d-flex align-items-center ">
                                <p className="section__description d-flex align-items-center gap-2">
                                    <i class="ri-checkbox-circle-line"></i> Friendly Budget Cars
                                </p>
                                <p className="section__description d-flex align-items-center gap-2">
                                    <i class="ri-checkbox-circle-line"></i> Dream Car Ride
                                </p>
                        </div>

                        <div className="about__section-item d-flex align-items-center ">
                                <p className="section__description d-flex align-items-center gap-2">
                                    <i class="ri-checkbox-circle-line"></i> Rent Any Car Any Time
                                </p>
                                <p className="section__description d-flex align-items-center gap-2">
                                    <i class="ri-checkbox-circle-line"></i> Safe Travel
                                </p>
                        </div>

                    </div>
                </Col>

                <Col lg='6' md='6'>
                    <div className="about__img">
                        <img src={aboutImg} alt="" className='w-100'/>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
};

export default AboutSection;
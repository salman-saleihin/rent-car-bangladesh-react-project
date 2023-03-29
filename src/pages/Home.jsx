import React from 'react';
import { Container , Row , Col } from 'reactstrap';

import Helmet from '../components/Helmet/Helmet';
import AboutSection from '../components/UI/AboutSection';
import FindCarForm from '../components/UI/FindCarForm';
import HeroSlider from '../components/UI/HeroSlider';
import ServicesList from '../components/UI/ServicesList';


const Home = () => {
    return <Helmet title='Home'>

    {/* ============== HERO SECTION ============== */}

        <section className="p-0 hero__slider-section">
           <HeroSlider></HeroSlider>
       

        <div className="hero__form">
            <Container>
                <Row className="form__row">
                    <Col lg='4' md='4'>
                        <div className="find__cars-left">
                            <h2>Find Your Best Car Here</h2>

                        </div>
                    </Col>

                    <Col lg='8' md='8' sm='12'>
                        <FindCarForm></FindCarForm>
                    </Col>
                </Row>
            </Container>
        </div>
    </section>


    {/* ============== ABOUT SECTION ============== */}

    <AboutSection></AboutSection>

    {/* ============== Services SECTION ============== */}

    <section>
        <Container>
            <Row>
                <Col lg='12' className='mb-5 text-center'>
                    <h6 className="section__subtitle"> See Our </h6>
                    <h2 className="section__title">Popular Services</h2>
                </Col>

                <ServicesList></ServicesList>
            </Row>
        </Container>
    </section>

    </Helmet>
};

export default Home;
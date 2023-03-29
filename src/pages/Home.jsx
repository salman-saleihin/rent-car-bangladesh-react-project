import React from 'react';
import { Container , Row , Col } from 'reactstrap';

import Helmet from '../components/Helmet/Helmet';
import FindCarForm from '../components/UI/FindCarForm';
import HeroSlider from '../components/UI/HeroSlider';


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
    </Helmet>
};

export default Home;
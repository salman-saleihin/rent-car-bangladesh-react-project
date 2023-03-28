import React from 'react';
import Helmet from '../components/Helmet/Helmet';
import HeroSlider from '../components/UI/HeroSlider';

const Home = () => {
    return <Helmet title='Home'>
        <section className="p-0 hero__slider-section">
           <HeroSlider></HeroSlider>
        </section>
    </Helmet>
};

export default Home;
import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { Container } from 'reactstrap';
import '../../styles/hero-slider.css' ;

const settings = {
    fade: true ,
    speed: 2000 ,
    autoplaySpeed: 3000,
    infinite: true ,
    autoplay:true,
    slidesToShow: 1,
    slidesToScroll: 1 ,
    pauseOnHover: false ,
}

const HeroSlider = () => {
    return <Slider {... settings } className='hero__slider'>
            <div className="slider__item slider__item-01 mt-0">
                <Container>

                    <div className="slider__content">

                        <h4 className="text-light mb-3">
                            For Rent BDT.8500 per Day
                        </h4>

                        <h1 className='text-light mb-4'>Reserve now and get 50% off</h1>

                        <button className="btn reserve__btn mt-4">
                            <Link to='/cars'>Reserve Now</Link>
                        </button>

                    </div>

                </Container>
            </div>

            <div className="slider__item slider__item-02 mt-0">
                <Container>

                    <div className="slider__content">

                        <h4 className="text-light mb-3">
                            For Rent BDT.8500 per Day
                        </h4>

                        <h1 className='text-light mb-4'>Reserve now and get 50% off</h1>

                        <button className="btn reserve__btn mt-4">
                            <Link to='/cars'>Reserve Now</Link>
                        </button>

                    </div>

                </Container>
            </div>

            <div className="slider__item slider__item-03 mt-0">
                <Container>

                    <div className="slider__content">

                        <h4 className="text-light mb-3">
                            For Rent BDT.8500 per Day
                        </h4>

                        <h1 className='text-light mb-4'>Reserve now and get 50% off</h1>

                        <button className="btn reserve__btn mt-4">
                            <Link to='/cars'>Reserve Now</Link>
                        </button>

                    </div>

                </Container>
            </div>
    </Slider>
};

export default HeroSlider;
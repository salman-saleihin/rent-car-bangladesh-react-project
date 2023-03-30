import React from 'react';
import Slider from 'react-slick';

import ava01 from "../../assets/all-images/ava-1.jpg" ;
import ava02 from "../../assets/all-images/ava-2.jpg" ;
import ava03 from "../../assets/all-images/ava-3.jpg" ;
import ava04 from "../../assets/all-images/ava-4.jpg" ;

const Testimonial = () => {

    const settings = {

        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        swipeToSlide: true,
        slidesToShow: 3 ,
        slidesToScroll: 1 ,
        responsive: [
            {
                breakpoint:992,
                settings: {
                    slidesToShow:2,
                    slidesToScroll: 1,
                    dots: true,
                    infinite: true
                }
            },
            {
                breakpoint:576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },

        ]



    }


    return <Slider {... settings}>

        <div className="testimonial py-4 px-3">
            <p className="section__description">
                Working as a Professional Driver for a long Time. Learnt from Uttar-Bongo Driving School and my instructor was Jamal. Who was satisfied after a certain Time. I've been Driving cars on the street of America. Now I am Working with Rent Car Bangladesh.
            </p>

            <div className="mt-3 d-flex align-items-center gap-4">
                <img src={ava01} alt="" className='w-25 h-25 rounded-2'/>

                <div>
                    <h6 className="mb-0 mt-3"> Arpita Haque </h6>
                    <p className="section__description">Employee</p>
                </div>
            </div>
        </div>


        <div className="testimonial py-4 px-3">
            <p className="section__description">
               I have stayed in Australia. there was many platforms like this. we could rent car anytime we wanted any any of our preferred beautiful cars we could have used for few days. Now it's Good To see Rent Car Bangladesh is providing the same service in Bangladesh!
            </p>

            <div className="mt-3 d-flex align-items-center gap-4">
                <img src={ava02} alt="" className='w-25 h-25 rounded-2'/>

                <div>
                    <h6 className="mb-0 mt-3"> Mubtaseem Anjum </h6>
                    <p className="section__description">Customer</p>
                </div>
            </div>
        </div>


        <div className="testimonial py-4 px-3">
            <p className="section__description">
                Wonderful Service from Rent Car Bangladesh. They are providing a service to help people to travel one part of Bangladesh to other in a cheap way. we can now rent cars from these services anytime we want. Best wishes for upcoming customers!! they are available for all over Bangladesh.
            </p>

            <div className="mt-3 d-flex align-items-center gap-4">
                <img src={ava03} alt="" className='w-25 h-25 rounded-2'/>

                <div>
                    <h6 className="mb-0 mt-3"> Shariar Rohan </h6>
                    <p className="section__description">Customer</p>
                </div>
            </div>
        </div>


        <div className="testimonial py-4 px-3">
            <p className="section__description">
                Recently I wanted a car to go on a vacation with my chicken So i rented a car from Rent Car Bangladesh. Their service and car conditions were great. My chicken was satisfied with me and the car i rented from here. from now i'll always rent car from here. thank you rent car Bangladesh for this type of step!
            </p>

            <div className="mt-3 d-flex align-items-center gap-4">
                <img src={ava04} alt="" className='w-25 h-25 rounded-2'/>

                <div>
                    <h6 className="mb-0 mt-3"> Abtahi Samin </h6>
                    <p className="section__description">Customer</p>
                </div>
            </div>
        </div>

    </Slider>
};

export default Testimonial;
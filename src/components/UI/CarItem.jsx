
import React from 'react';
import '../../styles/car-item.css'
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';



const CarItem = (props) => {

    const { imgUrl , model , carName , automatic , speed , price } = props.item ;

    return <Col lg='4' md='4' sm='6' className='mb-5'>
            <div className="car__item">
                <div className="car__img">
                    <img src={imgUrl} alt="" className='w-100' />
                </div>

                <div className="car__item-content mt-4">
                        <h4 className="section__title text-center"> {carName} </h4>
                        <h6 className="rent__price text-center mt-2"> ৳ {price}.00 <span>/ Day</span> </h6>

                        <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
                            <span className='d-flex align-items-center gap-1'>
                                <i class="ri-roadster-line"></i> {model} 
                            </span>

                            <span className='d-flex align-items-center gap-1'>
                                <i class="ri-settings-5-line"></i> {automatic} 
                            </span>

                            <span className='d-flex align-items-center gap-1'>
                                <i class="ri-timer-flash-line"></i> {speed} 
                            </span> 
                        </div>

                        <button className="car__item-btn car__btn-rent w-50">
                                <Link to={`/cars/${carName}`}> Rent </Link>
                        </button>

                        <button className="car__item-btn car__btn-details w-50">
                                <Link to={`/cars/${carName}`}> More Info </Link>
                        </button>
                </div>
            </div>
    </Col>
};

export default CarItem;


import React from 'react';
import "../../styles/booking-form.css" ;
import { Form , FormGroup } from 'reactstrap';

const BookingForm = () => {

    const submitHandler = event =>{
        event.preventDefault();
    }

    return <Form onSubmit={submitHandler}>

        <FormGroup className='booking__form d-inline-block me-4 mb-b' >
                <input type="text" placeholder='First Name'/>
        </FormGroup>
        <FormGroup className='booking__form d-inline-block ms-1 mb-b' >
                <input type="text" placeholder='Last Name'/>
        </FormGroup>

        <FormGroup className='booking__form d-inline-block me-4 mb-b' >
                <input type="email" placeholder='Email'/>
        </FormGroup>
        <FormGroup className='booking__form d-inline-block ms-1 mb-b' >
                <input type="number" placeholder='Mobile Number'/>
        </FormGroup>

        <FormGroup className='booking__form d-inline-block me-4 mb-b' >
                <input type="text" placeholder='Form Address'/>
        </FormGroup>
        <FormGroup className='booking__form d-inline-block ms-1 mb-b' >
                <input type="text" placeholder='To Address'/>
        </FormGroup>

        <FormGroup className='booking__form d-inline-block me-4 mb-b' >
                <select name="" id="">
                    <option value="1 person"> 1 Person</option>
                    <option value="2 person"> 2 Person</option>
                    <option value="3 person"> 3 Person</option>
                    <option value="4 person"> 4 Person</option>
                    <option value="6+ person">6+ Person </option>
                </select>
        </FormGroup>
        <FormGroup className='booking__form d-inline-block ms-1 mb-b' >
                <select name="" id="">
                    <option value="1 luggage"> 1 Luggage</option>
                    <option value="2 luggage"> 2 Luggage</option>
                    <option value="3 luggage"> 3 Luggage</option>
                    <option value="4 luggage"> 4 Luggage</option>
                    <option value="5+ luggage">5+ Luggage</option>
                </select>
        </FormGroup>

        <FormGroup className='booking__form d-inline-block me-4 mb-b' >
                <input type="date" placeholder='Journey Date'/>
        </FormGroup>
        <FormGroup className='booking__form d-inline-block ms-1 mb-b' >
                <input type="time" placeholder='Journey Time' className='time__picker'/>
        </FormGroup>

        <FormGroup>
                <textarea rows={5} type="textarea" className='textarea' placeholder='Write'></textarea>
        </FormGroup>

        

    </Form>
};

export default BookingForm;
import React, { useEffect } from 'react';
import { Container , Row , Col , Form , FormGroup , Input } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';

import { useParams } from 'react-router-dom';
import blogData from '../assets/data/blogData';

import "../styles/blog-details.css" ;

import cava1 from "../assets/all-images/cava-1.jpg" ;
import commentImg from "../assets/all-images/cava-2.jpg" ;
import cava3 from "../assets/all-images/cava-3.jpg" ;



const BlogDetails = () => {

    const { slug } = useParams() ;
    const blog = blogData.find( (blog) => blog.title === slug);

    useEffect(()=> {
        window.scrollTo(0, 0)
    } , [blog])

    return <Helmet title={blog.title} >
        <section>
        <Container>
            <Row>
                <Col lg='8' md='6' >
                        <div className="blog__details">
                            <img src={blog.imgUrl} alt="" />
                            <h2 className='section__title'>{blog.title}</h2>

                            <div className="blog__publisher d-flex align-items-center mb-4 gap-4">


                                    <span className="blog__author">
                                        <i class="ri-user-line"></i> {blog.author}
                                    </span>

                                    <span className="d-flex align-items-center gap-1 section__description">
                                         <i class="ri-calendar-line"></i> {blog.date}
                                    </span>

                                    <span className="d-flex align-items-center gap-1 section__description">
                                          <i class="ri-time-line"></i> {blog.time}
                                    </span>


                            </div>

                            <p className="section__description">
                                {blog.description}
                            </p>

                            <h6 className='ps-5 fw-normal'>
                                <blockquote className='fs-4'>
                                    {blog.quote}
                                </blockquote>
                            </h6>

                            <p className="section__description">
                                {blog.description}
                            </p>
                        </div>

                        <div className="comment__list mt-5">
                            <h4 className="mb-5">3 Comments</h4>

                            <div className="single__comment d-flex gap-3">
                                <img src={commentImg} alt="" />
                                <div className="comment__content">
                                    <h6 className='fw-bold'>Tahsina Toushin</h6>
                                    <p className="section__description mb-0">11 January, 2023</p>
                                    <p className="section__description">Definitely it was an amazing experience from them. it was my first time Hire a car from online. their service was really amazing!!!</p>
                                    <span className="replay d-flex align-items-center gap-1">
                                        <i class="ri-reply-line"></i> Replay
                                    </span>
                                </div>
                            </div>
                        
                        {/* ==================/ Comment Form \================= */}

                        <div className="leave__comment-form mt-5">
                            <h4>Leave a Comment</h4>
                            <p className="section__description">
                                You must sign-in to make or comment on a post
                            </p>

                            <Form>
                                <FormGroup className='d-flex gap-3'>
                                        <Input type="text" placeholder='Full Name' />
                                        <Input type="email" placeholder='Email' />
                                </FormGroup>

                                <FormGroup>
                                    <textarea rows="3" className='py-2 px-3 w-100' placeholder='Comment ...'></textarea>
                                </FormGroup>

                                <button className="btn mt-3 comment__btn">Post a Comment</button>
                            </Form>


                        </div>
                             
                    </div>
                </Col>
            </Row>
        </Container>
        </section>
    </Helmet>
};

export default BlogDetails;
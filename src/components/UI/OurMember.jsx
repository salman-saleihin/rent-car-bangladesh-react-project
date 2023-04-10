 
 import React from 'react';
 import '../../styles/our-member.css' ;
 import { Col } from 'reactstrap';
 import { Link } from 'react-router-dom';

import ava05 from "../../assets/all-images/members/ava-5.jpg" ;
import ava06 from "../../assets/all-images/members/ava-6.jpg" ;
import ava07 from "../../assets/all-images/members/ava-7.jpg" ;
import ava08 from "../../assets/all-images/members/ava-8.jpg" ;

 const OUR__MEMBERS = [
    {
        name : "Saleihin Khan" ,
        experience : "Founder and Former CEO" ,
        fbUrl : 'https://www.facebook.com/saleihin' ,
        instUrl : "https://www.instagram.com/jackfrost_bro_official/" ,
        twitUrl : "#" ,
        linkedinUrl : 'https://www.linkedin.com/in/saleihin-khan/' ,
        imgUrl : ava05 ,
        
    } ,
    {
        name : "Sharaban Tohura" ,
        experience : "Co-Founder and CEO" ,
        fbUrl : 'https://www.facebook.com/rukaiya.ruku.9615' ,
        instUrl : "https://www.instagram.com/_sharaban_tohura/" ,
        twitUrl : "#" ,
        linkedinUrl : '#' ,
        imgUrl : ava06 ,
        
    } ,
    {
        name : "Tasnim Feardous" ,
        experience : "Advisor" ,
        fbUrl : 'https://www.facebook.com/afsin.khan.52' ,
        instUrl : "https://www.instagram.com/nisfa_nahk/" ,
        twitUrl : "#" ,
        linkedinUrl : 'https://www.linkedin.com/in/tasnim-feardous-khan-a4892575/' ,
        imgUrl : ava07 ,
        
    },
    {
        name : "Reshad Sultan Hriddo" ,
        experience : "Head Of The Team-Management" ,
        fbUrl : 'https://www.facebook.com/hudaiiiiiiii' ,
        instUrl : "https://www.instagram.com/hudaaiiiii" ,
        twitUrl : "#" ,
        linkedinUrl : 'https://www.linkedin.com/in/shahriar-rohan-62125b1b7/' ,
        imgUrl : ava08 ,
        
    }
 ]

 const OurMember = () => {
    return <>
        {
                 OUR__MEMBERS.map((item , index) => (
                    <Col lg='3' md='3' sm='4' xs='6' key={index} className='mb-4'>

                        <div className="single__member">
                                <div className="single__member-img">
                                    <img src={item.imgUrl} alt="" className='member-img'/>

                                    <div className="single__member-social">
                                        <Link to={item.fbUrl}><i class="ri-facebook-line"></i></Link>

                                        <Link to={item.instUrl}><i class="ri-instagram-line"></i></Link>

                                        <Link to={item.twitUrl}><i class="ri-twitter-line"></i></Link>

                                        <Link to={item.linkedinUrl}><i class="ri-linkedin-line"></i></Link>

                                    </div>
                                </div>

                                <h6 className='text-center mb-0 mt-3 '>{item.name}</h6>
                                <p className="section__description text-center">{item.experience}</p>
                        </div>

                     </Col>
                ))
        }
    </>
 };
 
 export default OurMember;
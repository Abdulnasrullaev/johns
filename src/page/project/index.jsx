import React from 'react';
import {Footer, Projected} from "./style";
import image1 from '../../assest/IMAGE (1).png'
import image2 from '../../assest/IMAGE (2).png'
import image3 from '../../assest/IMAGE (3).png'
import image4 from '../../assest/IMAGE (4).png'
import image5 from '../../assest/IMAGE (5).png'
import image6 from '../../assest/IMAGE (6).png'
import image7 from '../../assest/IMAGE (7).png'
import image8 from '../../assest/IMAGE (8).png'
import image9 from '../../assest/IMAGE (9).png'
import image10 from '../../assest/IMAGE (10).png'
import facebook from '../../assest/facebook.png'
import instagram from '../../assest/instagram.png'
import behance from '../../assest/behance.png'
import mail from '../../assest/mail.png'
import twitter from '../../assest/twitter.png'
import world from '../../assest/world.png'


const Project = () => {
    return (
        <>
            <Projected>
                <p className='title'>
                    my projects
                </p>

                <div className='img-wrapper'>
                    <div className='images'>
                        <img style={{width: 'fit-content'}}
                             src={image1}
                             className='image1'/>
                    </div>
                    <div className='images'>
                        <img style={{width: '626px'}}
                             src={image2}
                             className='image2'/>
                    </div>
                    <div className='images'>
                        <img src={image3}
                             className='image1'/>
                    </div>
                    <div className='images'>
                        <img style={{width: '675px auto'}}
                             src={image4}/>
                    </div>
                    <div className='images'>
                        <img
                            style={{width: "674px"}}
                            src={image5}/>
                    </div>
                    <div className='images'>
                        <img src={image6}/>
                    </div>
                    <div className='images'>
                        <img src={image7}/>
                    </div>
                    <div className='images'>
                        <img  src={image8}/>
                    </div>
                    <div className='images'>
                        <img
                            src={image9}/>
                    </div>
                    <div className='images'>
                        <img src={image10}/>
                    </div>
                </div>
            </Projected>
            <Footer>
                <div className='card-wrappers'>
                    <p>
                        <span>Get in touch</span> <br/>
                        Let's work together. Submit your
                        details in this form and I will
                        get back to you ASAP.
                    </p>
                    <div className='card'>
                        <input placeholder='Name'
                               className='text'/> <br/>
                        <input placeholder='Email address'
                               type='email'/> <br/>
                        <input
                            placeholder='Budget (optional)'
                            className='text'/> <br/>
                        <textarea
                            placeholder='Describe your project'/>
                    </div>
                </div>
                <div className='links'>
                    <p>
                        John Smith
                    </p>
                    <div className='link-wrap'>
                        <img src={mail}/>
                        <img src={twitter}/>
                        <img src={facebook}/>
                        <img src={behance}/>
                        <img src={world}/>
                        <img src={instagram}/>

                    </div>
                </div>
            </Footer>
        </>
    )
        ;
};

export default Project;
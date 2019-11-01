import React from 'react';

import './aboutUs.scss';

const AboutUs = () => {
    return (
        <section className='about__wrapper'>
            <div className='center-text'>
            <h1 className='about__title'>
                MarketHub - Where people go for shopping!
            </h1>
            </div>
         
            <div className='row'>
                <div className='row__text'>
                    <h3 className= 'para-header'> We do what we know how to best!</h3>
                    <p className='paragraph'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                         when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                      
                          </p>
                    <h3 className='para-header'> Best place to go for shopping</h3>
                    <p className='paragraph'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                         when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                       
                          </p>
                </div>
                <div className='row__image'>
                    <div className='composition'>
                        <img src='images/shopping1.jpg' alt='photo1' className='composition__photo composition__photo--1' />
                        <img src='images/shopping2.jpg' alt='photo2' className='composition__photo composition__photo--2' />
                        <img src='images/shopping3.jpg' alt='photo3' className='composition__photo composition__photo--3' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs;
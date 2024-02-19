import React from 'react'
import './Hero.scss';
import heroImg from "../../../assets/images/amico.png";


const Hero = () => {

    

  return (
    <section className="hero">
        <div className="container">
            <div className="hero__main-box">
                <div className="hero__content-box">
                    <h1 className='hero__title'>
                    Work at the speed
of thought
                    </h1>
                    <p className='hero__description'>
                    Tools, tutorials, design and innovation experts, all in one place! The most intuitive way to imagine your next user experience.
                    </p>

                    <div className='hero__buttons-box'>
                        <button className='hero__button'>
                            Get started
                        </button>

                        <div className='hero__video-box'>
                        <svg width="20px" height="17px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21.4086 9.35258C23.5305 10.5065 23.5305 13.4935 21.4086 14.6474L8.59662 21.6145C6.53435 22.736 4 21.2763 4 18.9671L4 5.0329C4 2.72368 6.53435 1.26402 8.59661 2.38548L21.4086 9.35258Z" fill="#02897A"></path> </g></svg>                        <a href="#">Watch the Video</a>
                        </div>
                    </div>
                </div>

                <div className="hero__image-box">
                    <img className='hero__image' src={heroImg} alt="hero" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero



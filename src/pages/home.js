import React, {useRef, useEffect, useState} from 'react'
import {Link, Outlet} from 'react-router-dom'
import '../css/style.css';
import '../css/theme-icons.css';
import '../css/animation.css';
import banner from '../assets/banner-img.png';
import Footer from '../layouts/Footer.js';

function Home() {
    
    
    useEffect(() => {
        const elements = document.querySelectorAll('.fade-in-element');
    
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('fadeInUp')
            }
          });
        });
    
        elements.forEach((element) => {
          observer.observe(element);
        });
    
        return () => {
          elements.forEach((element) => {
            observer.unobserve(element);
          });
        };
      }, []);


    return (
        <div className='wrapper'>
            <section className="panel fitscreenSec bannerSec blueBg">

                <div className="container">

                    <div className="bannerImg">
                        <Link to='/agency'>
                            <img src={banner} alt="Banner-Logo" />
                        </Link>
                        


                    </div>

                </div>

            </section>



            <section className="panel fitscreenSec blueBg workSec overflow--scroll">

                <div className="container">

                    <h4 className="secTitle text-center">The world see’s us all differently, we just make <br />sure your audience
                        loves you..</h4>

                    <div className="grid" style={{gridGap:'0', backgroundImage: 'none'}}>

                        <a className="grid-item" href="work.html#temple">

                            <div className="workImg">

                                <img src={require("../assets/work-img-01.jpg")} alt="" />

                            </div>

                        </a>

                        <a className="grid-item" href="work.html#gate-of-yemen">

                            <div className="workImg">

                                <img src={require("../assets/work-img-02.jpg")} alt="" />

                            </div>

                        </a>

                        <a className="grid-item" href="work.html#lanara">

                            <div className="workImg">

                                <img src={require("../assets/work-img-03.jpg")} alt="" />

                            </div>

                        </a>

                        <a className="grid-item" href="work.html#base">

                            <div className="workImg">

                                <img src={require("../assets/work-img-04.jpg")} alt="" />

                            </div>

                        </a>
                        <a className="grid-item" href="work.html#base">

                            <div className="workImg">

                                <img src={require("../assets/work-img-04.jpg")} alt="" />

                            </div>

                        </a>
                        <a className="grid-item" href="work.html#base">

                            <div className="workImg">

                                <img src={require("../assets/work-img-04.jpg")} alt="" />

                            </div>

                        </a>

                    </div>

                </div>

            </section>



            <section className="panel fitscreenSec blueBg iconSection">

                <div className="container-fluid">

                    <div>

                        <h4 className="secTitle">We are a design <br className="d-block d-md-none" />solution for startups.</h4>



                        <div className="iconBoxList">

                            <div className={`iconBox fade-in-element`} style={{ animationDelay: '0.2s' }}>

                                <div className="iconImg">

                                    <img src={require("../assets/svg/app-development.svg").default} alt="" />

                                </div>

                                <h4 className="iconBoxTitle">App Development</h4>

                            </div>

                            <div className={`iconBox fade-in-element`} style={{ animationDelay: '0.4s' }}>

                                <div className="iconImg">

                                    <img src={require("../assets/svg/web-development.svg").default} alt="" />

                                </div>

                                <h4 className="iconBoxTitle">Web Development</h4>

                            </div>

                            <div className={`iconBox fade-in-element`} style={{ animationDelay: '0.6s' }}>

                                <div className="iconImg">

                                    <img src={require("../assets/svg/brand-strategy.svg").default} alt="" />

                                </div>

                                <h4 className="iconBoxTitle">Brand Strategy</h4>

                            </div>

                            <div className={`iconBox fade-in-element`} style={{ animationDelay: '0.8s' }}>

                                <div className="iconImg">

                                    <img src={require("../assets/svg/photography.svg").default} alt="" />

                                </div>

                                <h4 className="iconBoxTitle">Photography</h4>

                            </div>

                            <div className="iconBox fade-in-element" style={{ animationDelay: '1s' }}>

                                <div className="iconImg">

                                    <img src={require("../assets/svg/brand-identity.svg").default} alt="" />

                                </div>

                                <h4 className="iconBoxTitle">Brand Identity</h4>

                            </div>

                            <div className="iconBox wow fade-in-element" style={{ animationDelay: '1.2s' }}>

                                <div className="iconImg">

                                    <img src={require("../assets/svg/marketing.svg").default} alt="" />

                                </div>

                                <h4 className="iconBoxTitle">Marketing</h4>

                            </div>

                            <div className="iconBox wow fade-in-element" style={{ animationDelay: '1.4s' }}>

                                <div className="iconImg">

                                    <img src={require("../assets/svg/ui-ux.svg").default} alt="" />

                                </div>

                                <h4 className="iconBoxTitle">UI/UX</h4>

                            </div>

                            <div className="iconBox wow fade-in-element"  style={{ animationDelay: '1.6s' }}>

                                <div className="iconImg">

                                    <img src={require("../assets/svg/graphic-design.svg").default} alt="" />

                                </div>

                                <h4 className="iconBoxTitle">Graphic Design</h4>

                            </div>

                            <div className="iconBox wow fade-in-element"  style={{ animationDelay: '1.8s' }}>

                                <div className="iconImg">

                                    <img src={require("../assets/svg/pitch-decks.svg").default} alt="" />

                                </div>

                                <h4 className="iconBoxTitle">Pitch decks</h4>

                            </div>

                            <div className="iconBox iconTwo wow fade-in-element"  style={{ animationDelay: '2s' }}>

                                <div className="iconImg">

                                    <img src={require("../assets/svg/company-formation.svg").default} alt="" />

                                </div>

                                <h4 className="iconBoxTitle">Company formation</h4>

                            </div>

                            <div className="iconBox wow fade-in-element"  style={{ animationDelay: '2.2s' }}>

                                <div className="iconImg">

                                    <img src={require("../assets/svg/business-strategy.svg").default} alt="" />

                                </div>

                                <h4 className="iconBoxTitle">Business strategy</h4>

                            </div>

                            <div className="iconBox wow fade-in-element"  style={{ animationDelay: '2.4s' }}>

                                <div className="iconImg">

                                    <img src={require("../assets/svg/packaging.svg").default} alt="" />

                                </div>

                                <h4 className="iconBoxTitle">Packaging</h4>

                            </div>

                        </div>

                        <p className="text-center wow fade-in-element"  style={{ animationDelay: '2.5s' }}><Link className="link"
                            to='/get-in-touch'>Start the process</Link></p>

                        <div className="text-center bottomLogoIcon wow fade-in-element"  style={{ animationDelay: '2.5s' }}>
                            <img src={require("../assets/logo-icon.png")} alt="" /></div>

                    </div>

                </div>

            </section>

            <section className="panel fitscreenSec goldBg simpleContent" data-color="dark">

                <div className="container">

                    <div className="simpleContentInner wow fade-in-element"  style={{ animationDelay: '0.6s' }}>

                        <p><strong> A new creative agency with an established heritage.</strong></p>

                        <p>Resting at the intersection of design, strategy and execution, we are a digital agency focussed

                            on the Startups and innovative ideas of the world. Presenting the brands we work with in their

                            purest and most strategic form. The Belief in a minimalistic no nonsense approach to branding,

                            design and user experience brings forth a need for an advanced data approach to service

                            provision within the commercial sector.</p>

                        <p>There is no idea too small nor too grand, it's the vision that counts, aligning ourselves with

                            all those that share the same perspective.</p>

                        <div className="btn">

                            <Link to='/agency'>The agency</Link>

                        </div>

                    </div>

                </div>

            </section>

            <section className="panel fitscreenSec blueBg sectionFour">

                <div className="container-fluid">

                    <div>

                        <h4 className="secTitle wow fade-in-element"  style={{ animationDelay: '0.2s' }}>Working globally

                            and locally, every business has its <br /> home, we just happen to be at every doorstep.</h4>



                        <div className="iconBoxList">

                            <div className="iconBox wow fade-in-element"  style={{ animationDelay: '0.4s' }}>

                                <div className="iconImg">

                                    <img src={require("../assets/svg/paris.svg").default} alt="" />

                                </div>

                                <h4 className="iconBoxTitle">Paris</h4>

                            </div>

                            <div className="iconBox wow fade-in-element"  style={{ animationDelay: '0.6s' }}>

                                <div className="iconImg">

                                    <img src={require("../assets/svg/dubai.svg").default} alt="" />

                                </div>

                                <h4 className="iconBoxTitle">Dubai</h4>

                            </div>

                            <div className="iconBox wow fade-in-element"  style={{ animationDelay: '0.8s' }}>

                                <div className="iconImg">

                                    <img src={require("../assets/svg/riyadh.svg").default} alt="" />

                                </div>

                                <h4 className="iconBoxTitle">Riyadh</h4>

                            </div>



                            <div className="iconBox wow fade-in-element d-none d-md-block" style={{ animationDelay: '1s' }}>

                                <div className="iconImg">

                                    <img src={require("../assets/svg/san-francisco.svg").default} alt="" />

                                </div>

                                <h4 className="iconBoxTitle">San Francisco</h4>

                            </div>



                            <div className="iconBox wow fade-in-element"  style={{ animationDelay: '1.2s' }}>

                                <div className="iconImg">

                                    <img src={require("../assets/svg/beirut.svg").default} alt="" />

                                </div>

                                <h4 className="iconBoxTitle">Beirut</h4>

                            </div>

                            <div className="iconBox wow fade-in-element"  style={{ animationDelay: '1.4s' }}>

                                <div className="iconImg">

                                    <img src={require("../assets/svg/monaco.svg").default} alt="" />

                                </div>

                                <h4 className="iconBoxTitle">Monaco</h4>

                            </div>

                            <div className="iconBox wow fade-in-element"  style={{ animationDelay: '1.6s' }}>

                                <div className="iconImg">

                                    <img src={require("../assets/svg/london.svg").default} alt="" />

                                </div>

                                <h4 className="iconBoxTitle">London</h4>

                            </div>



                            <div className="iconBox wow fade-in-element d-block d-md-none" style={{ animationDelay: '1.8s' }}>

                                <div className="iconImg">

                                    <img src={require("../assets/svg/san-francisco.svg").default} alt="" />

                                </div>

                                <h4 className="iconBoxTitle">San Francisco</h4>
                            </div>
                        </div>
                        <p className="text-center wow fade-in-element"  style={{ animationDelay: '1.9s' }}><Link className="link"
                            to='/get-in-touch'>Explore our work</Link></p>
                    </div>
                </div>
            </section>
            <section className="fitscreenSec stepSec blueBg d-flex align-items-center">
                <div className="container">
                    <div className="stepCon text-center">
                        <h2 className="stepHed wow fade-in-element"  style={{ animationDelay: '0.5s' }}>We are just a few
                            steps away..</h2>
                        <p className="wow fade-in-element"  style={{ animationDelay: '0.5s' }}>Get the ball rolling</p>
                        <span className="wow fade-in-element"  style={{ animationDelay: '0.5s' }}>or</span>
                        <Link to='/get-in-touch' className="btn wow fade-in-element"  style={{ animationDelay: '0.5s' }}>Subscribe</Link>
                    </div>
                </div>
                
                <Footer color='white'/>
            </section>
            
            <Outlet />
            
        </div>
    )
}

export default Home

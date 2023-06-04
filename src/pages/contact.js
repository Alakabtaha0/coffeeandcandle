import React from 'react'
import '../css/style.css';
import Footer from '../layouts/Footer';

function Contact() {
    return (
        <div className='wrapper'>
            <section className="fitscreenSec blueBg h-auto" style={{paddingBottom: '0'}}>

                <div className="container">

                    <div className="contactMain">

                        <h2 className="panel contactTitle wow fadeInUp" data-wow-duration="0.15" data-wow-delay="0.3s">We are a

                            worldwide design agency with <br/>partners in London, Dubai, Paris and San Francisco.</h2>

                        <div className="panel contactInfoMain">

                            <div className=" contactInfo wow fadeInUp" data-wow-duration="0.15" data-wow-delay="0.3s">

                                <h2 className="contactTitle wow fadeInUp" data-wow-duration="0.15" data-wow-delay="0.5s">London

                                </h2>

                                <div className="row">

                                    <div className="col-12 col-sm-6 col-lg-3">

                                        <div className="contactBox">

                                            <h4 className="contactLink wow fadeInUp" data-wow-duration="0.15"

                                                data-wow-delay="0.7s">Find Us</h4>

                                            <p className="wow fadeInUp" data-wow-duration="0.15" data-wow-delay="0.9s">Coffee &

                                                Candle<br/> 6 Glendower Place <br/>London, SW7 3ED, UK</p>

                                            <p className="wow fadeInUp mailNow" data-wow-duration="0.15" data-wow-delay="0.11s"><a

                                                href="tel:+44 20 3655 9999">+44 20 3655 9999</a></p>

                                        </div>

                                    </div>

                                    <div className="col-12 col-sm-6 col-lg-3">

                                        <div className="contactBox">

                                            <h4 className="contactLink wow fadeInUp" data-wow-duration="0.15"

                                                data-wow-delay="0.7s">New business</h4>

                                            <p className="wow fadeInUp" data-wow-duration="0.15" data-wow-delay="0.9s">James

                                                DeViere</p>

                                            <p className="wow fadeInUp mailNow" data-wow-duration="0.15" data-wow-delay="0.9s"><a

                                                href="tel:+44 78 8443 3414">+44 78 8443 3414</a></p>

                                            <p><a className="mailNow wow fadeInUp"

                                                href="mailto:hello@coffeeandcandle.com">hello@coffeeandcandle.com</a>

                                            </p>

                                        </div>

                                    </div>

                                    <div className="col-12 col-sm-6 col-lg-3">

                                        <div className="contactBox">

                                            <h4 className="contactLink wow fadeInUp" data-wow-duration="0.15"

                                                data-wow-delay="0.7s">Media & PR</h4>

                                            <p className="wow fadeInUp" data-wow-duration="0.15" data-wow-delay="0.9s">Bilal

                                                Mansour</p>

                                            <p><a className="mailNow wow fadeInUp" data-wow-duration="0.15"

                                                data-wow-delay="0.9s"

                                                href="mailto:bilal.m@coffeeandcandle.com">bilal.m@coffeeandcandle.com</a>

                                            </p>

                                        </div>

                                    </div>

                                    <div className="col-12 col-sm-6 col-lg-3">

                                        <div className="contactBox">

                                            <h4 className="contactLink wow fadeInUp" data-wow-duration="0.15"

                                                data-wow-delay="0.7s">Jobs</h4>

                                            <p><a className="mailNow wow fadeInUp" data-wow-duration="0.15"

                                                data-wow-delay="0.9s"

                                                href="mailto:hireme@coffeeandcandle.com">hireme@coffeeandcandle.com</a>

                                            </p>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="mapdivs panel">

                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.0583933450835!2d-0.17814508754383374!3d51.49379591157913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876056802f33397%3A0x9ccbd10a4b6c560!2s6%20Glendower%20Pl%2C%20South%20Kensington%2C%20London%20SW7%203DP!5e0!3m2!1sen!2suk!4v1681624720290!5m2!1sen!2suk" width="600" height="450" 
                            style={{border:"0" }}
                            allowfullscreen="" 
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade"></iframe>

                        </div>

                    </div>

                </div>

                <div className="panel agencySub contactAgency" data-color="dark">

                    <div className="container">

                        <div className="agencySubCon">

                            <div className="agencySubDec wow fadeInUp" data-wow-duration="0.15" data-wow-delay="0.3s">'This is exactly what we needed, a one-stop shop for digital design and strategy'</div>

                            <div className="row justify-content-between align-items-center">

                                <div className="col-auto">

                                    <p className="agencyPre wow fadeInUp" data-wow-duration="0.15" data-wow-delay="0.4s">ALex Walker, Ceo Steelmerge enterprises.</p>

                                </div>

                                <div className="col-12 col-md-auto">

                                    <div className="btnRow">

                                        <a href="get-in-touch.html" className="btn wow fadeInUp" data-wow-duration="0.15" data-wow-delay="0.5s">Get in touch</a>

                                        <a href="get-in-touch.html" className="btn sub-btn wow fadeInUp" data-wow-duration="0.15" data-wow-delay="0.6s">Click here.</a>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>
                    
                </div>


                <Footer color='black' bg='#e7e1da' />
            </section>
            
           
        </div>
    )
}

export default Contact

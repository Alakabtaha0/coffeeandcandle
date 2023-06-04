import React from 'react';
import Footer from '../layouts/Footer';


function GetInTouch() {
    return (
        <>
            <section className="getintouchSec fitscreenSec blueBg d-flex align-items-center">

                <div className="container">

                    <div className="fillFormSec">

                        <h3 className="formTitle">Get in touch</h3>

                        <div className="contactForm">

                            <h4 className="fillUpTitle">Please fill out the form below</h4>

                            <form action="get-in-touch-2.html" method="post">

                                <div className="form-group">

                                    <input type="text" name="your-name" className="inputField" placeholder="Name*" />

                                </div>

                                <div className="form-group">

                                    <input type="email" name="your-email" className="inputField" placeholder="Email*" />

                                </div>

                                <div className="form-group">

                                    <input type="text" name="contact-number*" className="inputField" placeholder="Contact number*" />

                                </div>

                                <div className="form-group">

                                    <input type="text" name="company-name" className="inputField" placeholder="Company Name*" />

                                </div>

                                <div className="form-group">

                                    <input type="text" name="your-budget" className="inputField" placeholder="Budget*" />

                                </div>

                                <div className="form-group">

                                    <textarea name="tell-us" className="inputField notes" placeholder="Tell us what you think need"></textarea>

                                </div>

                                <button type="submit" className="submit-btn"><img src={require('../assets/black-chackmark.png')} alt="" /></button>

                            </form>

                        </div>

                    </div>

                </div>

                <Footer />

            </section>
        </>
    )
}

export default GetInTouch

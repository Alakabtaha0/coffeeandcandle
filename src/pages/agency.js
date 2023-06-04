import React, {useState} from 'react';
import '../css/style.css';
import Footer from '../layouts/Footer';


function Agency() {

    const [isActive1, setIsActive1] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);






    return (

        <div className='wrapper'>

            <section className="fitscreenSec agencySec">

                <div className="container">

                    <div className="agencyMain accordion" id="accordionExample">

                        <div className="panel agencyCon">

                            <h3 className="agencyHed wow fadeInUp" style={{ animationDelay: '0.4s' }}>Strategy</h3>
                            <div className="agencyDec wow fadeInUp" style={{ animationDelay: '0.4s' }}>Lets decide where to take you</div>
                            <div className="" >

                                <div className="accordion-item wow fadeInUp" style={{ animationDelay: '0.4s' }}>

                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" onClick={() => setIsActive1(!isActive1)}>Show me more+</button>
                                    </h2>

                                    <div id="collapseOne" className={`accordion-collapse ${isActive1 ? '' : 'collapse'}`} aria-labelledby="headingOne" data-bs-parent="#accordionExample">

                                        <div className="accordion-body">

                                            <div className="accBox">

                                                <div className="accCon">

                                                    <h4 className="accHead">Visual Appeal</h4>

                                                    <p>We help our clients to implement their business strategies through the creation of visually appealing and effective digital assets.</p>

                                                </div>

                                            </div>

                                            <div className="accBox">

                                                <div className="accCon">

                                                    <h4 className="accHead">Alignment equals success</h4>

                                                    <p>Working with us our clients  ensure that their digital assets are aligned with their overall business goals and strategies.</p>

                                                </div>

                                            </div>

                                            <div className="accBox">

                                                <div className="accCon">

                                                    <h4 className="accHead">Comprehensive digital strategies</h4>

                                                    <p>We develop a comprehensive digital strategy that incorporates branding, web design, social media presence, and other digital marketing tactics.</p>

                                                </div>

                                            </div>

                                            <div className="accBox">

                                                <div className="accCon">

                                                    <h4 className="accHead">Identify and create</h4>

                                                    <p>Our team assists our clients in identifying their target audience and creating digital assets that resonate with them.</p>

                                                </div>

                                            </div>

                                            <div className="accBox">

                                                <div className="accCon">

                                                    <h4 className="accHead">Data driven</h4>

                                                    <p>Through the use of data and analytics, we help our clients to measure the effectiveness of their digital assets and adjust their strategies accordingly.</p>

                                                </div>

                                            </div>

                                            <div className="accBox">

                                                <div className="accCon">

                                                    <h4 className="accHead">Stay updated</h4>

                                                    <p>Our clients stay up-to-date with the latest digital design trends and technologies, ensuring that their digital assets are competitive and effective.</p>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="panel agencyCon">

                            <h3 className="agencyHed wow fadeInUp" style={{ animationDelay: '0.4s' }}>Data driven</h3>

                            <div className="agencyDec wow fadeInUp" style={{ animationDelay: '0.4s' }}>Data driven insights</div>

                            <div className="">

                                <div className="accordion-item wow fadeInUp" style={{ animationDelay: '0.4s' }}>
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo" onClick={() => {setIsActive2(!isActive2)}}>Show me more+</button>
                                    </h2>

                                    <div id="collapseTwo" className={`accordion-collapse ${isActive2 ? '' : 'collapse'}`} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <div className="accBox">
                                                <div className="accCon">
                                                    <h4 className="accHead">Data-driven design</h4>
                                                    <p>We leverage data-driven design to create effective digital assets that deliver measurable results for start-up or scaling businesses.</p>
                                                </div>
                                            </div>

                                            <div className="accBox">
                                                <div className="accCon">
                                                    <h4 className="accHead">User data to experience</h4>
                                                    <p>By analysing user data, we identify pain points and optimise the user experience to improve conversion rates.</p>
                                                </div>
                                            </div>

                                            <div className="accBox">
                                                <div className="accCon">
                                                    <h4 className="accHead">Higher brand recognition</h4>
                                                    <p>We develop branding strategies that are based on customer insights and market trends, resulting in higher brand recognition and customer engagement.</p>
                                                </div>
                                            </div>

                                            <div className="accBox">
                                                <div className="accCon">
                                                    <h4 className="accHead">Measurable results</h4>
                                                    <p>Our focus on data-driven design ensures that our clients see measurable results from their investment in Coffee & Candle.</p>
                                                </div>
                                            </div>

                                            <div className="accBox">
                                                <div className="accCon">

                                                    <h4 className="accHead">Conversion & Engagement</h4>

                                                    <p>Our data-driven design approach ensures that all of our digital assets are optimised for conversion and engagement.</p>

                                                </div>

                                            </div>

                                            <div className="accBox">

                                                <div className="accCon">

                                                    <h4 className="accHead">Cutting edge</h4>

                                                    <p>We use the latest design tools and technologies to stay ahead of the curve and provide our clients with cutting-edge solutions.</p>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="panel agencyCon">

                            <h3 className="agencyHed wow fadeInUp" style={{ animationDelay: '0.4s' }}>Why?</h3>

                            <div className="agencyDec wow fadeInUp" style={{ animationDelay: '0.4s' }}>Why choose Coffee & Candle?</div>

                            <div>

                                <div className="accordion-item wow fadeInUp" style={{ animationDelay: '0.4s' }}>

                                    <h2 className="accordion-header" id="headingThree">

                                        <button className="accordion-button" type="button" onClick={() => setIsActive3(!isActive3)}>Show me more+</button>

                                    </h2>

                                    <div id="collapseThree" className={`accordion-collapse ${isActive3 ? '' : 'collapse'}`}>

                                        <div className="accordion-body">

                                            <div className="accBox">

                                                <div className="accCon">

                                                    <h4 className="accHead">Team effort</h4>

                                                    <p>We have a team of experienced designers who specialise in creating visually appealing and effective digital assets for start-ups.</p>

                                                </div>

                                            </div>

                                            <div className="accBox">

                                                <div className="accCon">

                                                    <h4 className="accHead">Side by side</h4>

                                                    <p>We work closely with our clients to develop branding strategies that are tailored to their unique business goals and target audience.</p>

                                                </div>

                                            </div>

                                            <div className="accBox">

                                                <div className="accCon">

                                                    <h4 className="accHead">More leads</h4>

                                                    <p>Our website design and development services have helped start-ups create user-friendly websites that drive more leads and conversions.</p>

                                                </div>

                                            </div>

                                            <div className="accBox">

                                                <div className="accCon">

                                                    <h4 className="accHead">In the know</h4>

                                                    <p>Our team of designers are well-versed in various design disciplines, including graphic design, web design, UX/UI design, and more.</p>

                                                </div>

                                            </div>

                                            <div className="accBox">

                                                <div className="accCon">

                                                    <h4 className="accHead">It never stops</h4>

                                                    <p>We provide ongoing support and maintenance to ensure that our clients' digital assets are always up-to-date and functioning properly.</p>

                                                </div>

                                            </div>

                                            <div className="accBox">

                                                <div className="accCon">

                                                    <h4 className="accHead">Data Focussed</h4>

                                                    <p>Our focus on data-driven design ensures that our clients see measurable results from their investment in our services.</p>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <div className="panel agencySub" data-color="dark">

                <div className="container">

                    <div className="agencySubCon">

                        <div className="agencySubDec wow fadeInUp" style={{ animationDelay: '0.4s' }}>'This is exactly what we needed, a one-stop shop for digital design and strategy'</div>

                        <div className="row justify-content-between align-items-center">

                            <div className="col-auto">

                                <p className="agencyPre wow fadeInUp" style={{ animationDelay: '0.4s' }}>ALex Walker, Ceo Steelmerge enterprises.</p>

                            </div>

                            <div className="col-12 col-md-auto">

                                <div className="btnRow">

                                    <a href="get-in-touch.html" className="btn wow fadeInUp" style={{ animationDelay: '0.4s' }} >Get in touch</a>

                                    <a href="get-in-touch.html" className="btn sub-btn wow fadeInUp" style={{ animationDelay: '0.4s' }}>Click here.</a>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <Footer color='black' bg='#e7e1da' />
        </div>





    )
}

export default Agency
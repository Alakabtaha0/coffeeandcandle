import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../css/work.css';
import Footer from '../layouts/Footer';
import { data } from '../data/data';


function Work() {

    return (
        <>


            <div className='fitscreenSec workSec workPage blueBg'>
                <div className="grid">
                    {
                        data.map((page) => {
                            return (
                                <Link to={`/${page.linkName}`} className='grid-item' key={page.id}>
                                    <img src={page.headerImage} alt={`${page.projectName} Website Portfolio and Design`} />
                                </Link>
                            )
                        })
                    }



                </div>
                <Outlet />
                <Footer color='white' />
            </div>
            
        </>
    )
}

export default Work

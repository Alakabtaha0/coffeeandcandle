import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Footer({ color, bg }) {
    return (

        <footer className='footerMain' style={{backgroundColor: `${bg}` }}>
            <div className='container'>
                <p className="copyRight text-center" style={{ color: `${color}` }}><a href="#">Terms and Conditions</a> | <Link to="/privacypolicy">Privacy
                    Policy</Link> | Copyright &copy; 2022 <a href="index.html">Coffee & Candle</a> All rights
                    reserved.
                </p>
            </div>
        <Outlet />
        </footer>
    )
}

export default Footer

import React, { useState, useRef, useEffect } from 'react'
import { Outlet, Link, defer } from 'react-router-dom';
import '../css/style.css';
import '../css/theme-icons.css';
import Logo from '../assets/svg/logo.svg';
import TextLogo from '../assets/svg/text-logo.svg';

function NavBar() {
    //Getting the position of the navbar menu to make it appear as though your expanding from the menu
    const [menu, setMenu] = useState(false);
    const [style, setStyle] = useState({});
    const [scrolled, setScrolled] = useState(false);
    const elementPos = useRef(null);

    function toggleMenu() {
        getMenuPosition();
        setMenu(menu => !menu);
    }

    function removeMenu() {
        if (menu) {
            setMenu(menu => !menu);
        }
    }

    function getMenuPosition() {
        let pos = elementPos.current.getBoundingClientRect();

        let newStyle = {
            clipPath: `circle(0px at ${pos.x + 15}px ${pos.y + 15}px)`
        }
        setStyle(newStyle);
    }

    useEffect(() => {
        getMenuPosition();
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            if (scrollTop > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
            
        }


        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])



    //Removed window listener to avoid memory leaks and poor performance. -> Can reapply later on if necessary

    return (
        //HTML and CSS for Navbar
        <div className={menu ? 'menuOpen' : ''}>
            <div className="socialMeadia">
                <a href="https://www.instagram.com/coffeecandleagency"><i className="icon-instagram"></i></a>
                <a href="https://twitter.com/coffeecandleuk"><i className="icon-twitter"></i></a>
                <a href="https://wa.me/447884433414"><i className="icon-whatsapp"></i></a>
            </div>



            <div className="mouseScall">

                <i className="icon-mouse"></i>

                <span>Scroll</span>

            </div>


            <div className="navMenu" style={style}>
                <div></div>
                <ul className="menu">
                    <li><Link to='/work' onClick={removeMenu}>Work</Link></li>
                    <li><Link to='/agency'onClick={removeMenu}>Agency</Link></li>
                    <li><Link to='/contact'onClick={removeMenu}>Contact</Link></li>
                </ul>
                <div className="headerSocials">
                    <a href="https://www.instagram.com/coffeecandleagency"><i className="icon-instagram"></i></a>
                    <a href="https://twitter.com/coffeecandleuk"><i className="icon-twitter"></i></a>
                    <a href="https://wa.me/447884433414"><i className="icon-whatsapp"></i></a>
                </div>
            </div>

            <header className={`headerMain ${scrolled ? 'has_sticky' : ''}`}>
                <div className="container">
                    <div className="row justify-content-between align-items-center">

                        <div className="col-auto d-none d-md-block">
                            <Link to='/home' className='siteLogo' onClick={removeMenu}>
                                <img src={Logo} alt='logo-go-to-home' />
                            </Link>
                        </div>

                        <div className="col-auto">
                            <Link to='/home' className='siteTextLogo' onClick={removeMenu}>
                                <img src={TextLogo} alt='text-logo-go-to-home' />
                            </Link>
                        </div>

                        <div className="col-auto" async onClick={toggleMenu}>
                            <div className="menuIcon" ref={elementPos}>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            
            <Outlet />
        </div>
    )
}

export default NavBar

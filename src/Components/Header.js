import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const [isHeaderTop, setIsHeaderTop] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsHeaderTop(location.pathname !== '/');
    }, [location]);

    const handleLinkClick = () => {
        setIsHeaderTop(true);
    };

    return (
        <div id="header" className={isHeaderTop ? 'header-top' : ''}>
            <div className='container' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className='header-text'>
                    <h1>
                        <Link to='/' onClick={() => setIsHeaderTop(false)} className='nav-link'>Vrushali Khedkar</Link>
                    </h1>
                    <h2>
                        I'm passionate about <span>Coding</span> , <span>Website Developing</span> & <span>Designing</span>
                    </h2>
                    <nav id='navbar' className='navbarList'>
                        <ul>
                            <li>
                                <Link to='/' className='nav-link' onClick={handleLinkClick}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to='/About' className='nav-link' onClick={handleLinkClick}>
                                    About
                                </Link>
                            </li>

                            <li>
                                <Link to='/Experience' className='nav-link' onClick={handleLinkClick}>
                                    Experience
                                </Link>
                            </li>
                            <li>
                                <Link to='/Certificate' className='nav-link' onClick={handleLinkClick}>
                                    Certificates
                                </Link>
                            </li>
                            <li>
                                <Link to='/Contact' className='nav-link' onClick={handleLinkClick}>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div class='socialLink'>
                        <Link to='https://www.linkedin.com/in/vrushali-khedkar-a0b316251/' target='_blank' rel='noopener noreferrer'><i class="fa-brands fa-linkedin"></i></Link>
                        <Link to='mailto:your.vrushalikhedkar0704@example.com'><i class="fa-solid fa-envelope-open"></i></Link>
                        <Link to='https://wa.me/8080943319' target='_blank' rel='noopener noreferrer'><i class="fa-brands fa-whatsapp"></i></Link>
                        <Link to='tel:+918080943319' ><i class="fa-solid fa-phone"></i></Link>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Header;

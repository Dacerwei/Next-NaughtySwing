import React from 'react';
import Link from 'next/link';

class Footer extends React.Component {
    render() {
        return(
            <footer className='footer'>
                <Link href="/" ><div className='logo-wrapper'>
                    <h1 className='logo-source'>Naughty Swing</h1>
                </div></Link>
                <ul className='nav-list'>
                    <nav className='nav-item'>
                        <Link href="/about" >
                            About Us
                        </Link>
                    </nav>
                    <nav className='nav-item'>
                        <Link href="/portfolio" >
                            Portfolio
                        </Link>
                    </nav>
                    <nav className='nav-item'>
                        <Link href="/cooperative" >
                            Co-op
                        </Link>
                    </nav>
                    <nav className='nav-item'>
                        <Link href="/classes" >
                            Classes
                        </Link>
                    </nav>
                    <nav className='nav-item'>
                        <Link href="/events">
                            Events
                        </Link>
                    </nav>
                </ul>
                <div className='info-wrapper'>
                    <p className="info-content">Contact Us : naughtyswingtw@gmail.com</p>
                    <p className="info-content">Copyright © 2015 Naughty Swing. All rights reserved.</p>
                    <p className="info-content">SITE BY CHINWEI HSU</p>
                </div>
            </footer>
        );
    }
};
export default Footer;
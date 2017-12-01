import React from 'react';
import Link from 'next/link';
import SocialMedia from './mobile/SocialMedia';

class Footer extends React.Component {
    render() {
        return(
            <footer className='footer'>
                <Link href="/" ><div className='logo-wrapper'>
                    <a><h1 className='logo-source'>Naughty Swing</h1></a>
                </div></Link>
                <ul className='nav-list'>
                    <nav className='nav-item'>
                        <Link href="/about" >
                            <a>About Us</a>
                        </Link>
                    </nav>
                    <nav className='nav-item'>
                        <Link href="/portfolio" >
                            <a>Portfolio</a>
                        </Link>
                    </nav>
                    <nav className='nav-item'>
                        <Link href="/coop" >
                            <a>Co-op</a>
                        </Link>
                    </nav>
                    <nav className='nav-item'>
                        <Link href="/classes" >
                            <a>Classes</a>
                        </Link>
                    </nav>
                    <nav className='nav-item'>
                        <Link href="/events">
                            <a>Events</a>
                        </Link>
                    </nav>
                </ul>
                <SocialMedia />
                <div className='info-wrapper'>
                    <p className="info-content">Contact Us : naughtyswingtw@gmail.com</p>
                    <p className="info-content">Copyright © 2015 Naughty Swing. All rights reserved.</p>
                    <p className="info-content">SITE BY CHINWEI HSU</p>
                </div>
                <style jsx>{`
                    .logo-source {
                        text-align: center;
                        color: white;
                        margin: 0;
                        font-size: 20pt;
                        letter-spacing: 1px;
                    }
                    .nav-list {
                        padding: 0;
                        text-align: center;
                    }
                    .nav-item a {
                        text-decoration-line: none;
                        color: white;
                        font-size: 14pt;
                        line-height: 1.5em;
                        letter-spacing: 1px;
                    }
                    .info-wrapper {
                        text-align: center;
                        color: white;
                        padding: 10px;
                        line-height: 1.5em;
                    }
                    .info-content {
                        margin: 0px;
                        font-size: 10pt;
                    }
                    .footer {
                        background-color: #000000;
                        padding: 5%;
                    }
                `}</style>
            </footer>
        );
    }
};
export default Footer;
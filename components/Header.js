import React from 'react';
import Link from 'next/link';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import Logo from '../static/ns_logo.svg';
import SocialMedia from './mobile/SocialMedia';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }
        this.openMenu = this.openMenu.bind(this);
    }

    openMenu() {
        this.setState({
            open: !this.state.open
        });
    }

    render() {
        return(
            <header className="header">
                <Link href="/">
                    <div className="logo">
                        <Logo id="nslogo"/>
                    </div>
                </Link>
                <div className="menu-icon">
                    <IconButton
                        onClick={this.openMenu}>
                        <MenuIcon color="#FFA500" />
                    </IconButton>
                </div>
                <Drawer width={300} openSecondary={true} open={this.state.open} containerStyle={{backgroundColor: 'black'}}>
                    <ul>
                        <nav>
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        </nav>
                        <nav>
                            <Link href="/about">
                                <a>About</a>
                            </Link>
                        </nav>
                        <nav>
                            <Link href="/portfolio">
                                <a>Portfolio</a>
                            </Link>
                        </nav>
                        <nav>
                            <Link href="/coop">
                                <a>Co-op</a>
                            </Link>
                        </nav>
                        <nav>
                            <Link href="/classes">
                                <a>Classes</a>
                            </Link>
                        </nav>
                        <nav>
                            <Link href="/events">
                                <a>Events</a>
                            </Link>
                        </nav>
                    </ul>
                    <SocialMedia />
                    <IconButton>
                        <CloseIcon color="#FFA500" onClick={this.openMenu}/>
                    </IconButton>
                </Drawer>
                <style jsx>{`
                        .icon {
                            color: white;
                        }
                        .header {
                            width: 100%;
                            height: 60px;
                            margin: 0;
                            padding: 0;
                            position: fixed;
                            top: 0;
                            left: 0;
                            background-color: black;
                        }
                        .logo {
                            position: absolute;
                            top: 1%;
                            left: 5%;
                            width: 80px;
                            margin: 0;
                            padding: 0;
                        }
                        #nslogo {
                            width: 100%;
                            height: auto;
                            margin: 0 auto;
                        }
                        .menu-icon {
                            position: absolute;
                            top: 1%;
                            right: 1%;
                            width: 80px;
                            text-align: center;
                            margin: 0;
                            padding: 0;
                        }
                    `}</style>
            </header>
        );
    }
}
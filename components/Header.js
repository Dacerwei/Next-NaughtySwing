import React from 'react';
import Link from 'next/link';
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';

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
            <div>
                <RaisedButton
                    label="Menu"
                    onClick={this.openMenu}/>
                <Drawer width={300} openSecondary={true} open={this.state.open}>
                    <ul>
                        <li>
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                <a>About</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/portfolio">
                                <a>Portfolio</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/coop">
                                <a>Co-op</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/classes">
                                <a>Classes</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/events">
                                <a>Events</a>
                            </Link>
                        </li>
                    </ul>
                </Drawer>
            </div>
        );
    }
}
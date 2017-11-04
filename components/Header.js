import React from 'react';
import Link from 'next/link';

export default class Header extends React.Component {
    render() {
        return(
            <div>
                <h1>Header</h1>
                <ul>
                    <li>
                        <Link href="/about">
                            <a>About Page</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/portfolio">
                            <a>Portfolio Page</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/coop">
                            <a>Co-op Page</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/classes">
                            <a>Classes Page</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/events">
                            <a>Events Page</a>
                        </Link>
                    </li>
                </ul>
                { this.props.children }
            </div>
        );
    }
}
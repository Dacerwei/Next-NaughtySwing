import React from 'react';
import Link from 'next/link';

export default class About extends React.Component {
    render() {
        return(
            <div>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <h1>About</h1>
            </div>
        );
    }
}
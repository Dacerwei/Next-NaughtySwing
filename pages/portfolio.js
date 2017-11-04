import React from 'react';
import Link from 'next/link';

export default class Portfolio extends React.Component {
    render() {
        return(
            <div>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <h1>Portfolio</h1>
            </div>
        );
    }
}
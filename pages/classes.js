import React from 'react';
import Link from 'next/link';

export default class Classes extends React.Component {
    render() {
        return(
            <div>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <h1>Classes</h1>
            </div>
        );
    }
}
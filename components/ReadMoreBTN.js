import React from 'react';
import Link from 'next/link';

const ReadMoreBTN = (props) => {
    return(
        <div className="read-more-wrapper">
            <Link href={props.url}>
                <a>{props.label}</a>
            </Link>
            <style jsx>{`
                .read-more-wrapper {
                    text-align: center;
                }
                .read-more-wrapper a {
                    text-decoration-line: none;
                    color: black;
                    font-size: 14pt;
                    line-height: 1.5em;
                    letter-spacing: 1px;
                    cursor: pointer;
                }
            `}</style>
        </div>
    );
};

export default ReadMoreBTN;
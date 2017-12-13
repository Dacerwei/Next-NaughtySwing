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
                    background-color: rgba(113,200,213,0.8);
                    width: 20%;
                    margin: 0 auto;
                    border-radius: 20px;
                    margin-top: 20px;
                    margin-bottom: 20px;
                }
                .read-more-wrapper a {
                    text-decoration-line: none;
                    color: white;
                    font-size: 12pt;
                    line-height: 1.5em;
                    letter-spacing: 1px;
                    cursor: pointer;
                }
            `}</style>
        </div>
    );
};

export default ReadMoreBTN;
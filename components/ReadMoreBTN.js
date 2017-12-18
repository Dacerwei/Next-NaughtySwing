import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

class ReadMoreBTN extends React.Component {
    render() {
        return(
            <div className="read-more-wrapper">
                <Link href={this.props.url}>
                    <a target={this.props.target}>{this.props.label}</a>
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
    }
}

ReadMoreBTN.defaultProps = {
    url: null,
    target: "self",
    label: null,
};

ReadMoreBTN.propTypes = {
    url: PropTypes.string,
    target: PropTypes.string,
    label: PropTypes.string
};
export default ReadMoreBTN;
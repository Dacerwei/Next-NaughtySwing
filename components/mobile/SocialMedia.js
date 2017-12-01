import React from 'react';
import FacebookIcon from '../../static/Facebook-color.svg';
import Instagram from '../../static/Instagram-color.svg';
import Youtube from '../../static/Youtube-color.svg';

export default class SocialMedia extends React.Component {
    render() {
        return(
            <div className="social-media-wrapper">
                <span className="social-media"><FacebookIcon className="social-icon" id="fb"/></span>
                <span className="social-media"><Instagram className="social-icon" id="ig"/></span>
                <span className="social-media"><Youtube className="social-icon" id="yt"/></span>
                <style jsx>{`
                    .social-icon {
                        height: 100%;
                    }
                    .social-media {
                        width: 24px;
                        height: 24px;
                    }
                    .social-media-wrapper {
                        width: 100%;
                        text-align: center;
                    }
                `}</style>
            </div>
        );
    }
}
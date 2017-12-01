import React from 'react';
import FacebookIcon from '../../static/fb-white.svg';
import Instagram from '../../static/ig-white.svg';
import Youtube from '../../static/yt-white.svg';

export default class SocialMedia extends React.Component {
    render() {
        return(
            <div className="social-media-wrapper">
                <span className="social-media"><FacebookIcon className="social-icon" id="fb"/></span>
                <span className="social-media"><Instagram className="social-icon" id="ig"/></span>
                <span className="social-media"><Youtube className="social-icon" id="yt"/></span>
                <style jsx>{`
                    .social-icon {
                        width: 48px;
                        height: 48px;
                        fill: white;
                    }
                    .social-media {
                        width: 48px;
                        height: 48px;
                        padding: 3px;
]                    }
                    .social-media-wrapper {
                        width: 100%;
                        text-align: center;
                    }
                `}</style>
            </div>
        );
    }
}
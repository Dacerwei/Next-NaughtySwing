import React from 'react';
import FacebookIcon from '../../static/fb-white.svg';
import Instagram from '../../static/ig-white.svg';
import Youtube from '../../static/yt-white.svg';

export default class SocialMedia extends React.Component {
    render() {
        return(
            <div className="social-media-wrapper">
                <a href="https://www.facebook.com/nsintaiwan/" target="blank">
                    <span className="social-media"><FacebookIcon className="social-icon" id="fb"/></span>
                </a>
                <a href="https://www.instagram.com/naughtyswing/" target="blank">
                    <span className="social-media"><Instagram className="social-icon" id="ig"/></span>
                </a>
                <a href="https://www.youtube.com/channel/UCOO0wsdVDe1KXN9t1ND6_Cw" target="blank">
                    <span className="social-media"><Youtube className="social-icon" id="yt"/></span>
                </a>
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
import React from 'react';
import FacebookIcon from '../../static/Facebook-color.svg';
import Instagram from '../../static/Instagram-color.svg';
import Youtube from '../../static/Youtube-color.svg';

export default class SocialMedia extends React.Component {
    render() {
        return(
            <div className="social-media-wrapper">
                <span className="social-media"><FacebookIcon id="fb"/></span>
                <span className="social-media"><Instagram id="ig"/></span>
                <span className="social-media"><Youtube id="yt"/></span>
            </div>
        );
    }
}
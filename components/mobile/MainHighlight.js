import React from 'react';

export default class MainHighlight extends React.Component{
    render() {
        return(
            <div className="highlight-container" id="main-highlight">
                <div className="slogan-wrapper">
                    <h1 className="slogan">We're <strong className="naughty"> Naughty </strong> so we <strong className="naughty"> Swing </strong></h1>
                </div>
            </div>
        );
    }
}
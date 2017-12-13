import React from 'react';
import ReadMore from '../ReadMoreBTN';

export default class ClassesHighlight extends React.Component{
    render() {
        return(
            <section className="highlight-wrapper" id="classes-highlight">
                <h2 className="highlight-title">近期教學活動</h2>
                <div className="classes-promote-content">
                    <iframe
                        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fnsintaiwan%2F&tabs=events&width=250&height=387&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId=757696621076512" 
                        width="250"
                        height="387"
                        style={{
                            border: 'none',
                            overflow: "hidden"
                        }}
                        scrolling="no"
                        frameBorder="0"
                        allowTransparency="true">
                    </iframe>
                </div>
                <ReadMore url="classes" label="More"/>
                <style jsx>{`
                    .classes-promote-content {
                        text-align: center;
                    }
                `}</style>
            </section>
        );
    }
}
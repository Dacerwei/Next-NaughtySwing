import React from 'react';
import Layout from '../containers/Layout';
import ClassesHighlight from '../components/mobile/ClassesHighlight';
import AboutHighlight from '../components/mobile/AboutHighlight';
import CoopHighlight from '../components/mobile/CoopHighlight';
import PortfolioHighlight from '../components/mobile/PortfolioHighlight';

export default class Index extends React.Component {
    render() {
        return(
            <div className="page-container" id="index">
                <Layout>
                <div className="highlight-container" id="main-highlight">
                    <div className="slogan-wrapper">
                        <h1 className="slogan">We're <strong className="naughty"> Naughty </strong> so we <strong className="naughty"> Swing </strong></h1>
                    </div>
                </div>
                    <ClassesHighlight />
                    <AboutHighlight />
                    <CoopHighlight />
                    <PortfolioHighlight showNumber={3} />
                </Layout>
                <style jsx>{`
                    #main-highlight {
                        height: 95vh;
                        width: 100%;
                        position: relative;
                        background-position: center;
                        background-size: cover;
                        background-repeat: no-repeat;
                        background-image: url('https://firebasestorage.googleapis.com/v0/b/naughty-swing-official-website.appspot.com/o/indexpage%2Findex_highlight.jpg?alt=media&token=3a2c9237-0986-4b24-ad3f-dfba9162d97e');
                    }
                    .slogan-wrapper {
                        height: 100%;
                        vertical-align: middle;
                        font-size: 150%;
                        color: white;
                        text-align: left;
                        text-shadow: 0 0 20px rgba(0,0,0,0.7);
                        line-height: 2.5em;
                        letter-spacing: 10px;
                        font-family: serif;
                        font-weight: bold;
                        position: absolute;
                        width: 20%;
                        top: 20%;
                        left: 10%;
                    }
                    .slogan {
                        margin: 0;
                    }
                `}</style>
            </div>
        )
    }
}
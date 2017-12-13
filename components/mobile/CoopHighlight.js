import React from 'react';
import ReadMore from '../ReadMoreBTN';
import CoopSets from '../../data/CoopSets';
import _ from 'lodash';

export default class CoopHighlight extends React.Component{
    render() {
        return(
            <section className="highlight-wrapper" id="coop-highlight">
                    <div className="title-wrapper">
                        <h2 className="highlight-title">CO-OP | 合作項目</h2>
                    </div>
                    <div className="content-wrapper">
                        <p className="intro ch">Naughty Swing 搖擺舞團專攻搖擺舞蹈編排、舞蹈教學、影片拍攝、舞蹈演出等！如果你也熱愛爵士樂，並且深深被 Swing Dance 搖擺舞的歡樂所吸引，就快來看看可以怎麼與我們合作吧！</p>
                        <p className="intro en">More than just a dance crew - Naughty Swing specializes in Swing Dance choreography, teaching and performance as well as video filming and editing. If you're amazed by the beauty of Swing Dance, why not pick some options below and work with us now!</p>
                    </div>
                    {
                        _.map(CoopSets, (coopItem) => {
                            return(
                                <div className="serviceitem-wrapper" key={coopItem.id}>
                                    <div className="icon-wrapper">
                                        <div className="icon-src" style={{backgroundImage: "url(" + coopItem.iconSrc + ")"}}></div>
                                    </div>
                                    <div className="serviceitem-title-wrapper">
                                        <h1 className="serviceitem-title">{coopItem.title}</h1>
                                    </div>
                                    <div className="serviceitem-content-wrapper">
                                        <p className="serviceitem-content ch">{coopItem.contentChinese}</p>
                                        <p className="serviceitem-content en">{coopItem.contentEnglish}</p>
                                    </div>
                                </div>
                            );
                        })
                    }
                    <ReadMore url="coop" label="More"/>
                <style jsx>{`
                    #coop-highlight {
                        background-color: black;
                        color: white;
                    }
                    .highlight-title {
                        text-align: center;
                    }
                    .content-wrapper {
                        text-align: center;
                        padding-right: 5%;
                        padding-left: 5%;
                        line-height: 2em;
                    }
                    .serviceitem-wrapper {
                        padding: 2%;
                    }
                    .icon-src {
                        margin: 0 auto;
                        height: 150px;
                        width: 150px;
                        background-size: cover;
                        background-color: rgba(113,200,213,0.8);
                        border-radius: 50%;
                    }
                    .serviceitem-title {
                        font-size: 14pt;
                        text-align: center;
                        color: orange;
                    }
                    .serviceitem-content-wrapper {
                        padding-left: 10%;
                        padding-right: 10%;
                        font-size: 12pt;
                        line-height: 2em;
                    }
                `}</style>
            </section>
        );
    }
}
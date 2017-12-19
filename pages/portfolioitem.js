import React from 'react';
import Layout from '../containers/Layout';
import PortfolioSets from '../data/PortfolioSets';
import Youtube from 'react-youtube';
import PortfolioHighlight from '../components/mobile/PortfolioHighlight';

const PortfolioItemPage = (props) => {
    const PortfolioItem = PortfolioSets[props.url.query.id];
    return(
        <div className="page-container">
            <Layout>
                <div className="item-wrapper" id="portfolio-item-page">
                    <div className="title-wrapper">
                        <h1 className="title">{PortfolioItem.title}</h1>
                    </div>
                    {
                        PortfolioItem.youtubeVideoID &&
                        <div className="video-wrapper">
                            <Youtube
                                videoId={PortfolioItem.youtubeVideoID}
                                id={PortfolioItem.youtubeVideoID}
                                className="youtubevideo"
                                opts={{
                                    width: '100%',
                                    height: '300px',
                                }}
                            />
                        </div>
                    }
                    <div className="content-wrapper">
                        <p className="content ch">{PortfolioItem.chineseDescription}</p>
                        <p className="content en">{PortfolioItem.englishDescription}</p>
                    </div>
                    <div className="title-wrapper">
                        <h2 className="title">More From Naughty Swing</h2>
                    </div>
                    <PortfolioHighlight />
                </div>
            </Layout>
            <style jsx>{`
                #portfolio-item-page {
                    background-color: black;
                    color: white;
                }
                .item-wrapper {
                    padding: 2%;
                }
                .title-wrapper {
                    text-align: center;
                    padding: 2%;
                }
                .title {
                    font-size: 20pt;
                    color: orange;
                }
                .content-wrapper {
                    padding: 2%;
                }
                .content {
                    font-size: 12pt;
                    line-height: 1.5em;
                    padding: 2%;
                }

            `}</style>
        </div>
    );
}

export default PortfolioItemPage;
import React from 'react';
import Layout from '../containers/Layout';
import PortfolioSets from '../data/PortfolioSets';
import Youtube from 'react-youtube';

const PortfolioItemPage = (props) => {
    const PortfolioItem = PortfolioSets[props.url.query.id];
    return(
        <div className="page-container">
            <Layout>
                <div className="item-wrapper">
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
                                    height: 'auto',
                                }}
                            />
                        </div>
                    }
                    <div className="content-wrapper">
                        <p className="content ch">{PortfolioItem.chineseDescription}</p>
                        <p className="content en">{PortfolioItem.englishDescription}</p>
                    </div>
                </div>
            </Layout>
            <style jsx>{`
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
                .conent {
                    font-size: 12pt;
                    line-height: 2em;
                }

            `}</style>
        </div>
    );
}

export default PortfolioItemPage;
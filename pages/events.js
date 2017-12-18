import React from 'react';
import Layout from '../containers/Layout';
import _ from 'lodash';
import Youtube from 'react-youtube';
import CompetitionRecords from '../data/CompetitionsRecord';

export default class Events extends React.Component {
    render() {
        return(
            <div className="page-container">
                <Layout>
                    <section className="section-wrapper">
                        <h1 className="events-title">Swing Events</h1>
                        <div className="iframe-wrapper">
                            <iframe
                                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fnsintaiwan%2F&tabs=events&width=300&height=387&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId=757696621076512"
                                width="300"
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
                    </section>
                    <section className="section-wrapper">
                        <h1 className="events-title">Competitions</h1>
                        <ul className="competition-list">
                        {
                            _.map(CompetitionRecords, (record) => {
                                return(
                                    <div className="wtp-wrapper">
                                        <h2>What the Pa! Vol.{record.serialNumber} Competitions</h2>
                                        {
                                            _.map(record.results, (result) => {
                                                return(
                                                    <div>
                                                        {
                                                            result.level &&
                                                            <h3>Level: {result.level}</h3>
                                                        }
                                                        {
                                                            !_.isEmpty(result.judge) &&
                                                            <p>Judge: {_.join(result.judge, ',')}</p>
                                                        }
                                                        {
                                                            result.placement.first &&
                                                            <p>First place: {result.placement.first}</p>
                                                        }
                                                        {
                                                            result.placement.second &&
                                                            <p>Second place:{result.placement.second}</p>
                                                        }
                                                        {
                                                            result.placement.third &&
                                                            <p>Third place: {result.placement.third}</p>
                                                        }
                                                        {
                                                            result.videoId &&
                                                            <div className="video-wrapper">
                                                                <Youtube
                                                                    videoId={result.videoId}
                                                                    id={result.videoId}
                                                                    className="youtubevideo"
                                                                    opts={{
                                                                        width: '100%',
                                                                        height: '300px',
                                                                    }}
                                                                />
                                                            </div>

                                                        }
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                );
                            })
                        }
                        </ul>
                    </section>
                </Layout>
                <style jsx>{`
                    .section-wrapper {
                        padding: 2%;
                        text-align: center;
                    }
                    .events-title {
                        text-align: center;
                        color: orange;
                    }
                    .iframe-wrapper {
                        text-align: center;
                    }
                    .competition-list {
                        padding: 0;
                    }
                `}</style>
            </div>
        );
    }
}
import React from 'react';
import Layout from '../containers/Layout';
import _ from 'lodash';
import Youtube from 'react-youtube';

const soloJazzCompetition = [1,2,3,4,5,6];

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
                        <h1 className="events-title">Solo Jazz Competition!</h1>
                        <ul className="competition-list">
                        {
                            _.map(soloJazzCompetition, (i) => {
                                return(
                                    <div className="wtp-wrapper">
                                        <h2>What the Pa! Vol.{i} Solo Jazz Competition</h2>
                                        <p>this is wtp vol.{i}, and it was awesome!!!</p>
                                        <p>First place: chinwei hsu</p>
                                        <p>Second place: Willie Lin</p>
                                        <p>Third place: Hao Tseng</p>
                                        <div className="video-wrapper">
                                            <Youtube
                                                videoId="6VhozvSgXGY"
                                                id="6VhozvSgXGY"
                                                className="youtubevideo"
                                                opts={{
                                                    width: '100%',
                                                    height: 'auto',
                                                }}
                                            />
                                        </div>
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
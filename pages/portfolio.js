import React from 'react';
import Layout from '../containers/Layout';
import PortfolioSets from '../data/PortfolioSets';
import Link from 'next/link';
import _ from 'lodash';

export default class Portfolio extends React.Component {
    render() {
        return(
            <div className="page-container" id="portfolio-page">
                <Layout>
                {
                    _.map(PortfolioSets, (portfolio) => {
                        return(
                            <Link href={`/portfolioitem?id=${portfolio.ID}`} key={portfolio.ID}>
                                <figure className="portfolio-wrapper">
                                    <img className="portfolio-img" src={portfolio.src}/>
                                    <figcaption className="portfolio-figcaption">
                                        <h2>{portfolio.title}</h2>
                                    </figcaption>
                                </figure>
                            </Link>
                        );
                    })
                }
                </Layout>
                <style jsx>{`
                    #portfolio-page {
                        background-color: black;
                    }
                    .portfolio-wrapper {
                        margin: 0;
                        position: relative;
\                    }
                    .portfolio-img {
                        width: 100%;
                    }
                    .portfolio-figcaption {
                        margin: 0 auto;
                        width: 80%;
                        position: absolute;
                        left: 0;
                        right: 0;
                        top: 25%;
                        bottom: 0;
                        font-size: 90%;
                        text-align: center;
                        color: white;
                        text-shadow: 0 0 10px rgba(0, 0, 0, 1);
                    }
                `}</style>
            </div>
        );
    }
}
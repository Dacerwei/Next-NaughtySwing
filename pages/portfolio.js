import React from 'react';
import Layout from '../containers/Layout';
import PortfolioSets from '../data/PortfolioSets';
import Link from 'next/link';
import _ from 'lodash';

export default class Portfolio extends React.Component {
    render() {
        return(
            <div className="page-container">
                <Layout>
                {
                    _.map(PortfolioSets, (portfolio) => {
                        return(
                            <Link href={`/portfolioitem?id=${portfolio.ID}`}>
                                <figure className="portfolio-wrapper" key={portfolio.ID}>
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
                    .portfolio-img {
                        width: 100%;
                    }
                `}</style>
            </div>
        );
    }
}
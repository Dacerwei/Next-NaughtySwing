import React from 'react';
import Layout from '../containers/Layout';
import PortfolioSets from '../data/PortfolioSets';
import _ from 'lodash';

export default class Portfolio extends React.Component {
    render() {
        return(
            <div className="page-container">
                <Layout>
                {
                    _.map(PortfolioSets, (portfolio) => {
                        return(
                            <figure className="portfolio-wrapper">
                                <img className="portfolio-img"
                                    src={portfolio.src}/>
                                <figcaption className="portfolio-figcaption">
                                    <h2>{portfolio.title}</h2>
                                </figcaption>
                            </figure>
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
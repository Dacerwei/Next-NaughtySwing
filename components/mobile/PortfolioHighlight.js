import React from 'react';
import ReadMore from '../ReadMoreBTN';
import Link from 'next/link';
import PortfolioSets from '../../data/PortfolioSets';
import _ from 'lodash';

class PortfolioHighlight extends React.Component {
    render() {
        return(
            <section className="highlight-wrapper" id="portfolio-highlight">
            {
                _.map(_.take(PortfolioSets, 3), (portfolio) => {
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
            <ReadMore url="portfolio" label="More"/>
            <style jsx>{`
                .portfolio-img {
                    width: 100%;
                }
            `}</style>
            </section>
        );
    }
}

export default PortfolioHighlight;
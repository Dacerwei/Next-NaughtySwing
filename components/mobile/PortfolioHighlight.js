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
                #portfolio-highlight {
                    background-color: black;
                }
                .portfolio-wrapper {
                    margin: 0;
                    position: relative;
                }
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
            </section>
        );
    }
}

export default PortfolioHighlight;
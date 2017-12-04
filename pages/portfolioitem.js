import React from 'react';
import Layout from '../containers/Layout';
import PortfolioSets from '../data/PortfolioSets';

const PortfolioItemPage = (props) => {
    const PortfolioItem = PortfolioSets[props.url.query.id];
    return(
        <div className="page-container">
            <Layout>
                <div className="item-wrapper">
                    <h1>{PortfolioItem.title}</h1>
                    <p>{PortfolioItem.chineseDescription}</p>
                    <p>{PortfolioItem.englishDescription}</p>
                    <p>{PortfolioItem.youtubeVideoID}</p>
                </div>
            </Layout>
        </div>
    );
}

export default PortfolioItemPage;
import React from 'react';
import Layout from '../containers/Layout';
import CoopSets from '../data/CoopSets';
import _ from 'lodash';

export default class Coop extends React.Component {
    render() {
        return(
            <div className="page-container">
                <Layout>
                <section className="content-wrapper">
                    <div className='introduction ch'>
                        <p>Naughty Swing 搖擺舞團專攻搖擺舞蹈編排、舞蹈教學、影片拍攝、舞蹈演出等！如果你也熱愛爵士樂，並且深深被 Swing Dance 搖擺舞的歡樂所吸引，就快來看看可以怎麼與我們合作吧！</p>
                    </div>
                    <div className='introduction en'>
                        <p>More than just a dance crew - Naughty Swing specializes in Swing Dance choreography, teaching and performance as well as video filming and editing. If you're amazed by the beauty of Swing Dance, why not pick some options below and work with us now!</p>
                    </div>
                </section>
                {
                    _.map(CoopSets, (coop) => {
                        return(
                            <section className="content-wrapper" key={coop.id}>
                                <div className="media-wrapper">
                                    <img className="media-img" src={ coop.mediaSrc } alt={ coop.title } />
                                </div>
                                <div className="detail-content-wrapper">
                                    <h2 className="title">{ coop.title }</h2>
                                    <div className="detail-wrapper">
                                        <p className="detail ch">{ coop.contentChinese }</p>
                                        <p className="detail en">{ coop.contentEnglish }</p>
                                    </div>
                                </div>
                            </section>
                        );
                    })
                }
                </Layout>
                <style jsx>{`
                    .media-img {
                        width: 100%;
                    }
                `}</style>
            </div>
        );
    }
}
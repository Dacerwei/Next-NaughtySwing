import React from 'react';
import Layout from '../containers/Layout';
import Experiences from '../data/ExperienceSets';
import Classnames from 'classnames';
import _ from 'lodash';

export default class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedYear: null,
            events: null
        };
        this.onChangeYear = this.onChangeYear.bind(this);
        this.updateTimeline = this.updateTimeline.bind(this);
    }

    componentDidMount() {
        let thisYear = (new Date()).getFullYear();
        let updatedEvents = this.updateTimeline(Experiences[2017]);
        this.setState({
            selectedYear: thisYear,
            events: updatedEvents
        });
    }

    onChangeYear(year) {
        const { selectedYear } = this.state;
        let events = this.updateTimeline(Experiences[year]);
        if(year !== selectedYear) {
            this.setState({
                selectedYear: year,
                events: events,
            });
        }
    }

    updateTimeline(experiencese) {
        return _.reduce(experiencese, (acc, event, i) => {
            acc.push(
                <div className="timeline-item" key={i}>
                    <div className="timeline-item-info">
                        <h3 className="timeline-item-date">{event.date}</h3>
                        <h3 className="timeline-item-title">{event.title}</h3>
                    </div>
                </div>
            );
            return  acc;
        }, []);
    }

    render() {
        const {
            events, selectedYear
        } = this.state;
        const years = [2017, 2016, 2015];

        return(
            <div className="page-container">
                <Layout>
                    <section className="section-wrapper">
                        <div className="title-wrapper">
                            <h2 className="title">Introduction | 舞團介紹</h2>
                        </div>
                        <div className="content-wrapper">
                            <p className="content ch">Naughty Swing 搖擺舞團，於 2015 年成立，由6位平均舞齡 10 年、擁有不同街舞背景的舞者所組成。擅長將不同元素融合至 Swing Dance 當中，呈現有別於以往的演出，為目前台灣新生代指標性 Swing 舞團。2016 年發起 I Charleston Taipei 影片拍攝計畫，在 2 周內突破 50 萬人次點閱率，並獲得 10 多家媒體報導，包涵今日台灣、蘋果日報以及TVBS。</p>
                            <p className="content en">Naughty Swing is founded in 2015 by 6 talented Taiwanese dancers, each with over 10 years of experience in street dance. As one of the most iconic dance crews in Taiwan, Naughty Swing is keen to integrate elements from different dance styles and to give unprecedented performances. "I Charleston Taipei" is their first official dance film project launched in 2016, reaching over 500,000 views on YouTube within 2 weeks, and was reported on by over 10 media, including Taiwan Today, Apple Daily and TVBS.</p>
                        </div>
                    </section>
                    <section className="section-wrapper">
                        <div className="title-wrapper">
                            <h2 className="title">Experience | 經歷</h2>
                        </div>
                        <div className="content-wrapper">
                            <div>
                            {
                                _.map(years, (currentYear) => {
                                    let yearButtonClass = Classnames({
                                        'yearitem': true,
                                        'yearitem-active': currentYear === selectedYear,
                                    });
                                  return(
                                    <span key={currentYear} className={yearButtonClass} onClick={this.onChangeYear.bind(this, currentYear)}>{currentYear}</span>
                                  );
                                })
                              }
                            </div>
                            <div>
                            {events}
                            </div>
                        </div>
                    </section>
                    <section className="section-wrapper">
                        <div className="title-wrapper">
                            <h2 className="title">Media Explosure | 媒體報導</h2>
                        </div>
                        <div className="content-wrapper">
                            <p className="content ch">自 2015 年成立起，Naughnty Swing 搖擺舞團透過不同的舞蹈演出與活動合作，陸續獲得不同媒體報導。 2016 年 I Charleston Taipei 影片釋出後，更受到許多指標性媒體，含電視、報紙、雜誌，與網路等，的相關報導與露出。</p>
                            <p className="content en">Since founded in 2015, Naughty Swing has be reported by different media through performance and collaboration. The media exposure has reached to the peak after releasing "I Charleston Taipei" film project launched in 2016, which  was reported on by  benchmark media, including TV, newspaper. magazine, and online media.</p>
                        </div>
                    </section>
                </Layout>
            </div>
        );
    }
}
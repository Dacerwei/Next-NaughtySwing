import React from 'react';
import Layout from '../containers/Layout';
import ClassSets from '../data/ClassSets';
import _ from 'lodash';
import ReadMore from '../components/ReadMoreBTN';

export default class Classes extends React.Component {
    render() {
        return(
            <div className="page-container">
                <Layout>
                    <section className="section-wrapper">
                    <h1 className="title">Classes</h1>
                    {
                        _.map(ClassSets, (aClass) => {
                            return(
                                <div className="class-wrapper" key={aClass.ID}>
                                    <h2 className="class-title">{aClass.title.ch} | {aClass.title.en}</h2>
                                    <h3 className="class-style">{aClass.style} : {aClass.topic}</h3>
                                    <p className="class-detail">this is class detail. all the calsses in Naughty Swing are super fun!</p>
                                    <ReadMore url={aClass.signUpLink} label="Sign Up" target="blank"/>
                                </div>
                            )
                        })
                    }
                    </section>
                </Layout>
                <style jsx>{`
                    .section-wrapper {
                        padding: 2%;
                        background-color: black;
                        color: white:
                    }
                    .title {
                        text-align: center;
                        color: orange;
                    }
                    .class-wrapper {
                        height: 250px;
                        text-align: center;
                        padding: 2%;
                        color: white;
                        height: 250px;
                        border-color: lightgray;
                        border-style: solid;
                        margin: 10px;
                        border-radius: 30px;

                    }
                `}</style>
            </div>
        );
    }
}
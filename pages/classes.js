import React from 'react';
import Layout from '../containers/Layout';
import ClassSets from '../data/ClassSets';
import _ from 'lodash';

export default class Classes extends React.Component {
    render() {
        return(
            <div className="page-container">
                <Layout>
                    <h1>Classes</h1>
                    {
                        _.map(ClassSets, (aClass) => {
                            return(
                                <div className="class-wrapper" key={aClass.ID}>
                                    <h2>{aClass.title.ch}</h2>
                                    <h2>{aClass.title.en}</h2>
                                </div>
                            )
                        })
                    }
                </Layout>
            </div>
        );
    }
}
import React from 'react';
import Layout from '../containers/Layout';
import ClassesHighlight from '../components/mobile/ClassesHighlight';

export default class Events extends React.Component {
    render() {
        return(
            <div className="page-container">
                <Layout>
                    <h1>Events</h1>
                    <ClassesHighlight/>
                </Layout>
            </div>
        );
    }
}
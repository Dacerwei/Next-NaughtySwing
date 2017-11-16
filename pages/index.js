import React from 'react';
import Layout from '../containers/Layout';
import MainHighlight from '../components/mobile/MainHighlight';
import ClassesHighlight from '../components/mobile/ClassesHighlight';
import AboutHighlight from '../components/mobile/AboutHighlight';

class Index extends React.Component {
    render() {
        return(
            <div className="page-container" id="index">
                <Layout>
                    <MainHighlight/>
                    <ClassesHighlight/>
                    <AboutHighlight/>
                </Layout>
            </div>
        );
    }
}

export default Index;
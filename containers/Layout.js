import React from 'react';
import HTMLHead from '../components/Head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <MuiThemeProvider>
                <div id="container">
                    <HTMLHead />
                    <Header />
                    {this.props.children}
                    <Footer />
                    <style jsx global>{`
                        .naughty {
                            color: #FFA500;
                        }
                        #container {
                            position: relative;
                            top: 50px;
                            left: 0;
                        }
                    `}</style>
                </div>
            </MuiThemeProvider>
        );
    }
}


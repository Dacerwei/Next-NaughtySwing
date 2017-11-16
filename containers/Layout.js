import React from 'react';
import HTMLHead from '../components/Head';
import Header from '../components/Header';
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
                    <style jsx global>{`
                        .naughty {
                            color: orange;
                        }

                        .highlight-container {
                            background-color: black;
                            color: white;
                        }
                    `}</style>
                </div>
            </MuiThemeProvider>
        );
    }
}


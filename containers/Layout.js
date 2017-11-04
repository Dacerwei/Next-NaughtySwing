import React from 'react';
import Header from '../components/Header';
import HTMLHead from '../components/Head';
import DesktopBreakpoint from '../responsive_utilities/DesktopBreakpoint';
import TabletBreakpoint from '../responsive_utilities/TabletBreakpoint';
import PhoneBreakpoint from '../responsive_utilities/PhoneBreakpoint';

export default class Layout extends React.Component {
	componentDidUpdate(prevProps) {
			window.scrollTo(0, 0);
	}
	render() {
		return(
			<div id="container">
                <HTMLHead />
				<Header>
					<DesktopBreakpoint>
                        <h2>desktop header</h2>
					</DesktopBreakpoint>
					<TabletBreakpoint>
                        <h2>tablet header</h2>
					</TabletBreakpoint>
					<PhoneBreakpoint>
                        <h2>mobile header</h2>
					</PhoneBreakpoint>
				</Header>
				{ this.props.children }
			</div>
		);
	}
}


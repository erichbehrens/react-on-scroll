import React from 'react';
import OnScroll from '../../';
import './Sticky.css';

class Sticky extends React.Component {
	state = {
		sticky: false,
	};

	setSticky = sticky => this.setState({ sticky });

	render() {
		const { title, children } = this.props;
		const { sticky } = this.state;
		return (
			<OnScroll
				className="section"
				triggers={[
					{ top: 50, bottom: -50, callback: visible => this.setSticky(visible) },
				]}
			>
				<div>
					<div className={`title ${sticky ? 'sticky' : 'inline'}`}>
						<h2>{title}</h2>
					</div>
					<div className="content">{children}</div>
				</div>
			</OnScroll>
		);
	}
}

export default Sticky;

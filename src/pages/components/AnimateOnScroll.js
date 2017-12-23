import React from 'react';
import OnScroll from '../../';
import './AnimateOnScroll.css';

class AnimateOnScroll extends React.Component {
	state = {
		title: 'hidden',
		subtitle: 'hidden',
		description: 'hidden',
	};

	setVisibility = (elementName, visible) => this.setState({ [elementName]: visible ? 'visible' : 'hidden' });

	render() {
		const { value } = this.props;
		const {
			title,
			subtitle,
			description,
		} = this.state;
		return (
			<OnScroll
				className="item"
				triggerBase="top"
				triggers={[
					{ bottom: 100, callback: visible => this.setVisibility('title', visible) },
					{ bottom: 200, top: 100, callback: visible => this.setVisibility('subtitle', visible) },
					{ bottom: 250, top: 100, callback: visible => this.setVisibility('description', visible) },
				]}
			>
				<h2 className={`title ${title}`}>{value.title}</h2>
				<h3 className={`subtitle ${subtitle}`}>{value.subtitle}</h3>
				<div className={`description ${description}`}>
					{value.description}
				</div>
			</OnScroll>
		);
	}
}

export default AnimateOnScroll;

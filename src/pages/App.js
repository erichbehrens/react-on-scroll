import React from 'react';
import OnScroll from '../';
import './styles.css';

const styles = {
	fontFamily: 'sans-serif',
	textAlign: 'center',
};

function makeItem() {
	return {
		title: 'et quis occaecat minim',
		subtitle: 'cillum qui dolor duis magna consequat eiusmod adipisicing',
		description: 'Nisi ea pariatur aliqua laborum nulla eiusmod est laborum consectetur incididunt dolore quis laborum magna. Exercitation non in sit eiusmod excepteur. Excepteur et ullamco excepteur ut dolor sit elit et. Amet occaecat dolor velit laboris id esse velit.',
	};
}

const items = Array(30).fill(0).map(makeItem);

class Item extends React.Component {
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
					{ bottom: 100, callback: visible => this.setVisibility('title', visible), repeat: 1 },
					{ bottom: 200, top: 50, callback: visible => this.setVisibility('subtitle', visible) },
					{ bottom: 250, top: 50, callback: visible => this.setVisibility('description', visible) },
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

const App = () => (
	<div style={styles}>
		<h1>react-on-scroll</h1>
		{items.map(item => <Item value={item} />)}
	</div>
);

export default App;

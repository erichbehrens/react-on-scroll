import React from 'react';
import './styles.css';
import Sticky from './components/Sticky';
import AnimateOnScroll from './components/AnimateOnScroll';

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

const items = Array(10).fill(0).map(makeItem);

const App = () => (
	<div style={styles}>
		<div className="mainTitle">
			<div className="shield npm">
				<a href="https://www.npmjs.com/package/react-on-scroll" target="blank">
					<img src="https://img.shields.io/npm/v/react-on-scroll.svg" />
				</a>
			</div>
			<h1>react-on-scroll</h1>
			<div className="shield github">
				<a href="https://www.github.com/erichbehrens/react-on-scroll" target="blank">
					<img src="https://img.shields.io/github/stars/erichbehrens/react-on-scroll.svg?style=social&amp;label=Stars" />
				</a>
			</div>

		</div>
		<div className="content">
			<Sticky title="Section 1">
				{items.map(item => <AnimateOnScroll value={item} />)}
			</Sticky>
			<Sticky title="Section 2">
				{items.map(item => <AnimateOnScroll value={item} />)}
			</Sticky>
			<Sticky title="Section 3">
				{items.map(item => <AnimateOnScroll value={item} />)}
			</Sticky>
		</div>
	</div>
);

export default App;

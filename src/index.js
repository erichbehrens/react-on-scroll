import React from 'react';

function getElementPosition(element) {
	const rect = element.getBoundingClientRect();
	const html = document.documentElement;
	const viewportBottom = window.innerHeight || html.clientHeight;
	return {
		fromTop: {
			top: rect.top,
			bottom: rect.bottom,
		},
		fromBottom: {
			top: viewportBottom - rect.top,
			bottom: viewportBottom - rect.bottom,
		},
	};
}

class OnScroll extends React.Component {
	constructor(props) {
		super(props);
		this.triggers = props.triggers.map(trigger => ({
			repeat: 0,
			...trigger,
			executionCount: 0,
			lastState: false,
		}));
	}

	onScroll = () => {
		const { fromTop, fromBottom } = getElementPosition(this.element);
		const { triggerBase } = this.props;
		const nextTriggers = this.triggers.map((trigger) => {
			let currentState;
			if (!triggerBase) {
				// xor
				currentState = (trigger.top < fromTop.top) !== (trigger.bottom < fromTop.bottom);
			} else {
				currentState =
					(typeof trigger.bottom === 'undefined' || trigger.bottom < fromBottom[triggerBase]) &&
					(typeof trigger.top === 'undefined' || trigger.top < fromTop[triggerBase]);
			}
			if (currentState !== trigger.lastState) {
				trigger.callback(currentState);
				const executionCount = (trigger.executionCount || 0) + 1;
				const repeat = (trigger.repeat === 0 || executionCount < trigger.repeat);
				return repeat && { ...trigger, lastState: currentState, executionCount };
			}
			return trigger;
		});
		this.triggers = nextTriggers.filter(item => item);
		if (this.triggers.length === 0) {
			this.unsubscribe();
		}
		this.handlingScroll = false;
	}

	handlingScroll = false;
	handleScroll = () => {
		this.handlingScroll = this.handlingScroll || requestAnimationFrame(this.onScroll);
	}

	unsubscribe() {
		if (typeof window !== 'undefined' && window.removeEventListener) {
			window.removeEventListener('scroll', this.handleScroll);
		}
	}

	componentDidMount() {
		if (typeof window !== 'undefined' && window.addEventListener) {
			window.addEventListener('scroll', this.handleScroll);
			setTimeout(this.handleScroll); // wait for react AND the browser to repaint
		}
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	render() {
		return <div
			ref={(element) => { this.element = element; }}
			className={this.props.className}
		>
			{this.props.children}
		</div>;
	}
}

export default OnScroll;

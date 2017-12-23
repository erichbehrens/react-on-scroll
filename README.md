# react-on-scroll

[![Travis](https://img.shields.io/travis/erichbehrens/react-on-scroll.svg?branch=master)](https://travis-ci.org/erichbehrens/react-on-scroll)
[![dependencies](https://david-dm.org/erichbehrens/react-on-scroll.svg)](https://david-dm.org/erichbehrens/react-on-scroll)
[![devDependencies](https://david-dm.org/erichbehrens/react-on-scroll/dev-status.svg)](https://david-dm.org/erichbehrens/react-on-scroll?type=dev)
[![downloads](https://img.shields.io/npm/dt/react-on-scroll.svg)](https://www.npmjs.com/package/react-on-scroll)

React to scroll events: animate components, lazy load data, infinite scroll

## Props
- **className** `string` _optional_ css class name

- **triggerBase** `string "top"|"bottom"` _optional_ which border of the element will be used to compute the distance from the top and bottom of the screen. If not set the callback will trigger with `true` when any part of the element is between `top` and `bottom`

- **triggers** `array` of objects with the following keys
  - **top** `number` _optional_ distance from top of the screen to trigger the state change (negative numbers are off screen)
  - **bottom** `number` _optional_ distance from bottom of the screen to trigger the state change (negative numbers are off screen)
  - **repeat** `number` _optional_ maximum number of times to execute the callback
  - **callback** `function(visible: boolean)` the function to call each time the visibility state changes

### Triggers

```js
[
  { top: 50, bottom: 100, callback: visible => doSomething(visible) },
]
// triggerBase = "top"
// will trigger with visible=true when the top border of the element is between 50px from top and 100px from bottom


// triggerBase = undefined
// will trigger with visible=true when any part of the element is between 50px from top and 100px from bottom
```

## Examples

https://github.com/erichbehrens/react-on-scroll/tree/master/src/pages/components
### Sticky section header
#### Implementation
```jsx
import OnScroll from 'react-on-scroll';

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
```

#### Usage
```html
<Sticky title="Section title">
	content
</Sticky>
```
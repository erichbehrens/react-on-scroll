import React from 'react';
import ReactDOM from 'react-dom'; // eslint-disable-line import/no-extraneous-dependencies
import { AppContainer } from 'react-hot-loader'; // eslint-disable-line import/no-extraneous-dependencies
import App from './App';

ReactDOM.render(
	<AppContainer>
		<App />
	</AppContainer>,
	document.getElementById('app'),
);

// Hot Module Replacement API
if (module.hot) {
	module.hot.accept('./App', () => {
		const NextApp = require('./App'); // eslint-disable-line global-require
		ReactDOM.render(
			<AppContainer>
				<NextApp/>
			</AppContainer>,
			document.getElementById('app'),
		);
	});
}

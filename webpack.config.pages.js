const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: [
		'react-hot-loader/patch',
		'./src/pages/index.js', // your app's entry point
	],
	output: {
		path: path.join(__dirname, 'pages'),
		publicPath: '/pages/',
		filename: 'bundle.js',
	},

	module: {
		rules: [
			{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
			{ test: /\.css$/, exclude: /node_modules/, loaders: ['style-loader', 'css-loader', 'postcss-loader'] },
		],
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: './src/pages/index.html',
			files: {
				css: ['style.css'],
				js: ['bundle.js'],
			},
		}),
	],

	/* plugins: process.argv.indexOf('-p') === -1 ? [] : [
		new webpack.optimize.UglifyJsPlugin({
			output: {
				comments: false,
			},
		}),
	], */
};

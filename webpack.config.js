/*eslint-env node*/
var path = require('path');
var webpack = require('webpack');

module.exports = {
	eslint: {
		configFile: './.eslintrc.json'
		//failOnError: true
	},
	entry: {
		default: "./*.js"
	},
	output: {
		path: __dirname,
		filename: "[name].js"
	},
	devtool: "source-map",
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: "common",
			minChunks: 2
		})
	],
	externals: {
		//"jquery": "$",
		//"underscore": "_",
		//"backbone": "Backbone",
		//"handlebars": "Handlebars"
	},
	module: {
		preLoaders: [
			{
				test: /\.js$/,
				loader: "eslint-loader",
				exclude: /node_modules/
			}
		],
	}
};

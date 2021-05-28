const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

const StyleLintPlugin = require('stylelint-webpack-plugin');
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const {srcPath, publicPath} = require('../config/paths');

module.exports = {
	entry: [path.resolve(srcPath, 'main/index.tsx')],
	resolve: {
		modules: [srcPath, 'node_modules'],
		extensions: ['.js', '.json', '.ts', '.tsx'],
		alias: {
			'react-dom': '@hot-loader/react-dom',
		},
	},
	output: {
		path: path.resolve('dist'),
		publicPath: '/',
	},
	devServer: {
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
		},
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: [
					{
						loader: 'babel-loader',
						options: { plugins: ['react-hot-loader/babel'] },
					},
					'ts-loader',
				],
			},
			{
				test: /\.(woff(2)?|ttf|eot|svg|gif)(\?v=\d+\.\d+\.\d+)?$/,
				use: [{
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'dist/assets/',
					},
				}],
			},
		],
	},
	plugins: [
		new StyleLintPlugin({
			configFile: './webpack/.stylelintrc.json',
		}),
		// new FaviconsWebpackPlugin(path.resolve(publicPath, 'favicon.svg')),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: path.resolve(publicPath, 'index.html'),
			inject: 'body',
		}),
		new FriendlyErrorsWebpackPlugin(),
		new SimpleProgressWebpackPlugin({format: 'minimal'}),
	],
};

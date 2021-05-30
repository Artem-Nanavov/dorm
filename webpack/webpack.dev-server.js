const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const webpackConfig = require('./webpack.development.config');
const { port, host } = require('../config/dev');
const env = require('../src/envConfig');

const options = {
	contentBase: false,
	hot: true,
	host,
	quiet: false,
	disableHostCheck: true,
	publicPath: '/',
	historyApiFallback: {
		rewrites: [{ from: '/', to: '/' }],
	},
	watchOptions: {
		ignored: /node_modules/,
	},
	proxy: {
		'/auth': {
			target: `${env.server_api}auth/`,
			pathRewrite: { '^/auth': '' },
			changeOrigin: true,
			secure: false,
		},
		'/fleamarket': {
			target: `${env.server_api}fleamarket/`,
			pathRewrite: { '^/fleamarket': '' },
			changeOrigin: true,
			secure: false,
		},
		'/petitions': {
			target: `${env.server_api}petitions/`,
			pathRewrite: { '^/petitions': '' },
			changeOrigin: true,
			secure: false,
		},
		'/user': {
			target: `${env.server_api}user/`,
			pathRewrite: { '^/user': '' },
			changeOrigin: true,
			secure: false,
		},
		'/phrase': {
			target: 'http://fucking-great-advice.ru/api/random',
			pathRewrite: { '^/phrase': '' },
			changeOrigin: true,
			secure: false,
		},
	},
};

WebpackDevServer.addDevServerEntrypoints(webpackConfig, options);

const compiler = webpack(webpackConfig);
const server = new WebpackDevServer(compiler, options);

server.listen(port, host);

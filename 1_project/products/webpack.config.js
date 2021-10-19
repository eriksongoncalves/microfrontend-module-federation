const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	devServer: {
		port: 8081
	},
	plugins: [
		new ModuleFederationPlugin({
			name: 'products',
			filename: 'remoteEntry.js',
			exposes: {
				'./ProductIndex' : './src/bootstrap.js'
			},
			shared: ['faker']
		}),
		new HtmlWebpackPlugin({
			template: './public/index.html'
		})
	]
}

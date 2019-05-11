const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	context: path.resolve(__dirname, 'src'),
	entry: './index.js',
	module: {
		rules: [
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
						options: { minimize: true },
					},
				],
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					'style-loader',
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader',
				],
			},
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'img/[name].[ext]',
						},
					},
					{
						loader: 'image-webpack-loader',
						options: {
							mozjpeg: {
								progressive: true,
								quality: 65,
							},
						},
					},
				],
			},
		],
	},
	devtool: 'inline-cheap-source-map',
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css',
		}),
		new HtmlWebpackPlugin({
			template: './index.html',
		}),
	],
};

const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageinPlugin = require('imagemin-webpack-plugin').default;

let isProduction = (process.env.NODE_ENV === 'production');

module.exports = {
	mode: isProduction ? 'production' : 'development',
	context: path.resolve(__dirname, 'src'),
	entry: './index.js',
	output: {
		filename: 'js/bundle.js',
		path: path.resolve(__dirname, 'static'),
		publicPath: '',
	},
	devServer: {
		static: {
			directory: path.join(__dirname, 'static'),
		},
		headers: { "Access-Control-Allow-Origin": "*" },
		historyApiFallback: true,
		hot: true,
	},
	devtool: isProduction ? false : 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.(scss|css)$/,
				use: [
					isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
					{
						loader: 'css-loader',
						options: { sourceMap: true }
					},
					{
						loader: 'postcss-loader',
						options: { sourceMap: true }
					},
					{
						loader: 'sass-loader',
						options: { sourceMap: true }
					},
				],
			},
			{
				test: /\.(png|gif|jpe?g)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'img/[name][ext][query]'
				}
			},
			{
				test: /\.(woff|woff2|eot|otf|ttf|cur)$/,
				type: 'asset/resource',
				generator: {
					filename: 'fonts/[name][ext][query]'
				}
			},
			{
				test: /\.svg$/,
				use: [
					{
						loader: 'svg-url-loader',
						options: {
							limit: 10000,
						},
					},
				],
			}
		]
	},
	optimization: {
		minimize: isProduction,
		minimizer: [new TerserPlugin()],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'css/index.css',
		}),
		new CleanWebpackPlugin({
			cleanOnceBeforeBuildPatterns: ['**/*', '!index.html', '!vercel.json'],
		}),
		new CopyWebpackPlugin({
			patterns: [
				{ from: 'img', to: 'img' },
				{ from: 'fonts', to: 'fonts' },
			],
		}),
	],
};

if (isProduction) {
	module.exports.plugins.push(
		new ImageinPlugin({
			test: /\.(png|gif|svg|jpe?g)$/,
		}),
	);
	module.exports.plugins.push(
		new webpack.LoaderOptionsPlugin({
			minimize: true
		}),
	);
}

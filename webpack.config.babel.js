import webpack from "webpack";
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CleanWebpackPlugin from "clean-webpack-plugin";

const devtool = process.env.NODE_ENV === "development" ? "#source-map" : "";

const plugins = [
    new CleanWebpackPlugin(["build"]),
    new HtmlWebpackPlugin({
        template: path.join(__dirname, "/src/index.ejs"),
        filename: "index.html",
    }),
    new webpack.EnvironmentPlugin(["NODE_ENV"]),
];

const publicPath = process.env.NODE_ENV === "development" ? "/" : "/someprodpath/";

module.exports = {
    context: path.join(__dirname, "/src"),
    entry: {
        javascript: ["babel-polyfill", "./index.jsx"],
    },
    output: {
        path: path.join(__dirname, "/build"),
        filename: "bundle.[hash].js",
        publicPath,
    },
    resolve: {
        root: [path.join(__dirname, "src")],
        extensions: ["", ".js", ".jsx", ".css"],
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: ["react-hot", "babel-loader"],
        }, {
            test: /\.html$/,
            loader: "file?name=[name].[ext]",
        }, {
            test: /\.json$/,
            loader: "json",
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader!postcss-loader",
        }, {
            test: /\.scss$/,
            loaders: ["style", "css", "sass"],
        }, {
            test: /\.(woff|woff2|eot|ttf|svg|otf)$/,
            loader: "url-loader?limit=1000000",
        }, {
            test: /\.(png|jpg|gif)$/,
            loader: "file-loader?name=assets/images/[name].[ext]",
        }
        ],
    },
    devtool,
    plugins,
};

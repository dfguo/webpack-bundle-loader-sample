var path = require("path");
var webpack = require("webpack");

module.exports = {
    context: __dirname,

    entry: {
        main: "./main.jsx"
    },

    output: {
        path: path.join(__dirname, 'dist'),
        filename: "[name]-bundle.js",
        chunkFilename: "[id].[hash]-bundle.js"
    },

    module: {
	    loaders: [
            { test: /.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /.js?$/, loader: 'babel-loader', exclude: /node_modules/ }
	    ]
    },

    resolve: {
	    extensions: ["", ".jsx", ".js", ".json"],
    },

	externals: {
	},

	plugins: [
		new webpack.PrefetchPlugin("react"),
        new webpack.optimize.CommonsChunkPlugin(
          {
            name: "main",
            children: true,
            async: true,
          }
        ),
	],

    node: {
      fs: "empty"
    }
};

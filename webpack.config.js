var path = require("path");
var webpack = require("webpack");

module.exports = {
    context: __dirname,

    entry: {
        main: "./main.jsx",
        iframe: "./iframe.jsx",
        sample1: "./sample1.jsx",
        sample2: "./sample2.jsx",
        sample3: "./sample3.jsx",
        sample4: "./sample4.jsx"
    },

    output: {
        path: path.join(__dirname, 'dist'),
        filename: "[name]-bundle.js",
        chunkFilename: "[id].[hash]-bundle.js"
    },

    module: {
	    loaders: [
            { test: /.jsx?$/, loaders: ['react-hot', 'babel-loader'], exclude: /node_modules/ },
            { test: /.js?$/, loaders: ['react-hot', 'babel-loader'], exclude: /node_modules/ }
	    ]
    },

    resolve: {
	    extensions: ["", ".jsx", ".js", ".json"],
    },

	externals: {
        // "jquery": "$",
	},

	plugins: [
	  new webpack.HotModuleReplacementPlugin(),
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

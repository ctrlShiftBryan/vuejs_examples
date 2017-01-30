module.exports = {
    entry: "./out/index.js",
    output: {
        path: __dirname,
        filename: "./out/src/bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js',
            'request$': 'xhr'
        }
    }
};

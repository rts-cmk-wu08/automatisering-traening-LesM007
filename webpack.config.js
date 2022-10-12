const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "build")
    },
    devtool:"inline-source-map",                    //giver filnavn i inspektor på browser
    devServer: {
        open: true,                                 //åbner liveserver ved npm run dev
        static: {
            directory: path.join(__dirname, "build")
        },
        port: 3000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'template.html'
        }),
        new MiniCssExtractPlugin({
            linkType: "text/css"
        })
    ],
    module: {
        rules: [
            {
                test: /\.(css|sass|scss)$/i,        //regular expression
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] //fjernet 'style-loader' for at fjerne style tag i head
            },
            {
                test: /\.(png|jpg|jpeg|svg|webp|gif|heic)$/i,
                type: "asset/resource"
            },
            {
                test: /\.js$/i,
                exclude: /(node_modules)/,          //behøver ikke karakter specifik (i) fordi mappen ALTID hedder
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}
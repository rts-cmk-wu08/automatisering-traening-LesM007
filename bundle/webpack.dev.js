const path = require("path");
const commenConfig = require("./webpack.common.js")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const listOfComponents = ['index', 'update', 'delete']

const entry = listOfComponents.reduce((entries, componentName) => {
	entries[componentName] = path.join(__dirname, `../src/${componentName}.js`);
	return entries;
}, {});

const htmlGenerators = listOfComponents.map(componentName =>{
    entries.push(new HtmlWebpackPlugin ({
        template: 'template.html',
        inject: true,
        chunks: [componentName],
        filename:`${componentName}.html
        `
    }))
})

module.exports = {
    commenConfig,
    mode: "development",
    devtool:"inline-source-map",                    //giver filnavn i inspektor på browser
    devServer: {
        open: true,                                 //åbner liveserver ved npm run dev
        static: {
            directory: path.join(__dirname, "build")
        },
        port: 3000,
    }
}
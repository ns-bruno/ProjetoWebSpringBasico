const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: 'production',
    // Propriedade para fazer debug, basta colocar na primeira linha do arquivo .js a palavra debugger;
    devtool: 'source-map',
    entry: path.resolve(__dirname, '../webapp/WEB-INF/pages/mainApp.js'),
    
    output: {
        path: path.resolve(__dirname, '../webapp/lib/bundle'),
        filename: 'bundle.js'
    },
    
    resolve: {
        // Adicionar aqui todas as extencao que eh para o webpack resolver. Add `.ts` and others as a resolvable extension.
        extensions: ['.js', '.css'],
        // Adicionar aqui os camhinhos para o webpack achar cada arquivo
        alias:{
            service: path.resolve(__dirname, '../webapp/WEB-INF/service'),
            modules: path.resolve(__dirname, '../webapp/WEB-INF/modules')
        }
    },
    
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                test: /\.js(\?.*)?$/i
            })
        ]
    }
};
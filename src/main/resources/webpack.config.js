const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    //mode: 'production',
    mode: 'development',
    // Propriedade para fazer debug, basta colocar na primeira linha do arquivo .js a palavra debugger;
    devtool: 'source-map',
    entry: {
        //vue: path.resolve(__dirname, '../webapp/WEB-INF/mymodules/vue.js'),
        mainAppCss: path.resolve(__dirname, '../webapp/WEB-INF/pages/mainAppCss.js'),
        mainApp: path.resolve(__dirname, '../webapp/WEB-INF/pages/mainApp.js'),
        login: path.resolve(__dirname, '../webapp/WEB-INF/pages/login/login.js'),
        properties: path.resolve(__dirname, '../webapp/WEB-INF/pages/properties/properties.js'),
        encryption: path.resolve(__dirname, '../webapp/WEB-INF/pages/encryption/encryption.js'),
        errorPage: path.resolve(__dirname, '../webapp/WEB-INF/pages/errorPage/errorPage.js')
    },
    output: {
        path: path.resolve(__dirname, '../webapp/lib/dist'),
        filename: '[name].js'
    },
    resolve: {
        // Adicionar aqui todas as extencao que eh para o webpack resolver. Add `.ts` and others as a resolvable extension.
        extensions: ['.js', '.css', '.vue'],
        // Adicionar aqui os camhinhos para o webpack achar cada arquivo
        alias: {
            'vue$': path.resolve(__dirname, '../resources/node_modules/vue/dist/vue.js'),
            lodash: path.resolve(__dirname, '../resources/node_modules/lodash'),
            services: path.resolve(__dirname, '../webapp/WEB-INF/services'),
            mymodules: path.resolve(__dirname, '../webapp/WEB-INF/mymodules'),
            pages: path.resolve(__dirname, '../webapp/WEB-INF/pages'),
            components: path.resolve(__dirname, '../webapp/WEB-INF/components'),
            axios: path.resolve(__dirname, '../resources/node_modules/axios/dist/axios.js'),
            vue: path.resolve(__dirname, '../resources/node_modules/vue/dist/vue.js'),
            vuetify: path.resolve(__dirname, '../resources/node_modules/vuetify/dist/vuetify.min.js'),
            vuetifyStyle: path.resolve(__dirname, '../resources/node_modules/vuetify/dist/vuetify.min.css')
        }
    },
    // Para minizar os arquivos js e css
    /*optimization: {
     minimizer: [
     new UglifyJsPlugin({
     test: /\.js(\?.*)?$/i
     }),
     new OptimizeCSSAssetsPlugin({
     assetNameRegExp: /\.css$/g
     })
     ]
     },*/

    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css"
                    //chunkFilename: "[id].css"
        }),
        // Plugin para limpar a pasta de saida do bundle antes de compilar
        new CleanWebpackPlugin(),
        // Plugin responsavel para carregar os arquivos .vue
        new VueLoaderPlugin(),
        // Plugin para copiar os aquivos que precisamos dentro da pasta publica, como os arquivos de imagens
        new CopyWebpackPlugin([
            {from: '../webapp/WEB-INF/assets', to: '../images'}
        ])
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                //include: /(node_modules\/material-design-icons-iconfont)/,
                //exclude: /(node_modules)/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // you can specify a publicPath here
                            // by default it uses publicPath in webpackOptions.output
                            //publicPath: '../webapp/lib/dist/'
                        }
                    },
                    'css-loader'
                ]
            },
            {
                test: /\.vue$/,
                use: {
                    loader: 'vue-loader'
                }
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            }
        ]
    }
};
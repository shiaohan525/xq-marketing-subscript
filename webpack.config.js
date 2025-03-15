const path = require('path');
const webpack  = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');

module.exports = {
    mode: process.env.NODE_ENV,// development production
    entry: {//頁面檔名:"對應檔名路徑"
        main: './src/sass/style.scss',
        index: './src/js/index.js',
        forum: './src/js/forum.js',
        global: './src/js/global.js',
        img: './src/js/img.js',
        header: './src/js/header.js',
    },
    output: {
        path: path.resolve(__dirname, 'pro'),
        filename: 'assets/js/[name][hash].js',
        assetModuleFilename: 'assets/img/[name][ext][query]',//圖檔輸出在pro的哪裡
        publicPath: 'auto',
    },
    module: {
        rules: [
            {
                test: /\.(scss|sass)$/,
                use: [MiniCssExtractPlugin.loader,"css-loader",
                {
                    loader: "postcss-loader",
                    options: {
                        postcssOptions: {
                            plugins: [
                                require('autoprefixer')
                            ],
                        },
                    },
                },"sass-loader"],
            },
            {
                test: /\.(png|jpe?g|gif|svg|webp)$/,
                dependency: { not: ['url'] },
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                        name: 'assets/img/[name].[ext]'
                    }
                  },
                ],
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']// 如使用babelconfig 此option可刪
                    }
                },
                include: path.resolve(__dirname, 'src'),
            }, 
        ],
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new MiniCssExtractPlugin({
            filename: "assets/css/[name][hash].css"
        }),
        new CleanWebpackPlugin(),        
        new HtmlWebpackPlugin({//要多一頁html 就new一個HtmlWebpackPlugin 格式照下面填空就好
            template: path.resolve(__dirname, './src/index.html'),
            minify: false,//HTML壓縮用，true是壓縮、false是不壓縮
            filename: 'index.html',
            chunks: ['header','global','main','index','img'],//要多吃別支JS在後面新增就好 ex:['index','about']，先後順序有影響喔
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/article.html'),
            minify: false,
            filename: 'article.html',
            chunks: ['header','global','main','index','img'],
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/forum.html'),
            minify: false,
            filename: 'forum.html',
            chunks: ['header','global','main','index','img','forum'],
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/game.html'),
            minify: false,
            filename: 'game.html',
            chunks: ['header','global','main','index','img'],
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/article-detail.html'),
            minify: false,
            filename: 'article-detail.html',
            chunks: ['header','global','main','index','img'],
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/forum-detail.html'),
            minify: false,
            filename: 'forum-detail.html',
            chunks: ['header','global','main','index','img'],
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/search-result.html'),
            minify: false,
            filename: 'search-result.html',
            chunks: ['header','global','main','index','img'],
        }),
        new HtmlWebpackPartialsPlugin({
            path: path.join(__dirname, './src/layout/header.html'),
            location: 'header',//要放入的html tag位置
            template_filename: ['index.html','article.html','forum.html','game.html','article-detail.html','forum-detail.html','search-result.html']//需引用的頁面記得新增在這裡
        }),
        new HtmlWebpackPartialsPlugin({
            path: path.join(__dirname, './src/layout/footer.html'),
            location: 'footer',
            template_filename: ['index.html','article.html','forum.html','game.html','article-detail.html','forum-detail.html','search-result.html']
        }),
    ],
    // devtool: 'source-map',// 開發完請刪掉pro裡的map檔或是先註解這個工具再建立發布包裝
    devServer:{
        host: 'localhost',
        port: 8080,
        open: true
    },
};


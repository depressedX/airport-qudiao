module.exports = {
    context: 'C:\\Users\\lph\\Desktop\\airport',
    devtool: 'cheap-module-eval-source-map',
    node: {
        setImmediate: false,
        process: 'mock',
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty'
    },
    output: {
        path: 'C:\\Users\\lph\\Desktop\\airport\\dist',
        filename: '[name].js',
        publicPath: '/'
    },
    resolve: {
        symlinks: true,
        alias: {
            '@': 'C:\\Users\\lph\\Desktop\\airport\\src',
            vue$: 'vue/dist/vue.runtime.esm.js'
        },
        extensions: [
            '.js',
            '.jsx',
            '.vue',
            '.json'
        ],
        modules: [
            'node_modules',
            'C:\\Users\\lph\\Desktop\\airport\\node_modules',
            'C:\\Users\\lph\\Desktop\\airport\\node_modules\\_@vue_cli-service@3.0.0-beta.6@@vue\\cli-service\\node_modules'
        ]
    },
    resolveLoader: {
        modules: [
            'node_modules',
            'C:\\Users\\lph\\Desktop\\airport\\node_modules',
            'C:\\Users\\lph\\Desktop\\airport\\node_modules\\_@vue_cli-service@3.0.0-beta.6@@vue\\cli-service\\node_modules'
        ],
        symlinks: true
    },
    module: {
        noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
        rules: [
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader',
                        options: {
                            preserveWhitespace: false,
                            template: {
                                doctype: 'html'
                            },
                            loaders: {
                                css: [
                                    {
                                        loader: 'vue-style-loader',
                                        options: {
                                            shadowMode: false,
                                            sourceMap: false
                                        }
                                    },
                                    {
                                        loader: 'css-loader',
                                        options: {
                                            sourceMap: false,
                                            minimize: false
                                        }
                                    }
                                ],
                                sass: [
                                    {
                                        loader: 'vue-style-loader',
                                        options: {
                                            shadowMode: false,
                                            sourceMap: false
                                        }
                                    },
                                    {
                                        loader: 'css-loader',
                                        options: {
                                            sourceMap: false,
                                            minimize: false
                                        }
                                    },
                                    {
                                        loader: 'sass-loader',
                                        options: {
                                            indentedSyntax: true,
                                            sourceMap: false
                                        }
                                    }
                                ],
                                scss: [
                                    {
                                        loader: 'vue-style-loader',
                                        options: {
                                            shadowMode: false,
                                            sourceMap: false
                                        }
                                    },
                                    {
                                        loader: 'css-loader',
                                        options: {
                                            sourceMap: false,
                                            minimize: false
                                        }
                                    },
                                    {
                                        loader: 'sass-loader',
                                        options: {
                                            sourceMap: false
                                        }
                                    }
                                ],
                                less: [
                                    {
                                        loader: 'vue-style-loader',
                                        options: {
                                            shadowMode: false,
                                            sourceMap: false
                                        }
                                    },
                                    {
                                        loader: 'css-loader',
                                        options: {
                                            sourceMap: false,
                                            minimize: false
                                        }
                                    },
                                    {
                                        loader: 'less-loader',
                                        options: {
                                            sourceMap: false
                                        }
                                    }
                                ],
                                stylus: [
                                    {
                                        loader: 'vue-style-loader',
                                        options: {
                                            shadowMode: false,
                                            sourceMap: false
                                        }
                                    },
                                    {
                                        loader: 'css-loader',
                                        options: {
                                            sourceMap: false,
                                            minimize: false
                                        }
                                    },
                                    {
                                        loader: 'stylus-loader',
                                        options: {
                                            sourceMap: false
                                        }
                                    }
                                ],
                                styl: [
                                    {
                                        loader: 'vue-style-loader',
                                        options: {
                                            shadowMode: false,
                                            sourceMap: false
                                        }
                                    },
                                    {
                                        loader: 'css-loader',
                                        options: {
                                            sourceMap: false,
                                            minimize: false
                                        }
                                    },
                                    {
                                        loader: 'stylus-loader',
                                        options: {
                                            sourceMap: false
                                        }
                                    }
                                ],
                                js: [
                                    {
                                        loader: 'cache-loader',
                                        options: {
                                            cacheDirectory: 'C:\\Users\\lph\\Desktop\\airport\\node_modules\\.cache\\cache-loader'
                                        }
                                    },
                                    {
                                        loader: 'babel-loader'
                                    }
                                ]
                            },
                            cssSourceMap: false,
                            cssModules: {
                                localIdentName: '[name]_[local]__[hash:base64:5]'
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif)(\?.*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name: 'img/[name].[hash:8].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(svg)(\?.*)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'img/[name].[hash:8].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name: 'media/[name].[hash:8].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name: 'fonts/[name].[hash:8].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                include: [
                    function () { /* omitted long function */
                    }
                ],
                use: [
                    {
                        loader: 'vue-style-loader',
                        options: {
                            shadowMode: false,
                            sourceMap: false
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: false,
                            minimize: false
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: false
                        }
                    }
                ]
            },
            {
                test: /\.stylus$/,
                include: [
                    function () { /* omitted long function */
                    }
                ],
                use: [
                    {
                        loader: 'vue-style-loader',
                        options: {
                            shadowMode: false,
                            sourceMap: false
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: false,
                            minimize: false
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: false
                        }
                    },
                    {
                        loader: 'stylus-loader',
                        options: {
                            sourceMap: false
                        }
                    }
                ]
            },
            {
                test: /\.styl$/,
                include: [
                    function () { /* omitted long function */
                    }
                ],
                use: [
                    {
                        loader: 'vue-style-loader',
                        options: {
                            shadowMode: false,
                            sourceMap: false
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: false,
                            minimize: false
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: false
                        }
                    },
                    {
                        loader: 'stylus-loader',
                        options: {
                            sourceMap: false
                        }
                    }
                ]
            },
            {
                test: /\.sass$/,
                include: [
                    function () { /* omitted long function */
                    }
                ],
                use: [
                    {
                        loader: 'vue-style-loader',
                        options: {
                            shadowMode: false,
                            sourceMap: false
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: false,
                            minimize: false
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: false
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            indentedSyntax: true,
                            sourceMap: false
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                include: [
                    function () { /* omitted long function */
                    }
                ],
                use: [
                    {
                        loader: 'vue-style-loader',
                        options: {
                            shadowMode: false,
                            sourceMap: false
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: false,
                            minimize: false
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: false
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: false
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                include: [
                    function () { /* omitted long function */
                    }
                ],
                use: [
                    {
                        loader: 'vue-style-loader',
                        options: {
                            shadowMode: false,
                            sourceMap: false
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: false,
                            minimize: false
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: false
                        }
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            sourceMap: false
                        }
                    }
                ]
            },
            {
                test: /\.module\.css$/,
                use: [
                    {
                        loader: 'vue-style-loader',
                        options: {
                            shadowMode: false,
                            sourceMap: false
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: false,
                            minimize: false,
                            modules: true,
                            importLoaders: 1,
                            localIdentName: '[name]_[local]__[hash:base64:5]'
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: false
                        }
                    }
                ]
            },
            {
                test: /\.module\.stylus$/,
                use: [
                    {
                        loader: 'vue-style-loader',
                        options: {
                            shadowMode: false,
                            sourceMap: false
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: false,
                            minimize: false,
                            modules: true,
                            importLoaders: 1,
                            localIdentName: '[name]_[local]__[hash:base64:5]'
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: false
                        }
                    },
                    {
                        loader: 'stylus-loader',
                        options: {
                            sourceMap: false
                        }
                    }
                ]
            },
            {
                test: /\.module\.styl$/,
                use: [
                    {
                        loader: 'vue-style-loader',
                        options: {
                            shadowMode: false,
                            sourceMap: false
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: false,
                            minimize: false,
                            modules: true,
                            importLoaders: 1,
                            localIdentName: '[name]_[local]__[hash:base64:5]'
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: false
                        }
                    },
                    {
                        loader: 'stylus-loader',
                        options: {
                            sourceMap: false
                        }
                    }
                ]
            },
            {
                test: /\.module\.sass$/,
                use: [
                    {
                        loader: 'vue-style-loader',
                        options: {
                            shadowMode: false,
                            sourceMap: false
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: false,
                            minimize: false,
                            modules: true,
                            importLoaders: 1,
                            localIdentName: '[name]_[local]__[hash:base64:5]'
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: false
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            indentedSyntax: true,
                            sourceMap: false
                        }
                    }
                ]
            },
            {
                test: /\.module\.scss$/,
                use: [
                    {
                        loader: 'vue-style-loader',
                        options: {
                            shadowMode: false,
                            sourceMap: false
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: false,
                            minimize: false,
                            modules: true,
                            importLoaders: 1,
                            localIdentName: '[name]_[local]__[hash:base64:5]'
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: false
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: false
                        }
                    }
                ]
            },
            {
                test: /\.module\.less$/,
                use: [
                    {
                        loader: 'vue-style-loader',
                        options: {
                            shadowMode: false,
                            sourceMap: false
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: false,
                            minimize: false,
                            modules: true,
                            importLoaders: 1,
                            localIdentName: '[name]_[local]__[hash:base64:5]'
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: false
                        }
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            sourceMap: false
                        }
                    }
                ]
            },
            {
                test: /\.jsx?$/,
                include: [
                    'C:\\Users\\lph\\Desktop\\airport\\src',
                    'C:\\Users\\lph\\Desktop\\airport\\test'
                ],
                use: [
                    {
                        loader: 'cache-loader',
                        options: {
                            cacheDirectory: 'C:\\Users\\lph\\Desktop\\airport\\node_modules\\.cache\\cache-loader'
                        }
                    },
                    {
                        loader: 'babel-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        /* DefinePlugin */ {
            definitions: {
                'process.env': {
                    NODE_ENV: '"development"',
                    BASE_URL: '"/"'
                }
            }
        },
        /* TimeFixPlugin */ {
            timefix: 11000
        },
        /* CaseSensitivePathsPlugin */ {
            options: {},
            pathCache: {},
            fsOperations: 0,
            primed: false
        },
        /* FriendlyErrorsWebpackPlugin */ {
            compilationSuccessInfo: {},
            onErrors: undefined,
            shouldClearConsole: true,
            formatters: [
                function () { /* omitted long function */
                },
                function () { /* omitted long function */
                },
                function () { /* omitted long function */
                },
                function () { /* omitted long function */
                }
            ],
            transformers: [
                function () { /* omitted long function */
                },
                function () { /* omitted long function */
                },
                function () { /* omitted long function */
                },
                function () { /* omitted long function */
                }
            ]
        },
        /* HotModuleReplacementPlugin */ {
            options: {},
            multiStep: undefined,
            fullBuildTimeout: 200,
            requestTimeout: 10000
        },
        /* NamedModulesPlugin */ {
            options: {}
        },
        /* NoEmitOnErrorsPlugin */ {},
        /* WatchMissingNodeModulesPlugin */ {
            nodeModulesPath: 'C:\\Users\\lph\\Desktop\\airport\\node_modules'
        },
        /* PreloadPlugin */ {
            options: {
                rel: 'preload',
                include: 'initial',
                fileBlacklist: [
                    /\.map$/,
                    /hot-update\.js$/
                ]
            }
        },
        /* PreloadPlugin */ {
            options: {
                rel: 'prefetch',
                include: 'asyncChunks',
                fileBlacklist: [
                    /\.map$/
                ]
            }
        },
        /* HtmlWebpackPlugin */ {
            options: {
                template: 'C:\\Users\\lph\\Desktop\\airport\\public\\index.html',
                templateParameters: function () { /* omitted long function */
                },
                filename: 'index.html',
                hash: false,
                inject: true,
                compile: true,
                favicon: false,
                minify: false,
                cache: true,
                showErrors: true,
                chunks: 'all',
                excludeChunks: [],
                title: 'Webpack App',
                xhtml: false,
                env: {
                    NODE_ENV: 'development',
                    BASE_URL: '/'
                }
            }
        }
    ],
    entry: {
        app: [
            './src/main.js'
        ]
    }
}

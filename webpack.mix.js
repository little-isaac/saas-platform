module.exports = {
    entry: {
        admin: './React/admin.js',
        auth: './React/auth.js',
    },
    module: {

        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }]
    }
};


let mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.webpackConfig({
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules(?!\/foundation-sites)|bower_components/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["react", "es2015", "stage-2"]
                    }
                }
            }
        ]
    }
});
mix.setPublicPath("");
mix.react("React/auth.js", "js/auth.js")
.react("React/admin.js","js/admin.js")
.sass("resources/sass/admin.scss","css/admin.css")
.sass("resources/sass/auth.scss","css/auth.css");

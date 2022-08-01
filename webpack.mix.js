// webpack.mix.js

let mix = require("laravel-mix");

mix.js("src/app.js", "dist").setPublicPath("dist").vue();
mix.copy("src/index.html", "dist")

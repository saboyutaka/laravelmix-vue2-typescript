// webpack.mix.js

let mix = require("laravel-mix");

mix.ts("src/app.ts", "dist").setPublicPath("dist").vue();
mix.copy("src/index.html", "dist")

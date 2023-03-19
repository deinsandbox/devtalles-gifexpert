module.exports = {
    "plugins": {
        "@csstools/postcss-nesting-experimental": true,
        "autoprefixer": true,
        "postcss-purgecss": {
            content: ["src/**/*.html"],
            css: ["src/**/*.css"]
        }
    }
}
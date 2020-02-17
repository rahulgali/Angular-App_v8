const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
    const files_es5 = [
        './dist/my-angular-app/runtime.js',
        './dist/my-angular-app/polyfills.js',
        './dist/my-angular-app/scripts.js',
        './dist/my-angular-app/main.js'
    ]

    // await fs.ensureDir('dist/my-angular-app')
    // await fs.ensureDir('dist/my-angular-app/angular-element')
    // await concat(files_es5, 'dist/my-angular-app/angular-element/element.js')
    await fs.ensureDir('dist')
    await fs.ensureDir('dist/angular-element')
    await concat(files_es5, 'dist/angular-element/element.js')
})()
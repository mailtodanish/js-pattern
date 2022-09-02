import pkg from './package.json';

// The banner to add to the top of each file
// Pulls details from the package.json file
let banner = `/*! ${pkg.name} v${pkg.version} | ${pkg.description} | Copyright ${new Date().getFullYear()} | ${pkg.license} license */`;


let formats = ['iife', 'es', 'cjs'];

// The files to compile with rollup.js,
// and the settings to use for them
export default formats.map(function(format) {
    return {
        input: 'time.js',
        output: {
            file: `time.min.${format}.js`,
            format: format,
            name: 'Time',
            banner: banner,
            exports: 'auto'
        }
    };
});
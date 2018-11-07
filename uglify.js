const fs = require("fs");

const UglifyJS = require("uglify-es");
const code = fs.readFileSync("./foo.js");

const result = UglifyJS.minify(code);

console.log(result.error); // runtime error, or `undefined` if no error
console.log(result.code);  // minified output: function add(n,d){return n+d}
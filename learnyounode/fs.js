const fs = require('fs');

var fileContents = fs.readFileSync(process.argv[2])
var numOfNewLines = fileContents.toString().split('\n').length - 1

console.log(numOfNewLines)
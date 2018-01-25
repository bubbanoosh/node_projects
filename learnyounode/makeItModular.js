const path = process.argv[2]
const fileType = process.argv[3]
const readNewlines = require('./readNewlines')

readNewlines(path, fileType, function(err, result) {
    if(err) return err;
    console.log(result.join('\n'));
})
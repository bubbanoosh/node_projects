const fs = require('fs');

//NOTE: Short way

/* fs.readFile(process.argv[2], { encoding: 'utf8' }, (error, data) => {
    if (error) return console.log(error)

    let numOfNewLines = data.toString().split('\n').length - 1
    console.log(numOfNewLines)
}) */


function readFilePromisified(filename) {
    return new Promise(
        (resolve, reject) => {
            fs.readFile(filename, { encoding: 'utf8' },
                (error, data) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data);
                    }
                });
            }).then(fileContents => {
                var numNewLines = fileContents.toString().split('\n').length -1
                console.log(numNewLines);
            })
            .catch(error => {
                console.log(error);
            }
        );
}

const filePath = process.argv[2]

readFilePromisified(filePath)
/* .then(fileContents => {
    var numNewLines = fileContents.toString().split('\n').length -1
    console.log(numNewLines);
})
.catch(error => {
    console.log(error);
}); */


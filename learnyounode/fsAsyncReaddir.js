const fs = require('fs');
const path = require('path')

function readDirPromisified(dirPath, ext) {
    return new Promise(
        (resolve, reject) => {
            fs.readdir(dirPath, { encoding: 'utf8' },
                (error, list) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(list);
                    }
                });
            }).then(dirContentsList => {
                let filteredFiles = dirContentsList.filter( f => {
                    return path.extname(f) === `.${ext}`
                })
                filteredFiles.map(f => {
                    console.log(f)
                })
                
            })
            .catch(error => {
                console.log(error);
            }
        );
}

const dirPath = process.argv[2] // '/Users/genschi/Documents/Errol/node_projects/learnyounode'
const fileExt = process.argv[3] // 'txt'

readDirPromisified(dirPath, fileExt)



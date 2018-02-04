function findDuplicateInArray(numberArray) {
    
    let dupe = numberArray.forEach(n => {
        return numberArray.indexOf(n) > 1
    })

}

console.log(findDuplicateInArray([4, 34, 5, 6, 5, 6, 77, 88, 99]))
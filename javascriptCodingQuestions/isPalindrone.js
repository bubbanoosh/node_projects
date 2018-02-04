
function isPalindrone(str) {
    if (str.length === 0 || str % 2 > 0) { return false }
    let palindroneBegin = str.substring(0, (str.length / 2))
    let palindroneEnd = str.substring(str.length/2, str.length).split('').reverse().join('')
    
    //console.log(`Length is: ${str} and half is ${palindroneBegin}`)
    //console.log(`End is ${palindroneEnd}`)

    return palindroneBegin === palindroneEnd
}

console.log(isPalindrone('ErrollorrE'))
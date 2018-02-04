function howManyOccurences(char, str) {
  /*   let occur = 0
    str.split('').forEach(c => {
        return c === char ? occur++ : occur;
    })

    return occur */

    return str.split(char).length - 1
}

console.log(howManyOccurences('D', 'absca.da'))
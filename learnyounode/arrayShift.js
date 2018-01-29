var myFish = ['angel', 'clown', 'mandarin', 'surgeon', 'goldfish', 'shark'];

console.log('myFish before:', JSON.stringify(myFish));

console.log('myFish shift():', myFish.shift()); 
// angel - ['clown', 'mandarin', 'surgeon', 'goldfish', 'shark']
console.log('myFish shift():', myFish.shift()); 
// clown - ['mandarin', 'surgeon', 'goldfish', 'shark']
console.log('myFish shift():', myFish.shift()); 
// mandarin - ['surgeon', 'goldfish', 'shark']
console.log('Array final contents:', myFish.toString())
// Left over array values
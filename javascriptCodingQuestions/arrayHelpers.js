let numArray = [23, 34, 555, 56, -343]

numArray.forEach(v => console.log(`Value: ${v}`))
let sum = 0
numArray.forEach(v => sum += v)
console.log(`Sum is: ${sum}`)

let addOne = numArray.map(v => v+1)
console.log(`Using map: ${addOne}`)

let vehicles = [
    {vehicleId: 1, make: 'Holden', model: 'Commodore', isCool: true, has4Doors: true},
    {vehicleId: 2, make: 'Ford', model: 'Falcon', isCool: false, has4Doors: true},
    {vehicleId: 3, make: 'Toyota', model: 'Supra', isCool: true, has4Doors: true},
    {vehicleId: 4, make: 'Mitsubishi', model: 'Magna', isCool: false, has4Doors: true}
]
let driver = {
    id: 1,
    name: 'Fred', 
    vehicleId: 3
}
let models = vehicles.map(vehicle => vehicle.model)
console.log(models)

let filteredVehicles = vehicles.filter(v => v.isCool === true)
console.log(`Filter: ${filteredVehicles.length}`)

function findVehicleForDriver(vehicles, driver) {
    return vehicles.find(v => v.vehicleId === driver.vehicleId)
}
let theVehicleForTheDriver = findVehicleForDriver(vehicles, driver)
console.log(`Drivers vehicle is: ${theVehicleForTheDriver.make} ${theVehicleForTheDriver.model}`)

let allHave4Doors = vehicles.every(v => v.has4Doors === true)
console.log(`numArray.every() - ${allHave4Doors}`)
let someCarsAreCool = vehicles.some(v => v.isCool)

let letter = 'hol'
let someCarsContainTheLetter = vehicles.some(v => v.make.toLowerCase().indexOf(letter) > -1)
console.log(`arry.some() - ${someCarsContainTheLetter}`)

let total = numArray.reduce((sum, val) => {
    return sum + val
}, 0);
console.log(`Total from numArray.reduce(accum, val) = ${total}`)
console.log(`Average is ${(total / numArray.length).toFixed(2)}`)


let test = numArray.some(n => n === 777)
console.log(test)
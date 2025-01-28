let myDate = new Date()

console.log(myDate.toString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)

let myCdate = new Date(2023,0,23)
console.log(myCdate.toString())


let myTimeStamp = Date.now()

console.log(myTimeStamp)
console.log(myCdate.getTime())

console.log(Math.floor(Date.now()/1000))
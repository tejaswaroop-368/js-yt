const arr= [0,1,2,3,4,"hitesh",true]
console.log(arr)

// arrrrrrrays methods********

arr.push(7);


arr.pop()

arr.unshift(9)

console.log(arr.includes(9))

const newarr= arr.join()
console.log(arr)
console.log(newarr) //string

//SLICE AND SPLICE

const myn1 = arr.slice(1,3)
console.log(myn1)

const myn2 = arr.splice(1,3)
console.log(myn2)  // splice manipulate sthe original operation

console.log(arr)





const tv ={
    name:"walton",
color:"black",
Price: 30,
isBeatiful :true
}
// console.log(tv)
//all  property
// const keys = Object.keys(tv)
// console.log(keys)
//all Values Property
// const keys = Object.values(tv)
// console.log(keys)



// array of array / two dimentional array
const pair = Object.entries(tv)
// console.log(pair)

// delete object
delete tv.Price
// console.log(tv)
// freeze
// Object.freeze(tv)
tv.source = "america"
console.log(tv)
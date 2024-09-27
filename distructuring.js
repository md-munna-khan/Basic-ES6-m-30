const actor = {
    name : "munna",
    age : 23,
    phone : "45646347",
    money : 235234

}

const {age : biyosh,phone} = actor

// console.log(biyosh)
// console.log(phone)


// aray detructuring
const [x,y] = [30,50]
//
function doubleIt (a,b){
    return[a*2,b*3]
}
const outPut =doubleIt(3,5)
console.log(...outPut)
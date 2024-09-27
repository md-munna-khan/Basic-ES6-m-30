
// function declaration

// function add(a, b){
// const result = a + b;
// return result
// }
function add(a, b){

return  a + b;
}
// function expression
const add2 = function (a, b){
    return a + b
}


// arrow function
const add3 = (a ,b) => a + b;
const add4 = (num1,num2, num3) => num1 + num2 + num3
const sum = add4(20,10,20)
// console.log(sum)

const money = (a,b) => a + b;
const result =money(200,30);
console.log(result)
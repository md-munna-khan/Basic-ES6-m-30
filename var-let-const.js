/**
 * var = no reason to use var
 * let = allow it to reason
 * const = do not allow it to reason
 */
const money = 25;
let income = 50;
income = 100
console.log(income)

// array
const number = [32,5,7,5,757,856,436,];
number[0] = 100;

number.push(30,50,436,)
console.log(number)
// object
const student = {
    name : "munna",
    class: 12

}
student.name = "masud"
console.log(student)
// loop
let sum = 0;
for(let i = 0; i <10; i++){
    sum = sum + i ;
}
console.log(sum)
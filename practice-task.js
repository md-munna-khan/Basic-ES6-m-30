//practice problem-1

//1
function add(num1,num2,num3){
    const result = num1 * num2 * num3;
    return result
}
const outPut = add(5,5,5);
// console.log(outPut)

// 2
const message = ` I am a web developer
I love to code
I love to eat biryani `
// console.log(message)
//3
function three(a,b=20){
    const total = a + b;
    return total
}
// const result =three(5);
// console.log(result)


// Practice Problem 2
// function getEvenLengthNames(names) {
//     let evenLengthNames = [];
//     for (let i = 0; i < names.length; i++) {
//         if (names[i].length % 2 === 0) {
//             evenLengthNames.push(names[i]);
//         }
//     }
//     return evenLengthNames;
// }

// // Example usage:
// let friendsNames = ["Alice", "Bob", "Charlie", "Dave", "Eve"];
// let result = getEvenLengthNames(friendsNames);
// console.log(result);  // Output: ["Dave"]
function eventLengthName(names){
    let evenLength = []
    for(let i = 0;i <names.length;i ++)
        if(names[i].length %2 === 0){
            evenLength.push(names[i])
        }
        return evenLength
}
const friendsNames = eventLengthName(['manik','sofif','munnaf'])
// console.log(friendsNames)
function classMate (names){
    let name =[]
    for(let i = 0;i <names.length;i++)
        if(names[i].length %2 === 1){
            name.push(names[i])
        }
        return name
}
const y = classMate(['manika','sofif','munna'])
// console.log(y)

//problem4
const number1 =[23,56,78,34,215,67,6,32,45,640]
const number2 =[23,76,78,340,205,67,6,32,45,64]
const total= [...number1,...number2];
const arrayMax = Math.max(...total)
console.log(arrayMax)